import { AddressOrPair } from "@polkadot/api/submittable/types";
import { ApiPromise } from "@polkadot/api";
import { Signer } from "@polkadot/api/types";

import {
    IssueAPI,
    RedeemAPI,
    VaultsAPI,
    StakedRelayerAPI,
    OracleAPI,
    BTCCoreAPI,
    CollateralAPI,
    TreasuryAPI,
} from "../apis";
import { MockIssueAPI } from "./apis/issue";
import { MockRedeemAPI } from "./apis/redeem";
import { MockVaultsAPI } from "./apis/vaults";
import { MockStakedRelayerAPI } from "./apis/staked-relayer";
import { PolkaBTCAPI } from "../polkabtc-api";
import { StakedRelayerClient } from "../http";
import { MockOracleAPI } from "./apis/oracle";
import { MockBTCCoreAPI } from "./apis/btc-core";
import { MockCollateralAPI } from "./apis/collateral";
import { MockTreasuryAPI } from "./apis/treasury";

export default class MockPolkaBTCAPI implements PolkaBTCAPI {
    public readonly vaults: VaultsAPI;
    public readonly issue: IssueAPI;
    public readonly redeem: RedeemAPI;
    public readonly stakedRelayer: StakedRelayerAPI;
    public readonly relayer: StakedRelayerClient;
    public readonly oracle: OracleAPI;
    public readonly btcCore: BTCCoreAPI;
    public readonly collateral: CollateralAPI;
    public readonly treasury: TreasuryAPI;

    constructor(readonly api: ApiPromise, private _account?: AddressOrPair) {
        this.vaults = new MockVaultsAPI();
        this.issue = new MockIssueAPI();
        this.redeem = new MockRedeemAPI();
        this.stakedRelayer = new MockStakedRelayerAPI();
        this.relayer = new StakedRelayerClient("");
        this.oracle = new MockOracleAPI();
        this.btcCore = new MockBTCCoreAPI();
        this.collateral = new MockCollateralAPI();
        this.treasury = new MockTreasuryAPI();
    }

    setAccount(account: AddressOrPair, _signer?: Signer): void {
        this._account = account;
    }

    get account(): AddressOrPair | undefined {
        return this._account;
    }
}
