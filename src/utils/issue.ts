import { ApiPromise } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import Big from "big.js";

import { btcToSat, satToBTC, IssueRequestExt, getBitcoinNetwork, DefaultFeeAPI } from "..";
import { ElectrsAPI } from "../external/electrs";
import { DefaultCollateralAPI } from "../parachain/collateral";
import { IssueRequestResult, DefaultIssueAPI } from "../parachain/issue";
import { DefaultTreasuryAPI } from "../parachain/treasury";
import { BitcoinCoreClient } from "./bitcoin-core-client";

export interface IssueResult {
    request: IssueRequestResult;
    initialDotBalance: Big;
    finalDotBalance: Big;
    initialPolkaBtcBalance: Big;
    finalPolkaBtcBalance: Big;
}

export async function issueSingle(
    api: ApiPromise,
    electrsAPI: ElectrsAPI,
    bitcoinCoreClient: BitcoinCoreClient,
    issuingAccount: KeyringPair,
    amount: Big,
    vaultAddress?: string,
    autoExecute = true,
    triggerRefund = false,
    network = "regtest",
    atomic = true
): Promise<IssueResult> {
    const treasuryAPI = new DefaultTreasuryAPI(api);
    const bitcoinjsNetwork = getBitcoinNetwork(network);
    const issueAPI = new DefaultIssueAPI(api, bitcoinjsNetwork, electrsAPI);
    const collateralAPI = new DefaultCollateralAPI(api);

    issueAPI.setAccount(issuingAccount);
    const requesterAccountId = api.createType("AccountId", issuingAccount.address);
    const initialBalanceDOT = await collateralAPI.balance(requesterAccountId);
    const initialBalancePolkaBTC = await treasuryAPI.balance(requesterAccountId);
    const blocksToMine = 3;

    // request issue
    const amountAsSatoshi = api.createType("Balance", btcToSat(amount.toString()));
    let rawRequestResult;
    if (vaultAddress) {
        const feeAPI = new DefaultFeeAPI(api);
        const griefingCollateralRate = await feeAPI.getIssueGriefingCollateralRate();
        const vaultAccountId = api.createType("AccountId", vaultAddress);
        rawRequestResult = await issueAPI.requestAdvanced(
            new Map([[vaultAccountId, amountAsSatoshi]]),
            griefingCollateralRate,
            atomic
        );
    } else {
        rawRequestResult = await issueAPI.request(amountAsSatoshi, { atomic });
    }
    if (rawRequestResult.length !== 1) {
        throw new Error("More than one issue request created");
    }
    const requestResult = rawRequestResult[0];
    let issueRequest;
    try {
        issueRequest = await issueAPI.getRequestById(requestResult.id);
    } catch (e) {
        // IssueCompleted errors occur when multiple vaults attempt to execute the same request
        console.log(e);
    }

    let amountAsBtc = new Big(
        satToBTC((issueRequest as IssueRequestExt).amount.add((issueRequest as IssueRequestExt).fee).toString())
    );

    if (triggerRefund) {
        // Send 1 more Btc than needed
        amountAsBtc = amountAsBtc.add(1);
    }

    // send btc tx
    const vaultBtcAddress = requestResult.issueRequest.btc_address;
    if (vaultBtcAddress === undefined) {
        throw new Error("Undefined vault address returned from RequestIssue");
    }

    const txData = await bitcoinCoreClient.sendBtcTxAndMine(vaultBtcAddress, amountAsBtc, blocksToMine);

    if (autoExecute === false) {
        // execute issue, assuming the selected vault has the `--no-issue-execution` flag enabled
        await issueAPI.execute(requestResult.id.toString(), txData.txid);
    } else {
        // wait for vault to execute issue
        while (!(await issueAPI.getRequestById(requestResult.id)).status.isCompleted) {
            await sleep(1000);
        }
    }

    const [finalBalancePolkaBTC, finalBalanceDOT] = await Promise.all([
        treasuryAPI.balance(requesterAccountId),
        collateralAPI.balance(requesterAccountId),
    ]);
    return {
        request: requestResult,
        initialDotBalance: initialBalanceDOT,
        finalDotBalance: finalBalanceDOT,
        initialPolkaBtcBalance: initialBalancePolkaBTC,
        finalPolkaBtcBalance: finalBalancePolkaBTC,
    };
}

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

