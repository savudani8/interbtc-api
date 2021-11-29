$ yarn test:integration:staging


  Initialize parachain state
2021-11-24 15:08:39        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
Initializing stable block confirmations...
Transaction finalized at blockHash 0xf90d7a0e3452c47fb352e613ccdf61eec91ab8a00d3a6792e2d67cc729d0dc7b
	' {"applyExtrinsic":1}: sudo.Sudid:: [{"ok":null}]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":100858000,"class":"Operational","paysFee":"Yes"}]
Transaction finalized at blockHash 0xb9587d231f9ec91c1f4c374923a734f901f9695d26bc17448b5e8b425ddef2a3
	' {"applyExtrinsic":1}: sudo.Sudid:: [{"ok":null}]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":100858000,"class":"Operational","paysFee":"Yes"}]
Mining 3 Bitcoin block(s)
    ✓ should set the stable confirmations and ready the BTC-Relay (33996ms)
Initializing the exchange rate...
Transaction finalized at blockHash 0x514d732b60d00b2d90b481cd68ba197741adfed528136fc21af31159ba1f715e
	' {"applyExtrinsic":1}: oracle.FeedValues:: ["5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",[[{"exchangeRate":"DOT"},"0x00000000000051a340fbf31d24eb8000"]]]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":303898000,"class":"Normal","paysFee":"Yes"}]
Initializing the exchange rate...
Transaction finalized at blockHash 0x5c0bc53989d2af2aa7cd9dd72317575981bf2553f46cf08ee48f78674cb63454
	' {"applyExtrinsic":1}: oracle.FeedValues:: ["5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",[[{"exchangeRate":"KSM"},"0x00000000001fe3c5626af7626bfe0000"]]]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":303898000,"class":"Normal","paysFee":"Yes"}]
    ✓ should set the exchange rate (35889ms)
Initializing BTC tx fees...
Transaction finalized at blockHash 0xff0201f66d620dd13b8bdc8813a0ada4ca2c18ffb63bcf07ba862590e50173a6
	' {"applyExtrinsic":1}: oracle.FeedValues:: ["5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",[[{"feeEstimation":null},"0x00000000000000000de0b6b3a7640000"]]]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":303898000,"class":"Normal","paysFee":"Yes"}]
    ✓ should set BTC tx fees (24456ms)
Initializing vault nomination...
Transaction finalized at blockHash 0x92b8a7d1404af06961b5c80e593d12619d6b260be80fff4992697111f09981f1
	' {"applyExtrinsic":1}: sudo.Sudid:: [{"ok":null}]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":102845000,"class":"Normal","paysFee":"Yes"}]
    ✓ should enable vault nomination (17303ms)
Initializing an issue...
Transaction finalized at blockHash 0x10ef0d7068fe69df0b2a69504543e8ce89cf85e4c014247954a0218da99d096d
	' {"applyExtrinsic":1}: tokens.Reserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",135033]
	' {"applyExtrinsic":1}: vaultRegistry.IncreaseToBeIssuedTokens:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},7000]
	' {"applyExtrinsic":1}: vaultRegistry.RegisterAddress:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x1cf82736a84d5ca6e998c08dd4f6ba015ef5391d"}]
	' {"applyExtrinsic":1}: issue.RequestIssue:: ["0x42811a5e9eb8738f4017e83cf9910c77f0d00cce0f57a0faba7872edd537f867","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",6965,35,135033,{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x1cf82736a84d5ca6e998c08dd4f6ba015ef5391d"},"0x0316f147eac6480584a4117fcba259eb18428d086999fe7b13eb239943d1597417"]
	' {"applyExtrinsic":1}: utility.ItemCompleted:: []
	' {"applyExtrinsic":1}: utility.BatchCompleted:: []
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1358948000,"class":"Normal","paysFee":"Yes"}]
Broadcasting tx: 0.00007 BTC to bcrt1qrnuzwd4gf4w2d6vcczxafa46q9002wgaqjr937
txid: 7e8b9e267c1be923a5c53040a3096e261409c5c224d9ba580c00008b4974957a
Mining 3 Bitcoin block(s)
Auto-executing, waiting for vault to submit proof
    ✓ should issue 0.00007 InterBtc (55074ms)
    1) should redeem 0.00005 InterBtc

  Faucet
2021-11-24 15:11:27        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    Funding
      2) should get funds from faucet
      ✓ should fail to get funds from faucet again

  ElectrsAPI regtest
2021-11-24 15:11:27        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
Broadcasting tx: 0.00022244 BTC to mxMzmZMDiMGHpFiuKmHqSvVFPxiFdjZAk4
txid: d90c4df741e6b806f49c86843d366b1efc677457e3c54d72162f1602258a1c32
    ✓ should getTxIdByRecipientAddress (2095ms)
Broadcasting tx: 0.00029 BTC to mjp4HrC318Jw7vunNjYL3EA2DVadw3CJn7
txid: 2985bb8dd806260e52b94327194978d8ea7c350c8956c521d5df8356b07d67db
Mining 1 Bitcoin block(s)
    ✓ should getTxByOpreturn (15134ms)
Broadcasting tx: 0.00029 BTC to mw7CKiwD1XJEubrFRNMDMM2JgK6cXYybUM
txid: 39201e389fe3edcf4a22c2159008a5a7389549d642a6fb71e4c539e61866ddaa
Mining 1 Bitcoin block(s)
Mining 1 Bitcoin block(s)
    ✓ should use getTxStatus to return correct confirmations (24234ms)

  BTCRelay
2021-11-24 15:12:09        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    ✓ should getLatestBTCBlockFromBTCRelay
    ✓ should getLatestBTCBlockHeightFromBTCRelay

  Constants
2021-11-24 15:12:09        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    getSystemBlockHashCount
      ✓ should sucessfully return
    getSystemDbWeight
      ✓ should sucessfully return
    getTimestampMinimumPeriod
      ✓ should sucessfully return
    getTransactionByteFee
      ✓ should sucessfully return
    getTransactionWeightToFee
      ✓ should sucessfully return

  fee
2021-11-24 15:12:09        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    ✓ should check getReplaceGriefingCollateralRate

  issue
2021-11-24 15:12:10        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    3) should request one issue
    ✓ should list existing requests
    ✓ request should fail if no account is set
    4) should batch request across several vaults
    ✓ execute should fail if no account is set
Transaction finalized at blockHash 0xba5feb4b8daa7fee05fa9c45a5c48162a49560105d0ca9fb77f11a87c6759954
	' {"applyExtrinsic":1}: system.ExtrinsicFailed:: [{"module":{"index":15,"error":12}},{"weight":1358948000,"class":"Normal","paysFee":"Yes"}]
    ✓ should fail to request a value finer than 1 Satoshi (15201ms)
Transaction finalized at blockHash 0x5266602f28f2541f6a7a72e392a1af1ed6008ce91900b30739c1688bc7f1c33e
	' {"applyExtrinsic":1}: tokens.Reserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",2332515]
	' {"applyExtrinsic":1}: vaultRegistry.IncreaseToBeIssuedTokens:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},121000]
	' {"applyExtrinsic":1}: vaultRegistry.RegisterAddress:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x8181e888c80a8d3f9e233db00f433ada2e1d69e2"}]
	' {"applyExtrinsic":1}: issue.RequestIssue:: ["0x9fbcc02cd13038ba2f328ad914e502d3f94bd4f183330cff47667e99ff4414a9","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",120395,605,2332515,{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x8181e888c80a8d3f9e233db00f433ada2e1d69e2"},"0x0316f147eac6480584a4117fcba259eb18428d086999fe7b13eb239943d1597417"]
	' {"applyExtrinsic":1}: utility.ItemCompleted:: []
	' {"applyExtrinsic":1}: utility.BatchCompleted:: []
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1358948000,"class":"Normal","paysFee":"Yes"}]
Broadcasting tx: 0.00121 BTC to bcrt1qsxq73zxgp2xnl83r8kcq7se6mghp660zqaxe0c
txid: c4a3bdda2174ba4cad460e64513ba906273c1896b9c41d582b61450785133295
Mining 3 Bitcoin block(s)
Auto-executing, waiting for vault to submit proof
    ✓ should request and auto-execute issue (55265ms)
Transaction finalized at blockHash 0xcecf8cbd74ff1b1aa9e8f2240d52b6d410a3e0829c9132a6941fe61fa959a69d
	' {"applyExtrinsic":1}: tokens.Reserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",192761694]
	' {"applyExtrinsic":1}: vaultRegistry.IncreaseToBeIssuedTokens:: [{"accountId":"5HKPmK9GYtE1PSLsS1qiYU9xQ9Si1NcEhdeCq9sw5bqu4ns8","currencies":{"collateral":"KSM","wrapped":"INTERBTC"}},100000]
	' {"applyExtrinsic":1}: vaultRegistry.RegisterAddress:: [{"accountId":"5HKPmK9GYtE1PSLsS1qiYU9xQ9Si1NcEhdeCq9sw5bqu4ns8","currencies":{"collateral":"KSM","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x243d20f451b9be6bc28832552875406ec308b576"}]
	' {"applyExtrinsic":1}: issue.RequestIssue:: ["0x12061411273bab41dd1744da323ced2772c54d0f52447bca57861b2fb250202d","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",99500,500,192761694,{"accountId":"5HKPmK9GYtE1PSLsS1qiYU9xQ9Si1NcEhdeCq9sw5bqu4ns8","currencies":{"collateral":"KSM","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x243d20f451b9be6bc28832552875406ec308b576"},"0x03732fbbe93f4d24d41c777745f8c308795ef1bc3e738facda222124493db989e2"]
	' {"applyExtrinsic":1}: utility.ItemCompleted:: []
	' {"applyExtrinsic":1}: utility.BatchCompleted:: []
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1358948000,"class":"Normal","paysFee":"Yes"}]
Broadcasting tx: 0.00099999 BTC to bcrt1qys7jpaz3hxlxhs5gxf2jsa2qdmps3dtkky70k2
txid: 525a3bfe60d26337da81ea893ea54861e1b6babce64ccd809b5415d94a43b1eb
Mining 3 Bitcoin block(s)
Manually executing, waiting for relay to catchup
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Blockhash 0x712c5205f0c10915d511b45d728d31b4cb59d92e2f086f7cd083eb93b4cb9528 not yet relayed...
Transaction finalized at blockHash 0x38e0b4a4f2dbf27c7cdb4162954b9cc493b562135cb6d620001c6622e7007b01
	' {"applyExtrinsic":1}: vaultRegistry.DecreaseToBeIssuedTokens:: [{"accountId":"5HKPmK9GYtE1PSLsS1qiYU9xQ9Si1NcEhdeCq9sw5bqu4ns8","currencies":{"collateral":"KSM","wrapped":"INTERBTC"}},1]
	' {"applyExtrinsic":1}: tokens.Unreserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",192759766]
	' {"applyExtrinsic":1}: tokens.Unreserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",1928]
	' {"applyExtrinsic":1}: issue.IssueAmountChange:: ["0x12061411273bab41dd1744da323ced2772c54d0f52447bca57861b2fb250202d",99499,500,1928]
	' {"applyExtrinsic":1}: rewards.DepositStake:: [{"accountId":"5HKPmK9GYtE1PSLsS1qiYU9xQ9Si1NcEhdeCq9sw5bqu4ns8","currencies":{"collateral":"KSM","wrapped":"INTERBTC"}},"0x000000000000152cf4e72a974f1c0000"]
	' {"applyExtrinsic":1}: vaultRegistry.IssueTokens:: [{"accountId":"5HKPmK9GYtE1PSLsS1qiYU9xQ9Si1NcEhdeCq9sw5bqu4ns8","currencies":{"collateral":"KSM","wrapped":"INTERBTC"}},99999]
	' {"applyExtrinsic":1}: rewards.DistributeReward:: ["INTERBTC","0x000000000000001b1ae4d6e2ef500000"]
	' {"applyExtrinsic":1}: issue.ExecuteIssue:: ["0x12061411273bab41dd1744da323ced2772c54d0f52447bca57861b2fb250202d","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",{"accountId":"5HKPmK9GYtE1PSLsS1qiYU9xQ9Si1NcEhdeCq9sw5bqu4ns8","currencies":{"collateral":"KSM","wrapped":"INTERBTC"}},99999,500]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1678467000,"class":"Normal","paysFee":"Yes"}]
    ✓ should request and manually execute issue (52828ms)
    ✓ should getFeesToPay
    ✓ should getFeeRate
    ✓ should getGriefingCollateral
    5) should getRequestLimits

  NominationAPI
2021-11-24 15:14:13        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
Transaction finalized at blockHash 0xbbb09d23ee59e846ce4c9cbbde1b6bff1e60636befdcf4600584a89e1541b681
	' {"applyExtrinsic":1}: nomination.NominationOptIn:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}}]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":233861000,"class":"Normal","paysFee":"Yes"}]
Transaction finalized at blockHash 0xdaaab630ac1aaa27f3e8e90ef7a2c12de78888fc0dbf7de4c8ed768bd09874f4
	' {"applyExtrinsic":1}: staking.WithdrawStake:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","0x0000000c9f2c9cd04674edea40000000"]
	' {"applyExtrinsic":1}: staking.IncreaseNonce:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},1]
	' {"applyExtrinsic":1}: staking.DepositStake:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","0x0000000c9f2c9cd04674edea40000000"]
	' {"applyExtrinsic":1}: staking.ForceRefund:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}}]
	' {"applyExtrinsic":1}: nomination.NominationOptOut:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}}]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1769491000,"class":"Normal","paysFee":"Yes"}]
    ✓ Should opt a vault in and out of nomination (35604ms)
Transaction finalized at blockHash 0x722d813874e5ab7a4a6c6572e5ae9f70ab4042bfd25a46d5a04ceda7407b431a
	' {"applyExtrinsic":1}: nomination.NominationOptIn:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}}]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":233861000,"class":"Normal","paysFee":"Yes"}]
Transaction finalized at blockHash 0xa3c3ab4aa9b6205ce0017c9298f04ea57d679f637cde86756a3e26b08d283234
	' {"applyExtrinsic":1}: sudo.Sudid:: [{"ok":null}]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":100858000,"class":"Operational","paysFee":"Yes"}]
Transaction finalized at blockHash 0x2fa9760df9c37a967532b8249e9ed46ef5bf7b938726a9478cb79035c44e18c6
	' {"applyExtrinsic":1}: rewards.WithdrawReward:: ["INTERBTC",{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"0x0000000000000031df9095a18f600000"]
	' {"applyExtrinsic":1}: staking.DistributeReward:: ["INTERBTC",{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"0x0000000000000031df9095a18f600000"]
	' {"applyExtrinsic":1}: rewards.WithdrawReward:: ["INTR",{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},0]
	' {"applyExtrinsic":1}: staking.DepositStake:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy","0x00000000204fce5e3e25026110000000"]
	' {"applyExtrinsic":1}: tokens.Reserved:: ["DOT","5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT",10000000000]
	' {"applyExtrinsic":1}: nomination.DepositCollateral:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",10000000000]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1839795000,"class":"Normal","paysFee":"Yes"}]
Transaction finalized at blockHash 0x94613d1a6f998475b0c13c40a73e62e34228501fa43a50f3b9bddcc8714509b5
	' {"applyExtrinsic":1}: tokens.Reserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",19376]
	' {"applyExtrinsic":1}: vaultRegistry.IncreaseToBeIssuedTokens:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},1000]
	' {"applyExtrinsic":1}: vaultRegistry.RegisterAddress:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x3ce9dfa81127b3052823fa8292dcdd60aa2ceb1f"}]
	' {"applyExtrinsic":1}: issue.RequestIssue:: ["0x4d16a1e0d6a8037bbab2384a89b02f96c35920802b0ff95ac425a767a76d1d4d","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",0,1000,19376,{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x3ce9dfa81127b3052823fa8292dcdd60aa2ceb1f"},"0x0316f147eac6480584a4117fcba259eb18428d086999fe7b13eb239943d1597417"]
	' {"applyExtrinsic":1}: utility.ItemCompleted:: []
	' {"applyExtrinsic":1}: utility.BatchCompleted:: []
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1358948000,"class":"Normal","paysFee":"Yes"}]
Broadcasting tx: 0.00001 BTC to bcrt1q8n5al2q3y7es22prl2pf9hxavz4ze6cl9y72k2
txid: 81e4bd5964ac46cfa968cdcbe4e0bcfa96bb6895a1c8196d59d784185816b712
Mining 3 Bitcoin block(s)
Auto-executing, waiting for vault to submit proof
Transaction finalized at blockHash 0xda2bec8bae81ffb21e16e2881d196579e8aab5efb9061055c972977216c4ead6
	' {"applyExtrinsic":1}: rewards.WithdrawReward:: ["INTERBTC",{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"0x000000000000001e8531cd1920ec0000"]
	' {"applyExtrinsic":1}: staking.DistributeReward:: ["INTERBTC",{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"0x000000000000001e8531cd1920ec0000"]
	' {"applyExtrinsic":1}: rewards.WithdrawReward:: ["INTR",{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},0]
	' {"applyExtrinsic":1}: staking.WithdrawStake:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy","0x00000000204fce5e3e25026110000000"]
	' {"applyExtrinsic":1}: tokens.Unreserved:: ["DOT","5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT",10000000000]
	' {"applyExtrinsic":1}: nomination.WithdrawCollateral:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",10000000000]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1784690000,"class":"Normal","paysFee":"Yes"}]
Transaction finalized at blockHash 0x7aab05eeb9dd47046c766efbbe36e0f1cde98d573c2e0ea335770c05bb8ec0e9
	' {"applyExtrinsic":1}: sudo.Sudid:: [{"ok":null}]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":100858000,"class":"Operational","paysFee":"Yes"}]
Transaction finalized at blockHash 0x1b329e6952fa98f5b8cd8d88465178cba28dd43ed3b30b7f45a3a60f0fa2adee
	' {"applyExtrinsic":1}: staking.WithdrawStake:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","0x0000000c9f2c9cd04674edea40000000"]
	' {"applyExtrinsic":1}: staking.IncreaseNonce:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},2]
	' {"applyExtrinsic":1}: staking.DepositStake:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","0x0000000c9f2c9cd04674edea40000000"]
	' {"applyExtrinsic":1}: staking.ForceRefund:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}}]
	' {"applyExtrinsic":1}: nomination.NominationOptOut:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}}]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1769491000,"class":"Normal","paysFee":"Yes"}]
    6) Should nominate to and withdraw from a vault

  OracleAPI
2021-11-24 15:17:31        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    ✓ exchange rate should be set
Transaction finalized at blockHash 0xf63b1339c399bc849279022c0ef846d96b569b1b6a3655f84c5c0b8ba4d8a081
	' {"applyExtrinsic":1}: oracle.FeedValues:: ["5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",[[{"exchangeRate":"DOT"},"0x00000000000052e070c8ad259b3b0b44"]]]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":303898000,"class":"Normal","paysFee":"Yes"}]
    ✓ should set exchange rate (24105ms)
    ✓ should convert satoshi to planck
    ✓ should get names by id
    ✓ should getOnlineTimeout
    ✓ should getValidUntil
    ✓ should be online

  redeem
2021-11-24 15:17:55        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    ✓ should fail if no account is set
Transaction finalized at blockHash 0xfa67a0cfb486d42b30178cce62fded4fb26447699a9f317173f14cf85d4fdc3b
	' {"applyExtrinsic":1}: tokens.Reserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",97944]
	' {"applyExtrinsic":1}: vaultRegistry.IncreaseToBeIssuedTokens:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},5000]
	' {"applyExtrinsic":1}: vaultRegistry.RegisterAddress:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x29d3dd6d958c3374c7d30145963e6835e5b6d46b"}]
	' {"applyExtrinsic":1}: issue.RequestIssue:: ["0x15b8226717d9edb86a71bfd8e7ab1633378412c04eefcc550cf60447174700f0","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",4975,25,97944,{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x29d3dd6d958c3374c7d30145963e6835e5b6d46b"},"0x0316f147eac6480584a4117fcba259eb18428d086999fe7b13eb239943d1597417"]
	' {"applyExtrinsic":1}: utility.ItemCompleted:: []
	' {"applyExtrinsic":1}: utility.BatchCompleted:: []
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1358948000,"class":"Normal","paysFee":"Yes"}]
Broadcasting tx: 0.00004999 BTC to bcrt1q98fa6mv43sehf37nq9zev0ngxhjmd4rtg0yvrp
txid: 00a886bb485fb5d584eaa6f3fab1ff30ba954a3152514e661aa5d13341d48a4e
Mining 3 Bitcoin block(s)
Manually executing, waiting for relay to catchup
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Blockhash 0x5ef0a746ba50dedc7face7cd8618b81fb2bc7572e5a090512abbcdd6de0b5e2a not yet relayed...
Transaction finalized at blockHash 0x6d179fd076c801a4d49cbe7f729f91121a7f8a08c2a2563d6cd1d1dec1ea52f8
	' {"applyExtrinsic":1}: vaultRegistry.DecreaseToBeIssuedTokens:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},1]
	' {"applyExtrinsic":1}: tokens.Unreserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",97924]
	' {"applyExtrinsic":1}: tokens.Unreserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",20]
	' {"applyExtrinsic":1}: issue.IssueAmountChange:: ["0x15b8226717d9edb86a71bfd8e7ab1633378412c04eefcc550cf60447174700f0",4974,25,20]
	' {"applyExtrinsic":1}: rewards.DepositStake:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"0x000000000000010eff0fae29b1bc0000"]
	' {"applyExtrinsic":1}: vaultRegistry.IssueTokens:: [{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},4999]
	' {"applyExtrinsic":1}: rewards.DistributeReward:: ["INTERBTC","0x00000000000000015af1d78b58c40000"]
	' {"applyExtrinsic":1}: issue.ExecuteIssue:: ["0x15b8226717d9edb86a71bfd8e7ab1633378412c04eefcc550cf60447174700f0","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",{"accountId":"5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},4999,25]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1678467000,"class":"Normal","paysFee":"Yes"}]
    7) should issue and request redeem
    8) should load existing redeem requests
    ✓ should getFeesToPay
    ✓ should getFeeRate
    ✓ should getPremiumRedeemFee
    ✓ should getCurrentInclusionFee
    ✓ should getDustValue

  refund
2021-11-24 15:18:50        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
Transaction finalized at blockHash 0xba63a21aeeff0ac5ff21e60f7cbf7c4237741009b35643a507282873dfbfa2be
	' {"applyExtrinsic":1}: tokens.Reserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",97944]
	' {"applyExtrinsic":1}: vaultRegistry.IncreaseToBeIssuedTokens:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},5000]
	' {"applyExtrinsic":1}: vaultRegistry.RegisterAddress:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x8989721fc01546096f8805e72ac6c3318084fabb"}]
	' {"applyExtrinsic":1}: issue.RequestIssue:: ["0xd4333f07b51d3cadac8b253d938275d3ea6c550b4791850adc504c6ef40ce1bc","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",4975,25,97944,{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x8989721fc01546096f8805e72ac6c3318084fabb"},"0x03729268f02c22720bcdcdb7e4135305ce0a2e000f6dd82861a2eab489ffbe6817"]
	' {"applyExtrinsic":1}: utility.ItemCompleted:: []
	' {"applyExtrinsic":1}: utility.BatchCompleted:: []
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1358948000,"class":"Normal","paysFee":"Yes"}]
Broadcasting tx: 0.00004999 BTC to bcrt1q3xyhy87qz4rqjmugqhnj43krxxqgf74mwg4w4l
txid: 6458f8d65f17b03c9eb4c7b50b20a03d886d2ad2c5903ec3cf28a0cb2020948a
Mining 3 Bitcoin block(s)
Manually executing, waiting for relay to catchup
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Blockhash 0x3209efd9a1f19d0c623300b9e301fb77318fea3078a0be648fb94004c3357033 not yet relayed...
Transaction finalized at blockHash 0x1a18c65831e1f2e8ecf66a51172ce3dda8cd985770af0f1b0b3f7df9b07372e6
	' {"applyExtrinsic":1}: vaultRegistry.DecreaseToBeIssuedTokens:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},1]
	' {"applyExtrinsic":1}: tokens.Unreserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",97924]
	' {"applyExtrinsic":1}: tokens.Unreserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",20]
	' {"applyExtrinsic":1}: issue.IssueAmountChange:: ["0xd4333f07b51d3cadac8b253d938275d3ea6c550b4791850adc504c6ef40ce1bc",4974,25,20]
	' {"applyExtrinsic":1}: rewards.DepositStake:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},"0x000000000000010eff0fae29b1bc0000"]
	' {"applyExtrinsic":1}: vaultRegistry.IssueTokens:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},4999]
	' {"applyExtrinsic":1}: rewards.DistributeReward:: ["INTERBTC","0x00000000000000015af1d78b58c40000"]
	' {"applyExtrinsic":1}: issue.ExecuteIssue:: ["0xd4333f07b51d3cadac8b253d938275d3ea6c550b4791850adc504c6ef40ce1bc","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},4999,25]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1678467000,"class":"Normal","paysFee":"Yes"}]
    ✓ should not generate a refund request (52888ms)
Transaction finalized at blockHash 0x096220cdf281975bb7c7f236fcd634059f720dfdec56ffc17a0efdf225973dca
	' {"applyExtrinsic":1}: tokens.Reserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",97944]
	' {"applyExtrinsic":1}: vaultRegistry.IncreaseToBeIssuedTokens:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},5000]
	' {"applyExtrinsic":1}: vaultRegistry.RegisterAddress:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x3f1f5a217bc0cdc86995ff20ea7f42a5d607d67d"}]
	' {"applyExtrinsic":1}: issue.RequestIssue:: ["0xd5c1878faf25add08dd604150a5b0b9bbc7f65ab44c46fd06eda0050166762cc","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",4975,25,97944,{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x3f1f5a217bc0cdc86995ff20ea7f42a5d607d67d"},"0x03729268f02c22720bcdcdb7e4135305ce0a2e000f6dd82861a2eab489ffbe6817"]
	' {"applyExtrinsic":1}: utility.ItemCompleted:: []
	' {"applyExtrinsic":1}: utility.BatchCompleted:: []
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1358948000,"class":"Normal","paysFee":"Yes"}]
Broadcasting tx: 1.00005 BTC to bcrt1q8u045gtmcrxus6v4lusw5l6z5htq04na953jvx
txid: 3cd16bc0b0af8afa990249681e846df362b8445f0e57891b3f239f5d82390e20
Mining 3 Bitcoin block(s)
Auto-executing, waiting for vault to submit proof
    ✓ should generate a refund request (55163ms)
    ✓ should list a single refund request

  replace
2021-11-24 15:20:38        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    ✓ should getDustValue
    ✓ should getGriefingCollateral
    ✓ should getReplacePeriod
    9) should list replace request by a vault
    request
Transaction finalized at blockHash 0x33aedd0fa1a2053a55df8d22531f0587a0c4e81c3325d33aa15116ef651dad2e
	' {"applyExtrinsic":2}: tokens.Reserved:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",97944]
	' {"applyExtrinsic":2}: vaultRegistry.IncreaseToBeIssuedTokens:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},5000]
	' {"applyExtrinsic":2}: vaultRegistry.RegisterAddress:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0xcd8fc3107cca56af950cb6a2299803cd8334f5f2"}]
	' {"applyExtrinsic":2}: issue.RequestIssue:: ["0x005c6d166ba9b36bd24e0cd7a926b2cd5fc006d9addfb3a040baefcec771df27","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy",4975,25,97944,{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0xcd8fc3107cca56af950cb6a2299803cd8334f5f2"},"0x03729268f02c22720bcdcdb7e4135305ce0a2e000f6dd82861a2eab489ffbe6817"]
	' {"applyExtrinsic":2}: utility.ItemCompleted:: []
	' {"applyExtrinsic":2}: utility.BatchCompleted:: []
	' {"applyExtrinsic":2}: system.ExtrinsicSuccess:: [{"weight":1358948000,"class":"Normal","paysFee":"Yes"}]
Broadcasting tx: 0.00005 BTC to bcrt1qek8uxyrueft2l9gvk63znxqrekpnfa0jfpn5qk
txid: 64b1e68d61a6de2d82627fa46ab559a5a237cece32b73d6bcfb8d019b3f9e707
Mining 3 Bitcoin block(s)
Auto-executing, waiting for vault to submit proof
Transaction finalized at blockHash 0x70d7d9d49b3dbec09626ca2b51c3284415705e599bd5fcabbee6b8569af281a9
	' {"applyExtrinsic":1}: vaultRegistry.IncreaseToBeReplacedTokens:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},4000]
	' {"applyExtrinsic":1}: tokens.Reserved:: ["DOT","5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n",156549700]
	' {"applyExtrinsic":1}: replace.RequestReplace:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},4000,156549700]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":466841000,"class":"Normal","paysFee":"Yes"}]
      10) should request vault replacement
      11) should list/map a single replace request

  systemAPI
2021-11-24 15:22:08        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    ✓ should getCurrentBlockNumber
    ✓ should getStatusCode
    - should setCode

  TokensAPI
2021-11-24 15:22:08        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
Transaction finalized at blockHash 0x63401ada645c9b98481b99b4a02cfb3377c1527eaa98e89f53294be3dfc3897d
	' {"applyExtrinsic":1}: tokens.Transfer:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy","5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw",0]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":594000000,"class":"Normal","paysFee":"Yes"}]
Transaction finalized at blockHash 0x4d9cc0f6944807958ddca026e5e2efa25149202556e5fb4a1fa3131b3a680b8a
	' {"applyExtrinsic":1}: tokens.Transfer:: ["DOT","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy","5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw",0]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":594000000,"class":"Normal","paysFee":"Yes"}]
Transaction finalized at blockHash 0x572cced17fcbf2ddfe8eff3b965dfa99db372d6231fbe90a9647de28cbffba2e
	' {"applyExtrinsic":1}: tokens.Transfer:: ["KSM","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy","5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw",0]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":594000000,"class":"Normal","paysFee":"Yes"}]
Transaction finalized at blockHash 0x06c4cc08231625aeae3ac98b999595f0f890805996e804a913a9bd87907c594b
	' {"applyExtrinsic":1}: tokens.Transfer:: ["KSM","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy","5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw",0]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":594000000,"class":"Normal","paysFee":"Yes"}]
Transaction finalized at blockHash 0xfd0d03f56aed4061c1de51dd11ed3fe44502c8251c54ceab9fa2424c29e3a0c8
	' {"applyExtrinsic":1}: tokens.Transfer:: ["INTERBTC","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy","5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw",0]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":594000000,"class":"Normal","paysFee":"Yes"}]
Transaction finalized at blockHash 0xee2e9c869606892b2465c23cc71f2a80155e52c15e5879f1add4bda9a0577e24
	' {"applyExtrinsic":1}: tokens.Transfer:: ["INTERBTC","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy","5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw",0]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":594000000,"class":"Normal","paysFee":"Yes"}]
Transaction finalized at blockHash 0x7300bc3e9d73db52236e60ac44868b9ffcef75fddd34b83ace0cdbd5de5b1827
	' {"applyExtrinsic":1}: tokens.Transfer:: ["KBTC","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy","5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw",0]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":594000000,"class":"Normal","paysFee":"Yes"}]
Transaction finalized at blockHash 0xa358c93bc5efd359131947c0d55aea2be2cc661454a1d9b70e51c0489a1a9201
	' {"applyExtrinsic":1}: tokens.Transfer:: ["KBTC","5DAAnrj7VHTznn2AWBemMuyBwZWs6FNFjdyVXUeYum3PTXFy","5HGjWAeFDfFCWPsjFQdVV2Msvz2XtMktvgocEZcCj68kUMaw",0]
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":594000000,"class":"Normal","paysFee":"Yes"}]
    ✓ should subscribe to balance updates (142483ms)

  vaultsAPI
2021-11-24 15:24:31        API/INIT: RPC methods not decorated: btcRelay_verifyBlockHeaderInclusion, issue_getIssueRequests, issue_getVaultIssueRequests, oracle_collateralToWrapped, oracle_wrappedToCollateral, redeem_getRedeemRequests, redeem_getVaultRedeemRequests, refund_getRefundRequests, refund_getRefundRequestsByIssueId, refund_getVaultRefundRequests, relay_isTransactionInvalid, replace_getNewVaultReplaceRequests, replace_getOldVaultReplaceRequests, vaultRegistry_getCollateralizationFromVault, vaultRegistry_getCollateralizationFromVaultAndCollateral, vaultRegistry_getIssueableTokensFromVault, vaultRegistry_getPremiumRedeemVaults, vaultRegistry_getRequiredCollateralForVault, vaultRegistry_getRequiredCollateralForWrapped, vaultRegistry_getVaultCollateral, vaultRegistry_getVaultTotalCollateral, vaultRegistry_getVaultsByAccountId, vaultRegistry_getVaultsWithIssuableTokens, vaultRegistry_getVaultsWithRedeemableTokens
    ✓ should get issuable
    12) should deposit and withdraw collateral
    ✓ should getLiquidationVaultId
Transaction finalized at blockHash 0xc682a544827ee1135c0890e127d46ca33a02657a6ace1b5c0d622d5a9e881bd7
	' {"applyExtrinsic":1}: tokens.Reserved:: ["DOT","5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",23187732]
	' {"applyExtrinsic":1}: vaultRegistry.IncreaseToBeIssuedTokens:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},1184934]
	' {"applyExtrinsic":1}: vaultRegistry.RegisterAddress:: [{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x922710b33cffef31311e34a597e4822f8d65d6a6"}]
	' {"applyExtrinsic":1}: issue.RequestIssue:: ["0x5a966f9f3e32c737cfa1472d0aa1dd315a0ef4a20e3663eb9851528420071425","5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty",1179009,5925,23187732,{"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}},{"p2WpkHv0":"0x922710b33cffef31311e34a597e4822f8d65d6a6"},"0x03729268f02c22720bcdcdb7e4135305ce0a2e000f6dd82861a2eab489ffbe6817"]
	' {"applyExtrinsic":1}: utility.ItemCompleted:: []
	' {"applyExtrinsic":1}: utility.BatchCompleted:: []
	' {"applyExtrinsic":1}: system.ExtrinsicSuccess:: [{"weight":1358948000,"class":"Normal","paysFee":"Yes"}]
Broadcasting tx: 0.01184934 BTC to bcrt1qjgn3pveullhnzvg7xjje0eyz97xkt44xtd6wwe
txid: 1c3a5d24ebe2442f350fe9a66976b161ba42f8165a2085ed456f05838117d40e
Mining 3 Bitcoin block(s)
Auto-executing, waiting for vault to submit proof
    13) should getPremiumRedeemVaults after a price crash
    ✓ should getLiquidationCollateralThreshold
    ✓ should getPremiumRedeemThreshold
    14) should select random vault for issue
    ✓ should fail if no vault for issuing is found
    ✓ should select random vault for redeem (69ms)
    ✓ should fail if no vault for redeeming is found
    ✓ should fail to get vault collateralization for vault with zero collateral
    ✓ should get the issuable InterBtc for a vault (87ms)
    ✓ should get the issuable InterBtc
    ✓ should getFees (82ms)
    ✓ should getAPY (194ms)
    ✓ should getPunishmentFee
    ✓ should get vault list (80ms)


  63 passing (17m)
  1 pending
  14 failing

  1) Initialize parachain state
       should redeem 0.00005 InterBtc:
     TypeError: Cannot read property 'getVaultsWithRedeemableTokens' of undefined
      at DefaultVaultsAPI.<anonymous> (src/parachain/vaults.ts:576:57)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/vaults.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/vaults.ts:4:12)
      at DefaultVaultsAPI.getVaultsWithRedeemableTokens (src/parachain/vaults.ts:288:16)
      at DefaultRedeemAPI.<anonymous> (src/parachain/redeem.ts:221:75)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/redeem.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/redeem.ts:4:12)
      at DefaultRedeemAPI.request (src/parachain/redeem.ts:37:16)
      at /home/dan/interlay/dev/interbtc-api/test/integration/_initialization/staging/initialize.test.ts:227:25
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/test/integration/_initialization/staging/initialize.test.ts:27:71
      at new Promise (<anonymous>)
      at __awaiter (test/integration/_initialization/staging/initialize.test.ts:23:12)
      at Context.<anonymous> (test/integration/_initialization/staging/initialize.test.ts:224:53)
      at processImmediate (internal/timers.js:461:21)

  2) Faucet
       Funding
         should get funds from faucet:
     Error: CodecError: Could not decode `FundAccountJsonRpcRequest::currency_id`:
	Could not decode `CurrencyId`, failed to read variant byte:
		Not enough data to fill buffer

      at FaucetClient.<anonymous> (src/clients/client.ts:60:19)
      at Generator.next (<anonymous>)
      at fulfilled (src/clients/client.ts:5:58)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)

  3) issue
       should request one issue:
     TypeError: Cannot read property 'getVaultsWithIssuableTokens' of undefined
      at DefaultVaultsAPI.<anonymous> (src/parachain/vaults.ts:566:57)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/vaults.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/vaults.ts:4:12)
      at DefaultVaultsAPI.getVaultsWithIssuableTokens (src/parachain/vaults.ts:279:16)
      at DefaultIssueAPI.<anonymous> (src/parachain/issue.ts:227:75)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/issue.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/issue.ts:4:12)
      at DefaultIssueAPI.request (src/parachain/issue.ts:56:16)
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/issue.test.ts:68:47
      at Generator.next (<anonymous>)
      at fulfilled (test/integration/parachain/staging/issue.test.ts:24:58)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)

  4) issue
       should batch request across several vaults:
     TypeError: Cannot read property 'getVaultsWithIssuableTokens' of undefined
      at DefaultVaultsAPI.<anonymous> (src/parachain/vaults.ts:566:57)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/vaults.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/vaults.ts:4:12)
      at DefaultVaultsAPI.getVaultsWithIssuableTokens (src/parachain/vaults.ts:279:16)
      at DefaultIssueAPI.<anonymous> (src/parachain/issue.ts:174:52)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/issue.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/issue.ts:4:12)
      at DefaultIssueAPI.getRequestLimits (src/parachain/issue.ts:30:16)
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/issue.test.ts:95:46
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/issue.test.ts:27:71
      at new Promise (<anonymous>)
      at __awaiter (test/integration/parachain/staging/issue.test.ts:23:12)
      at Context.<anonymous> (test/integration/parachain/staging/issue.test.ts:94:65)
      at processImmediate (internal/timers.js:461:21)

  5) issue
       should getRequestLimits:
     TypeError: Cannot read property 'getVaultsWithIssuableTokens' of undefined
      at DefaultVaultsAPI.<anonymous> (src/parachain/vaults.ts:566:57)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/vaults.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/vaults.ts:4:12)
      at DefaultVaultsAPI.getVaultsWithIssuableTokens (src/parachain/vaults.ts:279:16)
      at DefaultIssueAPI.<anonymous> (src/parachain/issue.ts:174:52)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/issue.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/issue.ts:4:12)
      at DefaultIssueAPI.getRequestLimits (src/parachain/issue.ts:30:16)
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/issue.test.ts:195:46
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/issue.test.ts:27:71
      at new Promise (<anonymous>)
      at __awaiter (test/integration/parachain/staging/issue.test.ts:23:12)
      at Context.<anonymous> (test/integration/parachain/staging/issue.test.ts:194:46)
      at processImmediate (internal/timers.js:461:21)

  6) NominationAPI
       Should nominate to and withdraw from a vault:

      Reward amount has been affected by the withdrawal
      + expected - actual

      -6
      +0
      
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/nomination.test.ts:141:20
      at Generator.next (<anonymous>)
      at fulfilled (test/integration/parachain/staging/nomination.test.ts:24:58)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)

  7) redeem
       should issue and request redeem:
     Error: createType(Call):: Call: failed decoding redeem.requestRedeem:: Struct: failed on args: {"amount_wrapped":"Compact<u128>","btc_address":"{\"_enum\":{\"P2PKH\":\"H160\",\"P2SH\":\"H160\",\"P2WPKHv0\":\"H160\",\"P2WSHv0\":\"H256\"}}","vault_id":"{\"accountId\":\"AccountId32\",\"currencies\":\"InterbtcPrimitivesVaultCurrencyPair\"}"}:: Struct: failed on vault_id: {"accountId":"AccountId32","currencies":"InterbtcPrimitivesVaultCurrencyPair"}:: Struct: Cannot decode value "5Ck5SLSHYac6WFt5UZRSsdJjwmpSZq85fd5TRNAdZQVzEAPT-INTERBTC-DOT" (typeof string), expected an input object, map or array
      at createTypeUnsafe (node_modules/@polkadot/types/create/createType.cjs:75:18)
      at TypeRegistry.createTypeUnsafe (node_modules/@polkadot/types/create/registry.cjs:419:45)
      at TypeRegistry.createType (node_modules/@polkadot/types/create/registry.cjs:411:17)
      at extrinsicFn (node_modules/@polkadot/types/metadata/decorate/extrinsics/createUnchecked.cjs:28:21)
      at Object.decorated [as requestRedeem] (node_modules/@polkadot/api/base/Decorate.cjs:460:22)
      at DefaultRedeemAPI.<anonymous> (src/parachain/redeem.ts:249:42)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/redeem.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/redeem.ts:4:12)
      at DefaultRedeemAPI.requestAdvanced (src/parachain/redeem.ts:64:16)
      at DefaultRedeemAPI.<anonymous> (src/parachain/redeem.ts:219:35)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/redeem.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/redeem.ts:4:12)
      at DefaultRedeemAPI.request (src/parachain/redeem.ts:37:16)
      at /home/dan/interlay/dev/interbtc-api/src/utils/issueRedeem.ts:219:45
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/utils/issueRedeem.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/utils/issueRedeem.ts:4:12)
      at redeem (src/utils/issueRedeem.ts:157:12)
      at /home/dan/interlay/dev/interbtc-api/src/utils/issueRedeem.ts:281:33
      at Generator.next (<anonymous>)
      at fulfilled (src/utils/issueRedeem.ts:5:58)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)

  8) redeem
       should load existing redeem requests:

      Error in initialization setup. Should have at least 1 issue request
      + expected - actual

      -0
      +1
      
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/redeem.test.ts:122:16
      at Generator.next (<anonymous>)
      at fulfilled (test/integration/parachain/staging/redeem.test.ts:24:58)

  9) replace
       should list replace request by a vault:
     Error: Error during replace request retrieval: TypeError: Cannot read property 'getOldVaultReplaceRequests' of undefined
      at DefaultReplaceAPI.<anonymous> (src/parachain/replace.ts:299:35)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/replace.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/replace.ts:4:12)
      at DefaultReplaceAPI.mapReplaceRequests (src/parachain/replace.ts:145:16)
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/replace.test.ts:133:50
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/replace.test.ts:27:71
      at new Promise (<anonymous>)
      at __awaiter (test/integration/parachain/staging/replace.test.ts:23:12)
      at Context.<anonymous> (test/integration/parachain/staging/replace.test.ts:131:61)
      at processImmediate (internal/timers.js:461:21)

  10) replace
       request
         should request vault replacement:
     Error: createType(Hash):: Unable to convert {"accountId":"5FCfAonRZgTFrTd9HREEyeJjDpT397KMzizE6T3DvebLFE7n","currencies":{"collateral":"DOT","wrapped":"INTERBTC"}} (typeof object) to a Uint8Array
      at createTypeUnsafe (node_modules/@polkadot/types/create/createType.cjs:75:18)
      at TypeRegistry.createTypeUnsafe (node_modules/@polkadot/types/create/registry.cjs:419:45)
      at TypeRegistry.createType (node_modules/@polkadot/types/create/registry.cjs:411:17)
      at ApiPromise.createType (node_modules/@polkadot/api/base/Decorate.cjs:174:82)
      at DefaultReplaceAPI.getRequestIdFromEvents (src/parachain/replace.ts:141:39)
      at DefaultReplaceAPI.<anonymous> (src/parachain/replace.ts:176:25)
      at Generator.next (<anonymous>)
      at fulfilled (src/parachain/replace.ts:5:58)

  11) replace
       request
         should list/map a single replace request:

      AssertionError: expected 1 to equal 2
      + expected - actual

      -1
      +2
      
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/replace.test.ts:102:20
      at Generator.next (<anonymous>)
      at fulfilled (test/integration/parachain/staging/replace.test.ts:24:58)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)

  12) vaultsAPI
       should deposit and withdraw collateral:
     Error: Error during collateralization computation: Cannot read property 'getCollateralizationFromVault' of undefined
      at DefaultVaultsAPI.<anonymous> (src/parachain/vaults.ts:429:35)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/vaults.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/vaults.ts:4:12)
      at DefaultVaultsAPI.getVaultCollateralization (src/parachain/vaults.ts:146:16)
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/vaults.test.ts:89:64
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/vaults.test.ts:27:71
      at new Promise (<anonymous>)
      at __awaiter (test/integration/parachain/staging/vaults.test.ts:23:12)
      at Context.<anonymous> (test/integration/parachain/staging/vaults.test.ts:86:61)
      at processImmediate (internal/timers.js:461:21)

  13) vaultsAPI
       should getPremiumRedeemVaults after a price crash:
     Error: Error during collateralization computation: Cannot read property 'getCollateralizationFromVault' of undefined
      at DefaultVaultsAPI.<anonymous> (src/parachain/vaults.ts:429:35)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/vaults.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/vaults.ts:4:12)
      at DefaultVaultsAPI.getVaultCollateralization (src/parachain/vaults.ts:146:16)
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/vaults.test.ts:127:63
      at Generator.next (<anonymous>)
      at fulfilled (test/integration/parachain/staging/vaults.test.ts:24:58)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)

  14) vaultsAPI
       should select random vault for issue:
     TypeError: Cannot read property 'getVaultsWithIssuableTokens' of undefined
      at DefaultVaultsAPI.<anonymous> (src/parachain/vaults.ts:566:57)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/vaults.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/vaults.ts:4:12)
      at DefaultVaultsAPI.getVaultsWithIssuableTokens (src/parachain/vaults.ts:279:16)
      at DefaultVaultsAPI.<anonymous> (src/parachain/vaults.ts:531:35)
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/src/parachain/vaults.ts:8:71
      at new Promise (<anonymous>)
      at __awaiter (src/parachain/vaults.ts:4:12)
      at DefaultVaultsAPI.selectRandomVaultIssue (src/parachain/vaults.ts:242:16)
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/vaults.test.ts:173:45
      at Generator.next (<anonymous>)
      at /home/dan/interlay/dev/interbtc-api/test/integration/parachain/staging/vaults.test.ts:27:71
      at new Promise (<anonymous>)
      at __awaiter (test/integration/parachain/staging/vaults.test.ts:23:12)
      at Context.<anonymous> (test/integration/parachain/staging/vaults.test.ts:172:59)
      at processImmediate (internal/timers.js:461:21)

