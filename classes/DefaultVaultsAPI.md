[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultVaultsAPI

# Class: DefaultVaultsAPI

## Implements

- [`VaultsAPI`](/interfaces/VaultsAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultVaultsAPI.md#constructor)

### Methods

- [backingCollateralProportion](/classes/DefaultVaultsAPI.md#backingcollateralproportion)
- [calculateCapacity](/classes/DefaultVaultsAPI.md#calculatecapacity)
- [computeBackingCollateral](/classes/DefaultVaultsAPI.md#computebackingcollateral)
- [computeReward](/classes/DefaultVaultsAPI.md#computereward)
- [depositCollateral](/classes/DefaultVaultsAPI.md#depositcollateral)
- [get](/classes/DefaultVaultsAPI.md#get)
- [getAPY](/classes/DefaultVaultsAPI.md#getapy)
- [getCollateral](/classes/DefaultVaultsAPI.md#getcollateral)
- [getCollateralizationFromVault](/classes/DefaultVaultsAPI.md#getcollateralizationfromvault)
- [getCollateralizationFromVaultAndCollateral](/classes/DefaultVaultsAPI.md#getcollateralizationfromvaultandcollateral)
- [getGovernanceReward](/classes/DefaultVaultsAPI.md#getgovernancereward)
- [getIssuedAmount](/classes/DefaultVaultsAPI.md#getissuedamount)
- [getLiquidationCollateralThreshold](/classes/DefaultVaultsAPI.md#getliquidationcollateralthreshold)
- [getLiquidationVault](/classes/DefaultVaultsAPI.md#getliquidationvault)
- [getMaxNominationRatio](/classes/DefaultVaultsAPI.md#getmaxnominationratio)
- [getPremiumRedeemThreshold](/classes/DefaultVaultsAPI.md#getpremiumredeemthreshold)
- [getPremiumRedeemVaults](/classes/DefaultVaultsAPI.md#getpremiumredeemvaults)
- [getPunishmentFee](/classes/DefaultVaultsAPI.md#getpunishmentfee)
- [getRequiredCollateralForVault](/classes/DefaultVaultsAPI.md#getrequiredcollateralforvault)
- [getRequiredCollateralForWrapped](/classes/DefaultVaultsAPI.md#getrequiredcollateralforwrapped)
- [getSecureCollateralThreshold](/classes/DefaultVaultsAPI.md#getsecurecollateralthreshold)
- [getStakingCapacity](/classes/DefaultVaultsAPI.md#getstakingcapacity)
- [getSystemCollateralization](/classes/DefaultVaultsAPI.md#getsystemcollateralization)
- [getTotalIssuableAmount](/classes/DefaultVaultsAPI.md#gettotalissuableamount)
- [getTotalIssuedAmount](/classes/DefaultVaultsAPI.md#gettotalissuedamount)
- [getVaultCollateralization](/classes/DefaultVaultsAPI.md#getvaultcollateralization)
- [getVaultsWithIssuableTokens](/classes/DefaultVaultsAPI.md#getvaultswithissuabletokens)
- [getVaultsWithRedeemableTokens](/classes/DefaultVaultsAPI.md#getvaultswithredeemabletokens)
- [getWrappedCurrency](/classes/DefaultVaultsAPI.md#getwrappedcurrency)
- [getWrappedReward](/classes/DefaultVaultsAPI.md#getwrappedreward)
- [isBelowPremiumThreshold](/classes/DefaultVaultsAPI.md#isbelowpremiumthreshold)
- [isNoTokensIssuedError](/classes/DefaultVaultsAPI.md#isnotokensissuederror)
- [isVaultFlaggedForTheft](/classes/DefaultVaultsAPI.md#isvaultflaggedfortheft)
- [list](/classes/DefaultVaultsAPI.md#list)
- [parseVault](/classes/DefaultVaultsAPI.md#parsevault)
- [parseVaultStatus](/classes/DefaultVaultsAPI.md#parsevaultstatus)
- [register](/classes/DefaultVaultsAPI.md#register)
- [reportVaultTheft](/classes/DefaultVaultsAPI.md#reportvaulttheft)
- [selectRandomVaultIssue](/classes/DefaultVaultsAPI.md#selectrandomvaultissue)
- [selectRandomVaultRedeem](/classes/DefaultVaultsAPI.md#selectrandomvaultredeem)
- [unwrapCurrency](/classes/DefaultVaultsAPI.md#unwrapcurrency)
- [withdrawCollateral](/classes/DefaultVaultsAPI.md#withdrawcollateral)
- [wrapCurrency](/classes/DefaultVaultsAPI.md#wrapcurrency)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultVaultsAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `tokensAPI`, `oracleAPI`, `feeAPI`, `rewardsAPI`, `systemAPI`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `btcNetwork` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `tokensAPI` | [`TokensAPI`](/interfaces/TokensAPI.md) |
| `oracleAPI` | [`OracleAPI`](/interfaces/OracleAPI.md) |
| `feeAPI` | [`FeeAPI`](/interfaces/FeeAPI.md) |
| `rewardsAPI` | [`RewardsAPI`](/interfaces/RewardsAPI.md) |
| `systemAPI` | [`SystemAPI`](/interfaces/SystemAPI.md) |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/vaults.ts:300](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L300)

## Methods

### <a id="backingcollateralproportion" name="backingcollateralproportion"></a> backingCollateralProportion

▸ **backingCollateralProportion**(`vaultAccountId`, `nominatorId`, `collateralCurrencyIdLiteral`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/vaults.ts:415](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L415)

___

### <a id="calculatecapacity" name="calculatecapacity"></a> calculateCapacity

▸ **calculateCapacity**<`C`\>(`collateral`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateral` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

Issuable amount by the vault, given the collateral amount

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[calculateCapacity](/interfaces/VaultsAPI.md#calculatecapacity)

#### Defined in

[src/parachain/vaults.ts:646](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L646)

___

### <a id="computebackingcollateral" name="computebackingcollateral"></a> computeBackingCollateral

▸ **computeBackingCollateral**(`vaultId`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |
| `nonce?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The entire collateral backing a vault's issued tokens.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[computeBackingCollateral](/interfaces/VaultsAPI.md#computebackingcollateral)

#### Defined in

[src/parachain/vaults.ts:398](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L398)

___

### <a id="computereward" name="computereward"></a> computeReward

▸ **computeReward**(`vaultAccountId`, `nominatorId`, `collateralCurrencyId`, `rewardCurrencyIdLiteral`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

Compute the total reward, including the staking (local) pool and the rewards (global) pool

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `nonce?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the total reward in the given currency

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[computeReward](/interfaces/VaultsAPI.md#computereward)

#### Defined in

[src/parachain/vaults.ts:429](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L429)

___

### <a id="depositcollateral" name="depositcollateral"></a> depositCollateral

▸ **depositCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[depositCollateral](/interfaces/VaultsAPI.md#depositcollateral)

#### Defined in

[src/parachain/vaults.ts:339](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L339)

___

### <a id="get" name="get"></a> get

▸ **get**(`vaultAccountId`, `collateralCurrencyIdLiteral`): `Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A vault object

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[get](/interfaces/VaultsAPI.md#get)

#### Defined in

[src/parachain/vaults.ts:360](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L360)

___

### <a id="getapy" name="getapy"></a> getAPY

▸ **getAPY**(`vaultAccountId`, `collateralCurrency`): `Promise`<`Big`\>

Get the total APY for a vault based on the income in wrapped and collateral tokens
divided by the locked collateral.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrency` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`Big`\>

the APY as a percentage string

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getAPY](/interfaces/VaultsAPI.md#getapy)

#### Defined in

[src/parachain/vaults.ts:795](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L795)

___

### <a id="getcollateral" name="getcollateral"></a> getCollateral

▸ **getCollateral**(`vaultAccountId`, `collateralCurrencyIdLiteral`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The collateral of a vault, taking slashes into account.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getCollateral](/interfaces/VaultsAPI.md#getcollateral)

#### Defined in

[src/parachain/vaults.ts:379](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L379)

___

### <a id="getcollateralizationfromvault" name="getcollateralizationfromvault"></a> getCollateralizationFromVault

▸ **getCollateralizationFromVault**(`vaultId`, `onlyIssued?`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | `undefined` |
| `onlyIssued` | `boolean` | `false` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/vaults.ts:550](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L550)

___

### <a id="getcollateralizationfromvaultandcollateral" name="getcollateralizationfromvaultandcollateral"></a> getCollateralizationFromVaultAndCollateral

▸ **getCollateralizationFromVaultAndCollateral**<`C`\>(`vaultId`, `newCollateral`, `onlyIssued`): `Promise`<`Big`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |
| `newCollateral` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |
| `onlyIssued` | `boolean` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/vaults.ts:558](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L558)

___

### <a id="getgovernancereward" name="getgovernancereward"></a> getGovernanceReward

▸ **getGovernanceReward**(`vaultAccountId`, `vaultCollateralIdLiteral`, `governanceCurrencyIdLiteral`): `Promise`<`MonetaryAmount`<`Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `governanceCurrencyIdLiteral` | [`GovernanceIdLiteral`](/modules.md#governanceidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

The total reward collected by the vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getGovernanceReward](/interfaces/VaultsAPI.md#getgovernancereward)

#### Defined in

[src/parachain/vaults.ts:463](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L463)

___

### <a id="getissuedamount" name="getissuedamount"></a> getIssuedAmount

▸ **getIssuedAmount**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrency` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The amount of wrapped tokens issued by the given vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getIssuedAmount](/interfaces/VaultsAPI.md#getissuedamount)

#### Defined in

[src/parachain/vaults.ts:604](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L604)

___

### <a id="getliquidationcollateralthreshold" name="getliquidationcollateralthreshold"></a> getLiquidationCollateralThreshold

▸ **getLiquidationCollateralThreshold**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`Big`\>

The lower bound for vault collateralization.
If a Vault’s collateral rate
drops below this, automatic liquidation (forced Redeem) is triggered.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getLiquidationCollateralThreshold](/interfaces/VaultsAPI.md#getliquidationcollateralthreshold)

#### Defined in

[src/parachain/vaults.ts:768](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L768)

___

### <a id="getliquidationvault" name="getliquidationvault"></a> getLiquidationVault

▸ **getLiquidationVault**(`collateralCurrency`): `Promise`<[`SystemVaultExt`](/interfaces/SystemVaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<[`SystemVaultExt`](/interfaces/SystemVaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A vault object representing the liquidation vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getLiquidationVault](/interfaces/VaultsAPI.md#getliquidationvault)

#### Defined in

[src/parachain/vaults.ts:490](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L490)

___

### <a id="getmaxnominationratio" name="getmaxnominationratio"></a> getMaxNominationRatio

▸ **getMaxNominationRatio**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`Big`\>

The maximum collateral a vault can accept as nomination, as a ratio of its own collateral

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getMaxNominationRatio](/interfaces/VaultsAPI.md#getmaxnominationratio)

#### Defined in

[src/parachain/vaults.ts:390](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L390)

___

### <a id="getpremiumredeemthreshold" name="getpremiumredeemthreshold"></a> getPremiumRedeemThreshold

▸ **getPremiumRedeemThreshold**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`Big`\>

The collateral rate at which users receive
a premium allocated from the Vault’s collateral, when performing a redeem with this Vault.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getPremiumRedeemThreshold](/interfaces/VaultsAPI.md#getpremiumredeemthreshold)

#### Defined in

[src/parachain/vaults.ts:778](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L778)

___

### <a id="getpremiumredeemvaults" name="getpremiumredeemvaults"></a> getPremiumRedeemVaults

▸ **getPremiumRedeemVaults**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

Vaults below the premium redeem threshold, sorted in descending order of their redeemable tokens

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getPremiumRedeemVaults](/interfaces/VaultsAPI.md#getpremiumredeemvaults)

#### Defined in

[src/parachain/vaults.ts:682](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L682)

___

### <a id="getpunishmentfee" name="getpunishmentfee"></a> getPunishmentFee

▸ **getPunishmentFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

Fee that a Vault has to pay, as a percentage, if it fails to execute
redeem or replace requests (for redeem, on top of the slashed wrapped-token-to-collateral
value of the request). The fee is paid in collateral currency based on the wrapped token
amount at the current exchange rate.

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getPunishmentFee](/interfaces/VaultsAPI.md#getpunishmentfee)

#### Defined in

[src/parachain/vaults.ts:810](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L810)

___

### <a id="getrequiredcollateralforvault" name="getrequiredcollateralforvault"></a> getRequiredCollateralForVault

▸ **getRequiredCollateralForVault**<`C`\>(`vaultAccountId`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Get the amount of collateral required for the given vault to be at the
current SecureCollateralThreshold with the current exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The required collateral the vault needs to deposit to stay
above the threshold limit

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getRequiredCollateralForVault](/interfaces/VaultsAPI.md#getrequiredcollateralforvault)

#### Defined in

[src/parachain/vaults.ts:580](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L580)

___

### <a id="getrequiredcollateralforwrapped" name="getrequiredcollateralforwrapped"></a> getRequiredCollateralForWrapped

▸ **getRequiredCollateralForWrapped**<`C`\>(`wrappedAmount`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrappedAmount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Defined in

[src/parachain/vaults.ts:595](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L595)

___

### <a id="getsecurecollateralthreshold" name="getsecurecollateralthreshold"></a> getSecureCollateralThreshold

▸ **getSecureCollateralThreshold**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`Big`\>

The over-collateralization rate for collateral locked
by Vaults, necessary for issuing wrapped tokens

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getSecureCollateralThreshold](/interfaces/VaultsAPI.md#getsecurecollateralthreshold)

#### Defined in

[src/parachain/vaults.ts:788](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L788)

___

### <a id="getstakingcapacity" name="getstakingcapacity"></a> getStakingCapacity

▸ **getStakingCapacity**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrency` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

Staking capacity, as a collateral currency (e.g. DOT)

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getStakingCapacity](/interfaces/VaultsAPI.md#getstakingcapacity)

#### Defined in

[src/parachain/vaults.ts:476](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L476)

___

### <a id="getsystemcollateralization" name="getsystemcollateralization"></a> getSystemCollateralization

▸ **getSystemCollateralization**(): `Promise`<`undefined` \| `Big`\>

#### Returns

`Promise`<`undefined` \| `Big`\>

#### Defined in

[src/parachain/vaults.ts:575](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L575)

___

### <a id="gettotalissuableamount" name="gettotalissuableamount"></a> getTotalIssuableAmount

▸ **getTotalIssuableAmount**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total amount of wrapped tokens that can be issued, considering the collateral
locked by the vaults

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getTotalIssuableAmount](/interfaces/VaultsAPI.md#gettotalissuableamount)

#### Defined in

[src/parachain/vaults.ts:617](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L617)

___

### <a id="gettotalissuedamount" name="gettotalissuedamount"></a> getTotalIssuedAmount

▸ **getTotalIssuedAmount**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total amount of wrapped tokens issued by the vaults

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getTotalIssuedAmount](/interfaces/VaultsAPI.md#gettotalissuedamount)

#### Defined in

[src/parachain/vaults.ts:612](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L612)

___

### <a id="getvaultcollateralization" name="getvaultcollateralization"></a> getVaultCollateralization

▸ **getVaultCollateralization**<`C`\>(`vaultAccountId`, `collateralCurrencyIdLiteral`, `newCollateral?`, `onlyIssued?`): `Promise`<`undefined` \| `Big`\>

Get the collateralization of a single vault measured by dividing the value of issued (wrapped) tokens
by the value of total locked collateral.

**`remarks`** Undefined collateralization is handled as infinite collateralization in the UI.
If no tokens have been issued, the `collateralFunds / issuedFunds` ratio divides by zero,
which means collateralization is infinite.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | `undefined` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | `undefined` |
| `newCollateral?` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | `undefined` |
| `onlyIssued` | `boolean` | `false` |

#### Returns

`Promise`<`undefined` \| `Big`\>

the vault collateralization

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getVaultCollateralization](/interfaces/VaultsAPI.md#getvaultcollateralization)

#### Defined in

[src/parachain/vaults.ts:514](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L514)

___

### <a id="getvaultswithissuabletokens" name="getvaultswithissuabletokens"></a> getVaultsWithIssuableTokens

▸ **getVaultsWithIssuableTokens**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

Vaults with issuable tokens

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getVaultsWithIssuableTokens](/interfaces/VaultsAPI.md#getvaultswithissuabletokens)

#### Defined in

[src/parachain/vaults.ts:703](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L703)

___

### <a id="getvaultswithredeemabletokens" name="getvaultswithredeemabletokens"></a> getVaultsWithRedeemableTokens

▸ **getVaultsWithRedeemableTokens**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

Vaults with redeemable tokens

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getVaultsWithRedeemableTokens](/interfaces/VaultsAPI.md#getvaultswithredeemabletokens)

#### Defined in

[src/parachain/vaults.ts:734](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L734)

___

### <a id="getwrappedcurrency" name="getwrappedcurrency"></a> getWrappedCurrency

▸ **getWrappedCurrency**(): `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Returns

`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

The wrapped currency issued by the vaults

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getWrappedCurrency](/interfaces/VaultsAPI.md#getwrappedcurrency)

#### Defined in

[src/parachain/vaults.ts:313](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L313)

___

### <a id="getwrappedreward" name="getwrappedreward"></a> getWrappedReward

▸ **getWrappedReward**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrency` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total reward collected by the vault

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[getWrappedReward](/interfaces/VaultsAPI.md#getwrappedreward)

#### Defined in

[src/parachain/vaults.ts:451](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L451)

___

### <a id="isbelowpremiumthreshold" name="isbelowpremiumthreshold"></a> isBelowPremiumThreshold

▸ **isBelowPremiumThreshold**(`vaultId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/parachain/vaults.ts:504](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L504)

___

### <a id="isnotokensissuederror" name="isnotokensissuederror"></a> isNoTokensIssuedError

▸ `Private` **isNoTokensIssuedError**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Error` |

#### Returns

`boolean`

#### Defined in

[src/parachain/vaults.ts:500](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L500)

___

### <a id="isvaultflaggedfortheft" name="isvaultflaggedfortheft"></a> isVaultFlaggedForTheft

▸ **isVaultFlaggedForTheft**(`vaultAccountId`, `collateralCurrencyIdLiteral`, `btcTxId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `btcTxId` | `string` |

#### Returns

`Promise`<`boolean`\>

A bollean value

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[isVaultFlaggedForTheft](/interfaces/VaultsAPI.md#isvaultflaggedfortheft)

#### Defined in

[src/parachain/vaults.ts:751](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L751)

___

### <a id="list" name="list"></a> list

▸ **list**(`atBlock?`): `Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `atBlock?` | `BlockHash` |

#### Returns

`Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>[]\>

An array containing the vaults with non-zero backing collateral

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[list](/interfaces/VaultsAPI.md#list)

#### Defined in

[src/parachain/vaults.ts:350](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L350)

___

### <a id="parsevault" name="parsevault"></a> parseVault

▸ **parseVault**(`vault`, `network`): `Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vault` | [`VaultRegistryVault`](/interfaces/VaultRegistryVault.md) |
| `network` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

`Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Defined in

[src/parachain/vaults.ts:847](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L847)

___

### <a id="parsevaultstatus" name="parsevaultstatus"></a> parseVaultStatus

▸ `Private` **parseVaultStatus**(`status`): [`VaultStatusExt`](/enums/VaultStatusExt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `VaultRegistryVaultStatus` |

#### Returns

[`VaultStatusExt`](/enums/VaultStatusExt.md)

#### Defined in

[src/parachain/vaults.ts:835](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L835)

___

### <a id="register" name="register"></a> register

▸ **register**<`C`\>(`amount`, `publicKey`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |
| `publicKey` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:317](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L317)

___

### <a id="reportvaulttheft" name="reportvaulttheft"></a> reportVaultTheft

▸ **reportVaultTheft**(`vaultAccountId`, `btcTxId`): `Promise`<`void`\>

A relayer may report Vault misbehavior by providing a fraud proof
(malicious Bitcoin transaction and transaction inclusion proof).

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `btcTxId` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[reportVaultTheft](/interfaces/VaultsAPI.md#reportvaulttheft)

#### Defined in

[src/parachain/vaults.ts:870](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L870)

___

### <a id="selectrandomvaultissue" name="selectrandomvaultissue"></a> selectRandomVaultIssue

▸ **selectRandomVaultIssue**(`amount`): `Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

A vault that has sufficient collateral to issue the given amount

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[selectRandomVaultIssue](/interfaces/VaultsAPI.md#selectrandomvaultissue)

#### Defined in

[src/parachain/vaults.ts:661](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L661)

___

### <a id="selectrandomvaultredeem" name="selectrandomvaultredeem"></a> selectRandomVaultRedeem

▸ **selectRandomVaultRedeem**(`amount`): `Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

A vault that has issued sufficient wrapped tokens to redeem the given amount

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[selectRandomVaultRedeem](/interfaces/VaultsAPI.md#selectrandomvaultredeem)

#### Defined in

[src/parachain/vaults.ts:671](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L671)

___

### <a id="unwrapcurrency" name="unwrapcurrency"></a> unwrapCurrency

▸ `Private` **unwrapCurrency**<`C`\>(`wrappedBalance`): `MonetaryAmount`<`Currency`<`C`\>, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrappedBalance` | [`BalanceWrapper`](/interfaces/BalanceWrapper.md) |

#### Returns

`MonetaryAmount`<`Currency`<`C`\>, `C`\>

#### Defined in

[src/parachain/vaults.ts:826](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L826)

___

### <a id="withdrawcollateral" name="withdrawcollateral"></a> withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[VaultsAPI](/interfaces/VaultsAPI.md).[withdrawCollateral](/interfaces/VaultsAPI.md#withdrawcollateral)

#### Defined in

[src/parachain/vaults.ts:328](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L328)

___

### <a id="wrapcurrency" name="wrapcurrency"></a> wrapCurrency

▸ `Private` **wrapCurrency**<`C`\>(`amount`): [`BalanceWrapper`](/interfaces/BalanceWrapper.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

[`BalanceWrapper`](/interfaces/BalanceWrapper.md)

#### Defined in

[src/parachain/vaults.ts:816](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/vaults.ts#L816)
