[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultRewardsAPI

# Class: DefaultRewardsAPI

## Implements

- [`RewardsAPI`](/interfaces/RewardsAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultRewardsAPI.md#constructor)

### Properties

- [api](/classes/DefaultRewardsAPI.md#api)

### Methods

- [computeCollateralInStakingPool](/classes/DefaultRewardsAPI.md#computecollateralinstakingpool)
- [computeRewardInRewardsPool](/classes/DefaultRewardsAPI.md#computerewardinrewardspool)
- [computeRewardInStakingPool](/classes/DefaultRewardsAPI.md#computerewardinstakingpool)
- [getRewardsPoolRewardPerToken](/classes/DefaultRewardsAPI.md#getrewardspoolrewardpertoken)
- [getRewardsPoolRewardTally](/classes/DefaultRewardsAPI.md#getrewardspoolrewardtally)
- [getRewardsPoolStake](/classes/DefaultRewardsAPI.md#getrewardspoolstake)
- [getStakingPoolNonce](/classes/DefaultRewardsAPI.md#getstakingpoolnonce)
- [getStakingPoolRewardPerToken](/classes/DefaultRewardsAPI.md#getstakingpoolrewardpertoken)
- [getStakingPoolRewardTally](/classes/DefaultRewardsAPI.md#getstakingpoolrewardtally)
- [getStakingPoolSlashPerToken](/classes/DefaultRewardsAPI.md#getstakingpoolslashpertoken)
- [getStakingPoolSlashTally](/classes/DefaultRewardsAPI.md#getstakingpoolslashtally)
- [getStakingPoolStake](/classes/DefaultRewardsAPI.md#getstakingpoolstake)
- [withdrawRewards](/classes/DefaultRewardsAPI.md#withdrawrewards)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultRewardsAPI**(`api`, `wrappedCurrency`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/rewards.ts:140](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L140)

## Properties

### <a id="api" name="api"></a> api

• **api**: `ApiPromise`

## Methods

### <a id="computecollateralinstakingpool" name="computecollateralinstakingpool"></a> computeCollateralInStakingPool

▸ **computeCollateralInStakingPool**(`vaultId`, `nominatorId`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |
| `nominatorId` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the collateral in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeCollateralInStakingPool](/interfaces/RewardsAPI.md#computecollateralinstakingpool)

#### Defined in

[src/parachain/rewards.ts:255](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L255)

___

### <a id="computerewardinrewardspool" name="computerewardinrewardspool"></a> computeRewardInRewardsPool

▸ **computeRewardInRewardsPool**(`rewardCurrencyIdLiteral`, `vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the reward in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeRewardInRewardsPool](/interfaces/RewardsAPI.md#computerewardinrewardspool)

#### Defined in

[src/parachain/rewards.ts:302](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L302)

___

### <a id="computerewardinstakingpool" name="computerewardinstakingpool"></a> computeRewardInStakingPool

▸ **computeRewardInStakingPool**(`vaultAccountId`, `nominatorId`, `collateralCurrencyId`, `rewardCurrencyId?`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `rewardCurrencyId?` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `nonce?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the reward in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeRewardInStakingPool](/interfaces/RewardsAPI.md#computerewardinstakingpool)

#### Defined in

[src/parachain/rewards.ts:160](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L160)

___

### <a id="getrewardspoolrewardpertoken" name="getrewardspoolrewardpertoken"></a> getRewardsPoolRewardPerToken

▸ **getRewardsPoolRewardPerToken**(`currencyId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |

#### Returns

`Promise`<`Big`\>

The reward per token, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardsPoolRewardPerToken](/interfaces/RewardsAPI.md#getrewardspoolrewardpertoken)

#### Defined in

[src/parachain/rewards.ts:346](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L346)

___

### <a id="getrewardspoolrewardtally" name="getrewardspoolrewardtally"></a> getRewardsPoolRewardTally

▸ **getRewardsPoolRewardTally**(`rewardCurrencyIdLiteral`, `vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`Big`\>

The reward tally, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardsPoolRewardTally](/interfaces/RewardsAPI.md#getrewardspoolrewardtally)

#### Defined in

[src/parachain/rewards.ts:331](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L331)

___

### <a id="getrewardspoolstake" name="getrewardspoolstake"></a> getRewardsPoolStake

▸ **getRewardsPoolStake**(`vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardsPoolStake](/interfaces/RewardsAPI.md#getrewardspoolstake)

#### Defined in

[src/parachain/rewards.ts:322](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L322)

___

### <a id="getstakingpoolnonce" name="getstakingpoolnonce"></a> getStakingPoolNonce

▸ **getStakingPoolNonce**(`collateralCurrencyIdLiteral`, `vaultAccountId`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`number`\>

The current nonce of the staking pool

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolNonce](/interfaces/RewardsAPI.md#getstakingpoolnonce)

#### Defined in

[src/parachain/rewards.ts:181](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L181)

___

### <a id="getstakingpoolrewardpertoken" name="getstakingpoolrewardpertoken"></a> getStakingPoolRewardPerToken

▸ **getStakingPoolRewardPerToken**(`wrappedCurrencyIdLiteral`, `vaultAccountId`, `collateralCurrencyIdLiteral`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrappedCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `vaultAccountId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The reward per token, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolRewardPerToken](/interfaces/RewardsAPI.md#getstakingpoolrewardpertoken)

#### Defined in

[src/parachain/rewards.ts:233](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L233)

___

### <a id="getstakingpoolrewardtally" name="getstakingpoolrewardtally"></a> getStakingPoolRewardTally

▸ **getStakingPoolRewardTally**(`rewardCurrencyId`, `vaultAccountId`, `nominatorId`, `collateralCurrencyIdLiteral`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rewardCurrencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The reward tally, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolRewardTally](/interfaces/RewardsAPI.md#getstakingpoolrewardtally)

#### Defined in

[src/parachain/rewards.ts:212](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L212)

___

### <a id="getstakingpoolslashpertoken" name="getstakingpoolslashpertoken"></a> getStakingPoolSlashPerToken

▸ **getStakingPoolSlashPerToken**(`vaultCollateralIdLiteral`, `vaultAccountId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/rewards.ts:269](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L269)

___

### <a id="getstakingpoolslashtally" name="getstakingpoolslashtally"></a> getStakingPoolSlashTally

▸ **getStakingPoolSlashTally**(`collateralCurrencyIdLiteral`, `vaultAccountId`, `nominatorId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/rewards.ts:285](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L285)

___

### <a id="getstakingpoolstake" name="getstakingpoolstake"></a> getStakingPoolStake

▸ **getStakingPoolStake**(`collateralCurrencyIdLiteral`, `vaultAccountId`, `nominatorId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolStake](/interfaces/RewardsAPI.md#getstakingpoolstake)

#### Defined in

[src/parachain/rewards.ts:194](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L194)

___

### <a id="withdrawrewards" name="withdrawrewards"></a> withdrawRewards

▸ **withdrawRewards**(`vaultId`, `nonce?`): `Promise`<`void`\>

**`remarks`** Withdraw all rewards from the current account in the `vaultId` staking pool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |
| `nonce?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[withdrawRewards](/interfaces/RewardsAPI.md#withdrawrewards)

#### Defined in

[src/parachain/rewards.ts:146](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L146)
