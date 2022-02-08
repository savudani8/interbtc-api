[@interlay/interbtc-api](/README.md) / Exports

# @interlay/interbtc-api

## Table of contents

### Namespaces

- [bitcoin](/modules/bitcoin.md)

### Enumerations

- [CurrencyIdLiteral](/enums/CurrencyIdLiteral.md)
- [ExecuteRedeem](/enums/ExecuteRedeem.md)
- [IssueStatus](/enums/IssueStatus.md)
- [NominationStatus](/enums/NominationStatus.md)
- [RedeemStatus](/enums/RedeemStatus.md)
- [VaultStatusExt](/enums/VaultStatusExt.md)

### Clients Classes

- [FaucetClient](/classes/FaucetClient.md)

### BTC Bridge Classes

- [DefaultInterBtcApi](/classes/DefaultInterBtcApi.md)

### Other Classes

- [BitcoinCoreClient](/classes/BitcoinCoreClient.md)
- [ChainBalance](/classes/ChainBalance.md)
- [DefaultBTCRelayAPI](/classes/DefaultBTCRelayAPI.md)
- [DefaultConstantsAPI](/classes/DefaultConstantsAPI.md)
- [DefaultElectrsAPI](/classes/DefaultElectrsAPI.md)
- [DefaultEscrowAPI](/classes/DefaultEscrowAPI.md)
- [DefaultFeeAPI](/classes/DefaultFeeAPI.md)
- [DefaultIssueAPI](/classes/DefaultIssueAPI.md)
- [DefaultNominationAPI](/classes/DefaultNominationAPI.md)
- [DefaultOracleAPI](/classes/DefaultOracleAPI.md)
- [DefaultRedeemAPI](/classes/DefaultRedeemAPI.md)
- [DefaultRefundAPI](/classes/DefaultRefundAPI.md)
- [DefaultReplaceAPI](/classes/DefaultReplaceAPI.md)
- [DefaultRewardsAPI](/classes/DefaultRewardsAPI.md)
- [DefaultSystemAPI](/classes/DefaultSystemAPI.md)
- [DefaultTokensAPI](/classes/DefaultTokensAPI.md)
- [DefaultTransactionAPI](/classes/DefaultTransactionAPI.md)
- [DefaultVaultsAPI](/classes/DefaultVaultsAPI.md)
- [VaultExt](/classes/VaultExt.md)

### Bitcoin Core Interfaces

- [ElectrsAPI](/interfaces/ElectrsAPI.md)

### BTC Bridge Interfaces

- [BTCRelayAPI](/interfaces/BTCRelayAPI.md)
- [EscrowAPI](/interfaces/EscrowAPI.md)
- [FeeAPI](/interfaces/FeeAPI.md)
- [IssueAPI](/interfaces/IssueAPI.md)
- [NominationAPI](/interfaces/NominationAPI.md)
- [OracleAPI](/interfaces/OracleAPI.md)
- [RedeemAPI](/interfaces/RedeemAPI.md)
- [RefundAPI](/interfaces/RefundAPI.md)
- [ReplaceAPI](/interfaces/ReplaceAPI.md)
- [SystemAPI](/interfaces/SystemAPI.md)
- [TokensAPI](/interfaces/TokensAPI.md)
- [VaultsAPI](/interfaces/VaultsAPI.md)

### BTC Bridge
The type Big represents Wrapped or Collateral token denominations,
while the type BN represents Planck or Satoshi denominations. Interfaces

- [ConstantsAPI](/interfaces/ConstantsAPI.md)

### Other Interfaces

- [BalanceWrapper](/interfaces/BalanceWrapper.md)
- [CurrencyId](/interfaces/CurrencyId.md)
- [DecodedRequest](/interfaces/DecodedRequest.md)
- [DecodedRequestExt](/interfaces/DecodedRequestExt.md)
- [FundAccountJsonRpcRequest](/interfaces/FundAccountJsonRpcRequest.md)
- [H256Le](/interfaces/H256Le.md)
- [InterBtcApi](/interfaces/InterBtcApi.md)
- [InterbtcPrimitivesCurrencyId](/interfaces/InterbtcPrimitivesCurrencyId.md)
- [InterbtcPrimitivesTokenSymbol](/interfaces/InterbtcPrimitivesTokenSymbol.md)
- [InterbtcPrimitivesVaultId](/interfaces/InterbtcPrimitivesVaultId.md)
- [Issue](/interfaces/Issue.md)
- [IssueResult](/interfaces/IssueResult.md)
- [Redeem](/interfaces/Redeem.md)
- [RefundRequestExt](/interfaces/RefundRequestExt.md)
- [ReplaceRequestExt](/interfaces/ReplaceRequestExt.md)
- [RewardsAPI](/interfaces/RewardsAPI.md)
- [SecurityStatusCode](/interfaces/SecurityStatusCode.md)
- [SignedFixedPoint](/interfaces/SignedFixedPoint.md)
- [SystemVaultExt](/interfaces/SystemVaultExt.md)
- [TokenSymbol](/interfaces/TokenSymbol.md)
- [TransactionAPI](/interfaces/TransactionAPI.md)
- [UnsignedFixedPoint](/interfaces/UnsignedFixedPoint.md)
- [VaultCurrencyPair](/interfaces/VaultCurrencyPair.md)
- [VaultId](/interfaces/VaultId.md)
- [VaultRegistryVault](/interfaces/VaultRegistryVault.md)
- [WalletExt](/interfaces/WalletExt.md)

### Type aliases

- [BitcoinNetwork](/modules.md#bitcoinnetwork)
- [CollateralAmount](/modules.md#collateralamount)
- [CollateralCurrency](/modules.md#collateralcurrency)
- [CollateralIdLiteral](/modules.md#collateralidliteral)
- [CollateralUnit](/modules.md#collateralunit)
- [CurrencyUnit](/modules.md#currencyunit)
- [GovernanceCurrency](/modules.md#governancecurrency)
- [GovernanceIdLiteral](/modules.md#governanceidliteral)
- [GovernanceUnit](/modules.md#governanceunit)
- [PHANTOM\_DEFAULT](/modules.md#phantom_default)
- [RWEscrowPoint](/modules.md#rwescrowpoint)
- [VoteUnit](/modules.md#voteunit)
- [VotingCurrency](/modules.md#votingcurrency)
- [WrappedAmount](/modules.md#wrappedamount)
- [WrappedCurrency](/modules.md#wrappedcurrency)
- [WrappedIdLiteral](/modules.md#wrappedidliteral)

### Variables

- [ACCOUNT\_NOT\_SET\_ERROR\_MESSAGE](/modules.md#account_not_set_error_message)
- [CollateralAmount](/modules.md#collateralamount)
- [CollateralCurrency](/modules.md#collateralcurrency)
- [CollateralUnit](/modules.md#collateralunit)
- [CurrencyUnit](/modules.md#currencyunit)
- [FIXEDI128\_SCALING\_FACTOR](/modules.md#fixedi128_scaling_factor)
- [GovernanceCurrency](/modules.md#governancecurrency)
- [GovernanceUnit](/modules.md#governanceunit)
- [IGNORED\_ERROR\_MESSAGES](/modules.md#ignored_error_messages)
- [MBTC\_IN\_SAT](/modules.md#mbtc_in_sat)
- [PERCENTAGE\_GRANULARITY](/modules.md#percentage_granularity)
- [SLEEP\_TIME\_MS](/modules.md#sleep_time_ms)
- [VoteUnit](/modules.md#voteunit)
- [VotingCurrency](/modules.md#votingcurrency)
- [WrappedAmount](/modules.md#wrappedamount)
- [WrappedCurrency](/modules.md#wrappedcurrency)

### Functions

- [addHexPrefix](/modules.md#addhexprefix)
- [allocateAmountsToVaults](/modules.md#allocateamountstovaults)
- [btcAddressFromParams](/modules.md#btcaddressfromparams)
- [computeLazyDistribution](/modules.md#computelazydistribution)
- [convertMoment](/modules.md#convertmoment)
- [createAPIRegistry](/modules.md#createapiregistry)
- [createExchangeRateOracleKey](/modules.md#createexchangerateoraclekey)
- [createInclusionOracleKey](/modules.md#createinclusionoraclekey)
- [createInterBtcApi](/modules.md#createinterbtcapi)
- [createProvider](/modules.md#createprovider)
- [createSubstrateAPI](/modules.md#createsubstrateapi)
- [currencyIdLiteralToMonetaryCurrency](/modules.md#currencyidliteraltomonetarycurrency)
- [currencyIdToLiteral](/modules.md#currencyidtoliteral)
- [currencyIdToMonetaryCurrency](/modules.md#currencyidtomonetarycurrency)
- [decodeBtcAddress](/modules.md#decodebtcaddress)
- [decodeFixedPointType](/modules.md#decodefixedpointtype)
- [decodeVaultId](/modules.md#decodevaultid)
- [encodeBtcAddress](/modules.md#encodebtcaddress)
- [encodeUnsignedFixedPoint](/modules.md#encodeunsignedfixedpoint)
- [encodeVaultId](/modules.md#encodevaultid)
- [ensureHashEncoded](/modules.md#ensurehashencoded)
- [getAPITypes](/modules.md#getapitypes)
- [getBitcoinNetwork](/modules.md#getbitcoinnetwork)
- [getRPCTypes](/modules.md#getrpctypes)
- [getRequestIdsFromEvents](/modules.md#getrequestidsfromevents)
- [getStorageKey](/modules.md#getstoragekey)
- [getTxProof](/modules.md#gettxproof)
- [issueAndRedeem](/modules.md#issueandredeem)
- [issueSingle](/modules.md#issuesingle)
- [newAccountId](/modules.md#newaccountid)
- [newCollateralBTCExchangeRate](/modules.md#newcollateralbtcexchangerate)
- [newCurrencyId](/modules.md#newcurrencyid)
- [newMonetaryAmount](/modules.md#newmonetaryamount)
- [newVaultCurrencyPair](/modules.md#newvaultcurrencypair)
- [newVaultId](/modules.md#newvaultid)
- [parseEscrowPoint](/modules.md#parseescrowpoint)
- [parseIssueRequest](/modules.md#parseissuerequest)
- [parseOrmlTokensAccountData](/modules.md#parseormltokensaccountdata)
- [parseRedeemRequest](/modules.md#parseredeemrequest)
- [parseRefundRequest](/modules.md#parserefundrequest)
- [parseReplaceRequest](/modules.md#parsereplacerequest)
- [parseSystemVault](/modules.md#parsesystemvault)
- [parseWallet](/modules.md#parsewallet)
- [queryNominationsMap](/modules.md#querynominationsmap)
- [redeem](/modules.md#redeem)
- [reverseEndianness](/modules.md#reverseendianness)
- [reverseEndiannessHex](/modules.md#reverseendiannesshex)
- [roundLastNDigits](/modules.md#roundlastndigits)
- [roundTwoDecimals](/modules.md#roundtwodecimals)
- [satToMBTC](/modules.md#sattombtc)
- [setCodecStorage](/modules.md#setcodecstorage)
- [setNumericStorage](/modules.md#setnumericstorage)
- [sleep](/modules.md#sleep)
- [storageKeyToNthInner](/modules.md#storagekeytonthinner)
- [stripHexPrefix](/modules.md#striphexprefix)
- [tickerToCurrencyIdLiteral](/modules.md#tickertocurrencyidliteral)
- [tickerToMonetaryCurrency](/modules.md#tickertomonetarycurrency)
- [toVoting](/modules.md#tovoting)
- [uint8ArrayToString](/modules.md#uint8arraytostring)
- [unwrapRawExchangeRate](/modules.md#unwraprawexchangerate)
- [waitForBlockFinalization](/modules.md#waitforblockfinalization)
- [waitForBlockRelaying](/modules.md#waitforblockrelaying)

## Type aliases

### <a id="bitcoinnetwork" name="bitcoinnetwork"></a> BitcoinNetwork

Ƭ **BitcoinNetwork**: ``"mainnet"`` \| ``"testnet"`` \| ``"regtest"``

#### Defined in

[src/types/bitcoinTypes.ts:1](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/bitcoinTypes.ts#L1)

___

### <a id="collateralamount" name="collateralamount"></a> CollateralAmount

Ƭ **CollateralAmount**: typeof [`CollateralAmount`](/modules.md#collateralamount)[`number`]

#### Defined in

[src/types/currency.ts:46](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L46)

___

### <a id="collateralcurrency" name="collateralcurrency"></a> CollateralCurrency

Ƭ **CollateralCurrency**: typeof [`CollateralCurrency`](/modules.md#collateralcurrency)[`number`]

#### Defined in

[src/types/currency.ts:49](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L49)

___

### <a id="collateralidliteral" name="collateralidliteral"></a> CollateralIdLiteral

Ƭ **CollateralIdLiteral**: [`DOT`](/enums/CurrencyIdLiteral.md#dot) \| [`KSM`](/enums/CurrencyIdLiteral.md#ksm) \| [`KINT`](/enums/CurrencyIdLiteral.md#kint) \| [`INTR`](/enums/CurrencyIdLiteral.md#intr)

#### Defined in

[src/types/currency.ts:39](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L39)

___

### <a id="collateralunit" name="collateralunit"></a> CollateralUnit

Ƭ **CollateralUnit**: typeof [`CollateralUnit`](/modules.md#collateralunit)[`number`]

#### Defined in

[src/types/currency.ts:52](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L52)

___

### <a id="currencyunit" name="currencyunit"></a> CurrencyUnit

Ƭ **CurrencyUnit**: typeof [`CurrencyUnit`](/modules.md#currencyunit)[`number`]

#### Defined in

[src/types/currency.ts:55](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L55)

___

### <a id="governancecurrency" name="governancecurrency"></a> GovernanceCurrency

Ƭ **GovernanceCurrency**: typeof [`GovernanceCurrency`](/modules.md#governancecurrency)[`number`]

#### Defined in

[src/types/currency.ts:64](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L64)

___

### <a id="governanceidliteral" name="governanceidliteral"></a> GovernanceIdLiteral

Ƭ **GovernanceIdLiteral**: [`INTR`](/enums/CurrencyIdLiteral.md#intr) \| [`KINT`](/enums/CurrencyIdLiteral.md#kint)

#### Defined in

[src/types/currency.ts:38](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L38)

___

### <a id="governanceunit" name="governanceunit"></a> GovernanceUnit

Ƭ **GovernanceUnit**: typeof [`GovernanceUnit`](/modules.md#governanceunit)[`number`]

#### Defined in

[src/types/currency.ts:67](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L67)

___

### <a id="phantom_default" name="phantom_default"></a> PHANTOM\_DEFAULT

Ƭ **PHANTOM\_DEFAULT**: ``"default"``

#### Defined in

src/interfaces/default/types.ts:72

___

### <a id="rwescrowpoint" name="rwescrowpoint"></a> RWEscrowPoint

Ƭ **RWEscrowPoint**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `bias` | `BN` |
| `slope` | `BN` |
| `ts` | `BN` |

#### Defined in

[src/types/currency.ts:140](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L140)

___

### <a id="voteunit" name="voteunit"></a> VoteUnit

Ƭ **VoteUnit**: [`GovernanceUnit`](/modules.md#governanceunit)

#### Defined in

[src/types/currency.ts:73](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L73)

___

### <a id="votingcurrency" name="votingcurrency"></a> VotingCurrency

Ƭ **VotingCurrency**: typeof [`VotingCurrency`](/modules.md#votingcurrency)[`number`]

#### Defined in

[src/types/currency.ts:70](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L70)

___

### <a id="wrappedamount" name="wrappedamount"></a> WrappedAmount

Ƭ **WrappedAmount**: typeof [`WrappedAmount`](/modules.md#wrappedamount)[`number`]

#### Defined in

[src/types/currency.ts:61](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L61)

___

### <a id="wrappedcurrency" name="wrappedcurrency"></a> WrappedCurrency

Ƭ **WrappedCurrency**: typeof [`WrappedCurrency`](/modules.md#wrappedcurrency)[`number`]

#### Defined in

[src/types/currency.ts:58](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L58)

___

### <a id="wrappedidliteral" name="wrappedidliteral"></a> WrappedIdLiteral

Ƭ **WrappedIdLiteral**: [`INTERBTC`](/enums/CurrencyIdLiteral.md#interbtc) \| [`KBTC`](/enums/CurrencyIdLiteral.md#kbtc)

#### Defined in

[src/types/currency.ts:37](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L37)

## Variables

### <a id="account_not_set_error_message" name="account_not_set_error_message"></a> ACCOUNT\_NOT\_SET\_ERROR\_MESSAGE

• **ACCOUNT\_NOT\_SET\_ERROR\_MESSAGE**: ``"cannot sign transaction without setting account"``

#### Defined in

[src/utils/constants.ts:8](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/constants.ts#L8)

___

### <a id="collateralamount" name="collateralamount"></a> CollateralAmount

• **CollateralAmount**: (typeof `PolkadotAmount` \| typeof `KusamaAmount`)[]

#### Defined in

[src/types/currency.ts:45](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L45)

___

### <a id="collateralcurrency" name="collateralcurrency"></a> CollateralCurrency

• **CollateralCurrency**: readonly [`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\>, `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\>]

#### Defined in

[src/types/currency.ts:48](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L48)

___

### <a id="collateralunit" name="collateralunit"></a> CollateralUnit

• **CollateralUnit**: ({ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  })[]

#### Defined in

[src/types/currency.ts:51](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L51)

___

### <a id="currencyunit" name="currencyunit"></a> CurrencyUnit

• **CurrencyUnit**: ({ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  })[]

#### Defined in

[src/types/currency.ts:54](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L54)

___

### <a id="fixedi128_scaling_factor" name="fixedi128_scaling_factor"></a> FIXEDI128\_SCALING\_FACTOR

• **FIXEDI128\_SCALING\_FACTOR**: ``18``

#### Defined in

[src/utils/constants.ts:2](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/constants.ts#L2)

___

### <a id="governancecurrency" name="governancecurrency"></a> GovernanceCurrency

• **GovernanceCurrency**: (`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  }\>)[]

#### Defined in

[src/types/currency.ts:63](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L63)

___

### <a id="governanceunit" name="governanceunit"></a> GovernanceUnit

• **GovernanceUnit**: ({ `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  })[]

#### Defined in

[src/types/currency.ts:66](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L66)

___

### <a id="ignored_error_messages" name="ignored_error_messages"></a> IGNORED\_ERROR\_MESSAGES

• **IGNORED\_ERROR\_MESSAGES**: `string`[]

#### Defined in

[src/utils/constants.ts:6](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/constants.ts#L6)

___

### <a id="mbtc_in_sat" name="mbtc_in_sat"></a> MBTC\_IN\_SAT

• **MBTC\_IN\_SAT**: ``100000``

#### Defined in

[src/utils/currency.ts:24](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/currency.ts#L24)

___

### <a id="percentage_granularity" name="percentage_granularity"></a> PERCENTAGE\_GRANULARITY

• **PERCENTAGE\_GRANULARITY**: ``3``

#### Defined in

[src/utils/constants.ts:1](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/constants.ts#L1)

___

### <a id="sleep_time_ms" name="sleep_time_ms"></a> SLEEP\_TIME\_MS

• **SLEEP\_TIME\_MS**: ``1000``

#### Defined in

[src/utils/issueRedeem.ts:24](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/issueRedeem.ts#L24)

___

### <a id="voteunit" name="voteunit"></a> VoteUnit

• **VoteUnit**: ({ `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  })[] = `GovernanceUnit`

#### Defined in

[src/types/currency.ts:72](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L72)

___

### <a id="votingcurrency" name="votingcurrency"></a> VotingCurrency

• **VotingCurrency**: (`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  }\>)[]

#### Defined in

[src/types/currency.ts:69](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L69)

___

### <a id="wrappedamount" name="wrappedamount"></a> WrappedAmount

• **WrappedAmount**: typeof `InterBtcAmount`[]

#### Defined in

[src/types/currency.ts:60](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L60)

___

### <a id="wrappedcurrency" name="wrappedcurrency"></a> WrappedCurrency

• **WrappedCurrency**: `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>[]

#### Defined in

[src/types/currency.ts:57](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L57)

## Functions

### <a id="addhexprefix" name="addhexprefix"></a> addHexPrefix

▸ **addHexPrefix**(`str`): `string`

Ensure the `0x` hex prefix is present

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:79](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L79)

___

### <a id="allocateamountstovaults" name="allocateamountstovaults"></a> allocateAmountsToVaults

▸ **allocateAmountsToVaults**<`U`\>(`vaultsWithAvailableAmounts`, `amountToAllocate`): `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

Given a list of vaults with availabilities (e.g. collateral for issue, tokens
for redeem) and an amount to allocate, selects one or more vaults to fulfil
the request.
If the amount cannot be allocated by a single vault, greedily selects the vault
with highest available amount and tries again for the remainder. If at leaast
one vault can fulfil a request alone, a random one among them is selected.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultsWithAvailableAmounts` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<`U`\>, `U`\>\> |
| `amountToAllocate` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> |

#### Returns

`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

#### Defined in

[src/utils/issueRedeem.ts:70](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/issueRedeem.ts#L70)

___

### <a id="btcaddressfromparams" name="btcaddressfromparams"></a> btcAddressFromParams

▸ **btcAddressFromParams**(`registry`, `params`): `BitcoinAddress`

#### Parameters

| Name | Type |
| :------ | :------ |
| `registry` | `TypeRegistry` |
| `params` | { `p2pkh`: `string` \| `H160`  } \| { `p2sh`: `string` \| `H160`  } \| { `p2wpkhv0`: `string` \| `H160`  } |

#### Returns

`BitcoinAddress`

#### Defined in

[src/utils/bitcoin.ts:58](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/bitcoin.ts#L58)

___

### <a id="computelazydistribution" name="computelazydistribution"></a> computeLazyDistribution

▸ **computeLazyDistribution**(`stake`, `perToken`, `tally`): `Big`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stake` | `Big` |
| `perToken` | `Big` |
| `tally` | `Big` |

#### Returns

`Big`

#### Defined in

[src/utils/currency.ts:36](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/currency.ts#L36)

___

### <a id="convertmoment" name="convertmoment"></a> convertMoment

▸ **convertMoment**(`moment`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moment` | `Moment` |

#### Returns

`Date`

#### Defined in

[src/utils/encoding.ts:310](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L310)

___

### <a id="createapiregistry" name="createapiregistry"></a> createAPIRegistry

▸ **createAPIRegistry**(): `TypeRegistry`

#### Returns

`TypeRegistry`

#### Defined in

[src/factory.ts:46](https://github.com/interlay/interbtc-api/blob/b81f698/src/factory.ts#L46)

___

### <a id="createexchangerateoraclekey" name="createexchangerateoraclekey"></a> createExchangeRateOracleKey

▸ **createExchangeRateOracleKey**<`U`\>(`api`, `collateralCurrency`): `InterbtcPrimitivesOracleKey`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `collateralCurrency` | `Currency`<`U`\> |

#### Returns

`InterbtcPrimitivesOracleKey`

#### Defined in

[src/utils/currency.ts:77](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/currency.ts#L77)

___

### <a id="createinclusionoraclekey" name="createinclusionoraclekey"></a> createInclusionOracleKey

▸ **createInclusionOracleKey**(`api`, `type`): `InterbtcPrimitivesOracleKey`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `type` | `FeeEstimationType` |

#### Returns

`InterbtcPrimitivesOracleKey`

#### Defined in

[src/utils/currency.ts:73](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/currency.ts#L73)

___

### <a id="createinterbtcapi" name="createinterbtcapi"></a> createInterBtcApi

▸ **createInterBtcApi**(`endpoint`, `network?`, `account?`, `autoConnect?`): `Promise`<[`InterBtcApi`](/interfaces/InterBtcApi.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | `string` | `undefined` |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"mainnet"` |
| `account?` | `AddressOrPair` | `undefined` |
| `autoConnect?` | `number` \| ``false`` | `undefined` |

#### Returns

`Promise`<[`InterBtcApi`](/interfaces/InterBtcApi.md)\>

#### Defined in

[src/factory.ts:28](https://github.com/interlay/interbtc-api/blob/b81f698/src/factory.ts#L28)

___

### <a id="createprovider" name="createprovider"></a> createProvider

▸ **createProvider**(`endpoint`, `autoConnect?`): `ProviderInterface`

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `autoConnect?` | `number` \| ``false`` |

#### Returns

`ProviderInterface`

#### Defined in

[src/factory.ts:13](https://github.com/interlay/interbtc-api/blob/b81f698/src/factory.ts#L13)

___

### <a id="createsubstrateapi" name="createsubstrateapi"></a> createSubstrateAPI

▸ **createSubstrateAPI**(`endpoint`, `autoConnect?`): `Promise`<`ApiPromise`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | `string` |
| `autoConnect?` | `number` \| ``false`` |

#### Returns

`Promise`<`ApiPromise`\>

#### Defined in

[src/factory.ts:23](https://github.com/interlay/interbtc-api/blob/b81f698/src/factory.ts#L23)

___

### <a id="currencyidliteraltomonetarycurrency" name="currencyidliteraltomonetarycurrency"></a> currencyIdLiteralToMonetaryCurrency

▸ **currencyIdLiteralToMonetaryCurrency**<`U`\>(`api`, `currencyIdLiteral`): `Currency`<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `currencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |

#### Returns

`Currency`<`U`\>

#### Defined in

[src/types/currency.ts:121](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L121)

___

### <a id="currencyidtoliteral" name="currencyidtoliteral"></a> currencyIdToLiteral

▸ **currencyIdToLiteral**(`currencyId`): [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | `InterbtcPrimitivesCurrencyId` |

#### Returns

[`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md)

#### Defined in

[src/types/currency.ts:130](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L130)

___

### <a id="currencyidtomonetarycurrency" name="currencyidtomonetarycurrency"></a> currencyIdToMonetaryCurrency

▸ **currencyIdToMonetaryCurrency**<`U`\>(`currencyId`): `Currency`<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | `InterbtcPrimitivesCurrencyId` |

#### Returns

`Currency`<`U`\>

#### Defined in

[src/types/currency.ts:99](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L99)

___

### <a id="decodebtcaddress" name="decodebtcaddress"></a> decodeBtcAddress

▸ **decodeBtcAddress**(`address`, `network`): { `p2pkh`: `string`  } \| { `p2sh`: `string`  } \| { `p2wpkhv0`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

{ `p2pkh`: `string`  } \| { `p2sh`: `string`  } \| { `p2wpkhv0`: `string`  }

#### Defined in

[src/utils/bitcoin.ts:68](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/bitcoin.ts#L68)

___

### <a id="decodefixedpointtype" name="decodefixedpointtype"></a> decodeFixedPointType

▸ **decodeFixedPointType**(`x`): `Big`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`SignedFixedPoint`](/interfaces/SignedFixedPoint.md) \| [`UnsignedFixedPoint`](/interfaces/UnsignedFixedPoint.md) |

#### Returns

`Big`

#### Defined in

[src/utils/encoding.ts:116](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L116)

___

### <a id="decodevaultid" name="decodevaultid"></a> decodeVaultId

▸ **decodeVaultId**(`api`, `id`): [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `id` | `string` |

#### Returns

[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

[src/utils/encoding.ts:324](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L324)

___

### <a id="encodebtcaddress" name="encodebtcaddress"></a> encodeBtcAddress

▸ **encodeBtcAddress**(`address`, `network`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `BitcoinAddress` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

`string`

#### Defined in

[src/utils/bitcoin.ts:12](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/bitcoin.ts#L12)

___

### <a id="encodeunsignedfixedpoint" name="encodeunsignedfixedpoint"></a> encodeUnsignedFixedPoint

▸ **encodeUnsignedFixedPoint**(`api`, `x`): [`UnsignedFixedPoint`](/interfaces/UnsignedFixedPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `x` | `Big` |

#### Returns

[`UnsignedFixedPoint`](/interfaces/UnsignedFixedPoint.md)

#### Defined in

[src/utils/encoding.ts:122](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L122)

___

### <a id="encodevaultid" name="encodevaultid"></a> encodeVaultId

▸ **encodeVaultId**(`id`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:318](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L318)

___

### <a id="ensurehashencoded" name="ensurehashencoded"></a> ensureHashEncoded

▸ **ensureHashEncoded**(`api`, `hash`): `H256`

Ensure a hash value is an encoded H256

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | The polkadot API promise used to encode if necessary |
| `hash` | `string` \| `H256` | The either H256 or string encoded hash |

#### Returns

`H256`

#### Defined in

[src/utils/encoding.ts:88](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L88)

___

### <a id="getapitypes" name="getapitypes"></a> getAPITypes

▸ **getAPITypes**(): `RegistryTypes`

#### Returns

`RegistryTypes`

#### Defined in

[src/factory.ts:38](https://github.com/interlay/interbtc-api/blob/b81f698/src/factory.ts#L38)

___

### <a id="getbitcoinnetwork" name="getbitcoinnetwork"></a> getBitcoinNetwork

▸ **getBitcoinNetwork**(`network?`): [`Network`](/interfaces/bitcoin.networks.Network.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `network` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"mainnet"` |

#### Returns

[`Network`](/interfaces/bitcoin.networks.Network.md)

#### Defined in

[src/interbtc-api.ts:30](https://github.com/interlay/interbtc-api/blob/b81f698/src/interbtc-api.ts#L30)

___

### <a id="getrpctypes" name="getrpctypes"></a> getRPCTypes

▸ **getRPCTypes**(): `Record`<`string`, `Record`<`string`, `DefinitionRpc` \| `DefinitionRpcSub`\>\>

#### Returns

`Record`<`string`, `Record`<`string`, `DefinitionRpc` \| `DefinitionRpcSub`\>\>

#### Defined in

[src/factory.ts:42](https://github.com/interlay/interbtc-api/blob/b81f698/src/factory.ts#L42)

___

### <a id="getrequestidsfromevents" name="getrequestidsfromevents"></a> getRequestIdsFromEvents

▸ **getRequestIdsFromEvents**(`events`, `eventToFind`, `api`): `Hash`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `EventRecord`[] | The EventRecord array returned after sending a transaction |
| `eventToFind` | `AugmentedEvent`<`ApiTypes`, `AnyTuple`\> | - |
| `api` | `ApiPromise` | - |

#### Returns

`Hash`[]

The id associated with the transaction. If the EventRecord array does not
contain required events, the function throws an error.

#### Defined in

[src/utils/issueRedeem.ts:44](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/issueRedeem.ts#L44)

___

### <a id="getstoragekey" name="getstoragekey"></a> getStorageKey

▸ **getStorageKey**(`moduleName`, `storageItemName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |
| `storageItemName` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/storage.ts:12](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/storage.ts#L12)

___

### <a id="gettxproof" name="gettxproof"></a> getTxProof

▸ **getTxProof**(`electrsAPI`, `btcTxId`): `Promise`<{ `merkleProof`: `Bytes` ; `rawTx`: `Bytes`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `btcTxId` | `string` |

#### Returns

`Promise`<{ `merkleProof`: `Bytes` ; `rawTx`: `Bytes`  }\>

#### Defined in

[src/utils/bitcoin.ts:84](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/bitcoin.ts#L84)

___

### <a id="issueandredeem" name="issueandredeem"></a> issueAndRedeem

▸ **issueAndRedeem**(`InterBtcApi`, `bitcoinCoreClient`, `account`, `vaultId?`, `issueAmount?`, `redeemAmount?`, `autoExecuteIssue?`, `autoExecuteRedeem?`, `triggerRefund?`, `atomic?`): `Promise`<[[`Issue`](/interfaces/Issue.md), [`Redeem`](/interfaces/Redeem.md)]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `InterBtcApi` | [`InterBtcApi`](/interfaces/InterBtcApi.md) | `undefined` |
| `bitcoinCoreClient` | [`BitcoinCoreClient`](/classes/BitcoinCoreClient.md) | `undefined` |
| `account` | `KeyringPair` | `undefined` |
| `vaultId?` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | `undefined` |
| `issueAmount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `undefined` |
| `redeemAmount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `undefined` |
| `autoExecuteIssue` | `boolean` | `true` |
| `autoExecuteRedeem` | [`ExecuteRedeem`](/enums/ExecuteRedeem.md) | `ExecuteRedeem.Auto` |
| `triggerRefund` | `boolean` | `false` |
| `atomic` | `boolean` | `true` |

#### Returns

`Promise`<[[`Issue`](/interfaces/Issue.md), [`Redeem`](/interfaces/Redeem.md)]\>

#### Defined in

[src/utils/issueRedeem.ts:228](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/issueRedeem.ts#L228)

___

### <a id="issuesingle" name="issuesingle"></a> issueSingle

▸ **issueSingle**(`interBtcApi`, `bitcoinCoreClient`, `issuingAccount`, `amount`, `vaultId?`, `autoExecute?`, `triggerRefund?`, `atomic?`): `Promise`<[`IssueResult`](/interfaces/IssueResult.md)<`BitcoinUnit`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `interBtcApi` | [`InterBtcApi`](/interfaces/InterBtcApi.md) | `undefined` |
| `bitcoinCoreClient` | [`BitcoinCoreClient`](/classes/BitcoinCoreClient.md) | `undefined` |
| `issuingAccount` | `KeyringPair` | `undefined` |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `undefined` |
| `vaultId?` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | `undefined` |
| `autoExecute` | `boolean` | `true` |
| `triggerRefund` | `boolean` | `false` |
| `atomic` | `boolean` | `true` |

#### Returns

`Promise`<[`IssueResult`](/interfaces/IssueResult.md)<`BitcoinUnit`\>\>

#### Defined in

[src/utils/issueRedeem.ts:107](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/issueRedeem.ts#L107)

___

### <a id="newaccountid" name="newaccountid"></a> newAccountId

▸ **newAccountId**(`api`, `accountId`): `AccountId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `accountId` | `string` |

#### Returns

`AccountId`

#### Defined in

[src/utils/encoding.ts:174](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L174)

___

### <a id="newcollateralbtcexchangerate" name="newcollateralbtcexchangerate"></a> newCollateralBTCExchangeRate

▸ **newCollateralBTCExchangeRate**<`U`\>(`rate`, `counterCurrency`, `useBaseUnits?`): `ExchangeRate`<`Bitcoin`, `BitcoinUnit`, `Currency`<`U`\>, `U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `rate` | `Big` | `undefined` |
| `counterCurrency` | `Currency`<`U`\> | `undefined` |
| `useBaseUnits` | `boolean` | `false` |

#### Returns

`ExchangeRate`<`Bitcoin`, `BitcoinUnit`, `Currency`<`U`\>, `U`\>

#### Defined in

[src/utils/currency.ts:56](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/currency.ts#L56)

___

### <a id="newcurrencyid" name="newcurrencyid"></a> newCurrencyId

▸ **newCurrencyId**(`api`, `currency`): `InterbtcPrimitivesCurrencyId`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `currency` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |

#### Returns

`InterbtcPrimitivesCurrencyId`

#### Defined in

[src/utils/encoding.ts:204](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L204)

___

### <a id="newmonetaryamount" name="newmonetaryamount"></a> newMonetaryAmount

▸ **newMonetaryAmount**<`U`\>(`amount`, `currency`, `base?`): `MonetaryAmount`<`Currency`<`U`\>, `U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `BigSource` | `undefined` |
| `currency` | `Currency`<`U`\> | `undefined` |
| `base` | `boolean` | `false` |

#### Returns

`MonetaryAmount`<`Currency`<`U`\>, `U`\>

#### Defined in

[src/utils/currency.ts:47](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/currency.ts#L47)

___

### <a id="newvaultcurrencypair" name="newvaultcurrencypair"></a> newVaultCurrencyPair

▸ **newVaultCurrencyPair**(`api`, `collateralCurrency`, `wrappedCurrency`): `InterbtcPrimitivesVaultCurrencyPair`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`InterbtcPrimitivesVaultCurrencyPair`

#### Defined in

[src/utils/encoding.ts:189](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L189)

___

### <a id="newvaultid" name="newvaultid"></a> newVaultId

▸ **newVaultId**(`api`, `accountId`, `collateralCurrency`, `wrappedCurrency`): [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `accountId` | `string` |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

[src/utils/encoding.ts:178](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L178)

___

### <a id="parseescrowpoint" name="parseescrowpoint"></a> parseEscrowPoint

▸ **parseEscrowPoint**(`e`): [`RWEscrowPoint`](/modules.md#rwescrowpoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `EscrowPoint` |

#### Returns

[`RWEscrowPoint`](/modules.md#rwescrowpoint)

#### Defined in

[src/types/currency.ts:146](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L146)

___

### <a id="parseissuerequest" name="parseissuerequest"></a> parseIssueRequest

▸ **parseIssueRequest**(`vaultsAPI`, `req`, `network`, `id`): `Promise`<[`Issue`](/interfaces/Issue.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultsAPI` | [`VaultsAPI`](/interfaces/VaultsAPI.md) |
| `req` | `InterbtcPrimitivesIssueIssueRequest` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `id` | `string` \| `H256` |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)\>

#### Defined in

[src/utils/encoding.ts:251](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L251)

___

### <a id="parseormltokensaccountdata" name="parseormltokensaccountdata"></a> parseOrmlTokensAccountData

▸ **parseOrmlTokensAccountData**<`U`\>(`data`, `currency`): [`ChainBalance`](/classes/ChainBalance.md)<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `OrmlTokensAccountData` |
| `currency` | `Currency`<`U`\> |

#### Returns

[`ChainBalance`](/classes/ChainBalance.md)<`U`\>

#### Defined in

[src/types/currency.ts:184](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L184)

___

### <a id="parseredeemrequest" name="parseredeemrequest"></a> parseRedeemRequest

▸ **parseRedeemRequest**(`vaultsAPI`, `req`, `network`, `id`): `Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultsAPI` | [`VaultsAPI`](/interfaces/VaultsAPI.md) |
| `req` | `InterbtcPrimitivesRedeemRedeemRequest` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `id` | `string` \| `H256` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Defined in

[src/utils/encoding.ts:279](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L279)

___

### <a id="parserefundrequest" name="parserefundrequest"></a> parseRefundRequest

▸ **parseRefundRequest**(`req`, `network`, `wrappedCurrency`): [`RefundRequestExt`](/interfaces/RefundRequestExt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `InterbtcPrimitivesRefundRefundRequest` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

[`RefundRequestExt`](/interfaces/RefundRequestExt.md)

#### Defined in

[src/utils/encoding.ts:208](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L208)

___

### <a id="parsereplacerequest" name="parsereplacerequest"></a> parseReplaceRequest

▸ **parseReplaceRequest**(`vaultsAPI`, `req`, `network`, `wrappedCurrency`): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultsAPI` | [`VaultsAPI`](/interfaces/VaultsAPI.md) |
| `req` | `InterbtcPrimitivesReplaceReplaceRequest` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>

#### Defined in

[src/utils/encoding.ts:225](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L225)

___

### <a id="parsesystemvault" name="parsesystemvault"></a> parseSystemVault

▸ **parseSystemVault**(`vault`, `wrappedCurrency`, `collateralCurrency`): [`SystemVaultExt`](/interfaces/SystemVaultExt.md)<`BitcoinUnit`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vault` | `VaultRegistrySystemVault` |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

[`SystemVaultExt`](/interfaces/SystemVaultExt.md)<`BitcoinUnit`\>

#### Defined in

[src/utils/encoding.ts:157](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L157)

___

### <a id="parsewallet" name="parsewallet"></a> parseWallet

▸ **parseWallet**(`wallet`, `network`): [`WalletExt`](/interfaces/WalletExt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wallet` | `VaultRegistryWallet` |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

[`WalletExt`](/interfaces/WalletExt.md)

#### Defined in

[src/utils/encoding.ts:143](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L143)

___

### <a id="querynominationsmap" name="querynominationsmap"></a> queryNominationsMap

▸ **queryNominationsMap**(`map`, `vaultId`): `number` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `number`\> |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |

#### Returns

`number` \| `undefined`

#### Defined in

[src/utils/encoding.ts:349](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L349)

___

### <a id="redeem" name="redeem"></a> redeem

▸ **redeem**(`InterBtcApi`, `bitcoinCoreClient`, `redeemingAccount`, `amount`, `vaultId?`, `autoExecute?`, `atomic?`, `timeout?`, `retries?`): `Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `InterBtcApi` | [`InterBtcApi`](/interfaces/InterBtcApi.md) | `undefined` |
| `bitcoinCoreClient` | [`BitcoinCoreClient`](/classes/BitcoinCoreClient.md) | `undefined` |
| `redeemingAccount` | `KeyringPair` | `undefined` |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `undefined` |
| `vaultId?` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | `undefined` |
| `autoExecute` | [`ExecuteRedeem`](/enums/ExecuteRedeem.md) | `ExecuteRedeem.Auto` |
| `atomic` | `boolean` | `true` |
| `timeout` | `number` | `undefined` |
| `retries` | `number` | `0` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Defined in

[src/utils/issueRedeem.ts:182](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/issueRedeem.ts#L182)

___

### <a id="reverseendianness" name="reverseendianness"></a> reverseEndianness

▸ **reverseEndianness**(`bytes`): `Uint8Array`

Converts endianness of a Uint8Array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bytes` | `Uint8Array` | Uint8Array, to be converted LE<>BE |

#### Returns

`Uint8Array`

#### Defined in

[src/utils/encoding.ts:49](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L49)

___

### <a id="reverseendiannesshex" name="reverseendiannesshex"></a> reverseEndiannessHex

▸ **reverseEndiannessHex**(`hex`): `string`

Reverse the endianness of the given hex string

**`dev`** Will remove `0x` prefix if present

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:101](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L101)

___

### <a id="roundlastndigits" name="roundlastndigits"></a> roundLastNDigits

▸ **roundLastNDigits**(`n`, `x`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `x` | `string` \| `Big` \| `BN` |

#### Returns

`string`

#### Defined in

[src/utils/currency.ts:40](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/currency.ts#L40)

___

### <a id="roundtwodecimals" name="roundtwodecimals"></a> roundTwoDecimals

▸ **roundTwoDecimals**(`input`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/currency.ts:26](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/currency.ts#L26)

___

### <a id="sattombtc" name="sattombtc"></a> satToMBTC

▸ **satToMBTC**(`sat`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sat` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/currency.ts:31](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/currency.ts#L31)

___

### <a id="setcodecstorage" name="setcodecstorage"></a> setCodecStorage

▸ **setCodecStorage**(`api`, `moduleName`, `storageItemName`, `value`, `account`, `isLittleEndian?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `moduleName` | `string` | `undefined` |
| `storageItemName` | `string` | `undefined` |
| `value` | `Codec` | `undefined` |
| `account` | `AddressOrPair` | `undefined` |
| `isLittleEndian` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/storage.ts:29](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/storage.ts#L29)

___

### <a id="setnumericstorage" name="setnumericstorage"></a> setNumericStorage

▸ **setNumericStorage**(`api`, `moduleName`, `storageItemName`, `value`, `account`, `bits?`, `isLittleEndian?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `moduleName` | `string` | `undefined` |
| `storageItemName` | `string` | `undefined` |
| `value` | `BN` | `undefined` |
| `account` | `AddressOrPair` | `undefined` |
| `bits` | `number` | `32` |
| `isLittleEndian` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/storage.ts:16](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/storage.ts#L16)

___

### <a id="sleep" name="sleep"></a> sleep

▸ **sleep**(`ms`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/issueRedeem.ts:178](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/issueRedeem.ts#L178)

___

### <a id="storagekeytonthinner" name="storagekeytonthinner"></a> storageKeyToNthInner

▸ **storageKeyToNthInner**<`T`\>(`s`, `n?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `s` | `StorageKey`<`T`[]\> | `undefined` |
| `n` | `number` | `0` |

#### Returns

`T`

#### Defined in

[src/utils/encoding.ts:130](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L130)

___

### <a id="striphexprefix" name="striphexprefix"></a> stripHexPrefix

▸ **stripHexPrefix**(`str`): `string`

Remove the `0x` hex prefix if present

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:71](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L71)

___

### <a id="tickertocurrencyidliteral" name="tickertocurrencyidliteral"></a> tickerToCurrencyIdLiteral

▸ **tickerToCurrencyIdLiteral**(`ticker`): [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ticker` | `string` |

#### Returns

[`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md)

#### Defined in

[src/types/currency.ts:75](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L75)

___

### <a id="tickertomonetarycurrency" name="tickertomonetarycurrency"></a> tickerToMonetaryCurrency

▸ **tickerToMonetaryCurrency**<`U`\>(`api`, `ticker`): `Currency`<`U`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `ticker` | `string` |

#### Returns

`Currency`<`U`\>

#### Defined in

[src/types/currency.ts:135](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L135)

___

### <a id="tovoting" name="tovoting"></a> toVoting

▸ **toVoting**(`governanceCurrency`): `Currency`<[`GovernanceUnit`](/modules.md#governanceunit)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `governanceCurrency` | `Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Currency`<[`GovernanceUnit`](/modules.md#governanceunit)\>

#### Defined in

[src/utils/currency.ts:85](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/currency.ts#L85)

___

### <a id="uint8arraytostring" name="uint8arraytostring"></a> uint8ArrayToString

▸ **uint8ArrayToString**(`bytes`): `string`

Converts a Uint8Array to string

**`dev`** Will remove `0x` prefix if present

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[src/utils/encoding.ts:112](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L112)

___

### <a id="unwraprawexchangerate" name="unwraprawexchangerate"></a> unwrapRawExchangeRate

▸ **unwrapRawExchangeRate**(`option`): [`UnsignedFixedPoint`](/interfaces/UnsignedFixedPoint.md) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | `Option`<[`UnsignedFixedPoint`](/interfaces/UnsignedFixedPoint.md)\> |

#### Returns

[`UnsignedFixedPoint`](/interfaces/UnsignedFixedPoint.md) \| `undefined`

#### Defined in

[src/utils/encoding.ts:314](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/encoding.ts#L314)

___

### <a id="waitforblockfinalization" name="waitforblockfinalization"></a> waitForBlockFinalization

▸ **waitForBlockFinalization**(`bitcoinCoreClient`, `btcRelayAPI`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitcoinCoreClient` | [`BitcoinCoreClient`](/classes/BitcoinCoreClient.md) |
| `btcRelayAPI` | [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bitcoin.ts:106](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/bitcoin.ts#L106)

___

### <a id="waitforblockrelaying" name="waitforblockrelaying"></a> waitForBlockRelaying

▸ **waitForBlockRelaying**(`btcRelayAPI`, `blockHash`, `sleepMs?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `btcRelayAPI` | [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md) | `undefined` |
| `blockHash` | `string` | `undefined` |
| `sleepMs` | `number` | `SLEEP_TIME_MS` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bitcoin.ts:95](https://github.com/interlay/interbtc-api/blob/b81f698/src/utils/bitcoin.ts#L95)
