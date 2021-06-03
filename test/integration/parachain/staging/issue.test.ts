import { ApiPromise, Keyring } from "@polkadot/api";
import { KeyringPair } from "@polkadot/keyring/types";
import { ElectrsAPI, DefaultElectrsAPI } from "../../../../src/external/electrs";
import { DefaultIssueAPI, IssueAPI } from "../../../../src/parachain/issue";
import { createPolkadotAPI } from "../../../../src/factory";
import { btcToSat, dotToPlanck, satToBTC } from "../../../../src/utils";
import { assert, expect } from "../../../chai";
import { defaultParachainEndpoint } from "../../../config";
import * as bitcoinjs from "bitcoinjs-lib";
import { BitcoinCoreClient } from "../../../../src/utils/bitcoin-core-client";
import Big from "big.js";
import { issueSingle } from "../../../../src/utils/issue";

describe.only("issue", () => {
    let api: ApiPromise;
    let issueAPI: IssueAPI;
    let electrsAPI: ElectrsAPI;
    let bitcoinCoreClient: BitcoinCoreClient;
    let keyring: Keyring;

    // alice is the root account
    let alice: KeyringPair;
    let charlie_stash: KeyringPair;
    let dave_stash: KeyringPair;

    before(async function () {
        api = await createPolkadotAPI("wss://beta.polkabtc.io/api/parachain");
        keyring = new Keyring({ type: "sr25519" });
        // Alice is also the root account
        alice = keyring.addFromUri("//Alice");
        charlie_stash = keyring.addFromUri("//Charlie//stash");
        dave_stash = keyring.addFromUri("//Dave//stash");

        electrsAPI = new DefaultElectrsAPI("https://electr-testnet.do.polkabtc.io");
        bitcoinCoreClient = new BitcoinCoreClient("testnet", "localhost", "rpcuser", "rpcpassword", "18332", "bridgebot");
        issueAPI = new DefaultIssueAPI(api, bitcoinjs.networks.testnet, electrsAPI);
    });

    after(async () => {
        api.disconnect();
    });

    describe.only("execute", () => {
        it.only("should request and manually execute issue", async () => {
            const amount = new Big("0.001");
            const feesToPay = await issueAPI.getFeesToPay(amount);
            const oneSatoshi = new Big(satToBTC("1"));
            const issueResult = await issueSingle(
                api,
                electrsAPI,
                bitcoinCoreClient,
                alice,
                amount,
                dave_stash.address,
                false,
                false
            );
            assert.equal(
                issueResult.finalPolkaBtcBalance.sub(issueResult.initialPolkaBtcBalance).toString(),
                amount.sub(feesToPay).sub(oneSatoshi).toString(),
                "Final balance was not increased by the exact amount specified"
            );

            assert.isTrue(
                issueResult.finalDotBalance.sub(issueResult.initialDotBalance).lt(new Big(dotToPlanck("1") as string)),
                "Issue-Redeem were more expensive than 1 DOT"
            );
        }).timeout(500000);
    });

});
