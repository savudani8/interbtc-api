[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / RewardsAPI

# Interface: RewardsAPI

## Implemented by

- [`DefaultRewardsAPI`](/classes/DefaultRewardsAPI.md)

## Table of contents

### Methods

- [computeCollateralInStakingPool](/interfaces/RewardsAPI.md#computecollateralinstakingpool)
- [computeRewardInRewardsPool](/interfaces/RewardsAPI.md#computerewardinrewardspool)
- [computeRewardInStakingPool](/interfaces/RewardsAPI.md#computerewardinstakingpool)
- [getRewardsPoolRewardPerToken](/interfaces/RewardsAPI.md#getrewardspoolrewardpertoken)
- [getRewardsPoolRewardTally](/interfaces/RewardsAPI.md#getrewardspoolrewardtally)
- [getRewardsPoolStake](/interfaces/RewardsAPI.md#getrewardspoolstake)
- [getStakingPoolNonce](/interfaces/RewardsAPI.md#getstakingpoolnonce)
- [getStakingPoolRewardPerToken](/interfaces/RewardsAPI.md#getstakingpoolrewardpertoken)
- [getStakingPoolRewardTally](/interfaces/RewardsAPI.md#getstakingpoolrewardtally)
- [getStakingPoolStake](/interfaces/RewardsAPI.md#getstakingpoolstake)
- [withdrawRewards](/interfaces/RewardsAPI.md#withdrawrewards)

## Methods

### <a id="computecollateralinstakingpool" name="computecollateralinstakingpool"></a> computeCollateralInStakingPool

▸ **computeCollateralInStakingPool**(`vaultId`, `nominatorId`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | The account ID of the staking pool nominee |
| `nominatorId` | `AccountId` | The account ID of the staking pool nominator |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the collateral in the given currency

#### Defined in

[src/parachain/rewards.ts:102](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L102)

___

### <a id="computerewardinrewardspool" name="computerewardinrewardspool"></a> computeRewardInRewardsPool

▸ **computeRewardInRewardsPool**(`rewardCurrencyIdLiteral`, `vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The reward currency |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral used by the vault |
| `vaultAccountId` | `AccountId` | The vault ID whose reward to compute |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the reward in the given currency

#### Defined in

[src/parachain/rewards.ts:91](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L91)

___

### <a id="computerewardinstakingpool" name="computerewardinstakingpool"></a> computeRewardInStakingPool

▸ **computeRewardInStakingPool**(`vaultAccountId`, `nominatorId`, `collateralCurrencyId`, `rewardCurrencyId?`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | - |
| `nominatorId` | `AccountId` | The account ID of the staking pool nominator |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral currency used by the vault |
| `rewardCurrencyId?` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | - |
| `nonce?` | `number` | - |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the reward in the given currency

#### Defined in

[src/parachain/rewards.ts:37](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L37)

___

### <a id="getrewardspoolrewardpertoken" name="getrewardspoolrewardpertoken"></a> getRewardsPoolRewardPerToken

▸ **getRewardsPoolRewardPerToken**(`currencyId`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The reward currency |

#### Returns

`Promise`<`Big`\>

The reward per token, as a Big object

#### Defined in

[src/parachain/rewards.ts:127](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L127)

___

### <a id="getrewardspoolrewardtally" name="getrewardspoolrewardtally"></a> getRewardsPoolRewardTally

▸ **getRewardsPoolRewardTally**(`rewardCurrencyIdLiteral`, `vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The reward currency |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral used by the vault |
| `vaultAccountId` | `AccountId` | The vault ID whose reward pool to check |

#### Returns

`Promise`<`Big`\>

The reward tally, as a Big object

#### Defined in

[src/parachain/rewards.ts:118](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L118)

___

### <a id="getrewardspoolstake" name="getrewardspoolstake"></a> getRewardsPoolStake

▸ **getRewardsPoolStake**(`currencyId`, `accountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The reward currency |
| `accountId` | `AccountId` | An account ID string |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Defined in

[src/parachain/rewards.ts:111](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L111)

___

### <a id="getstakingpoolnonce" name="getstakingpoolnonce"></a> getStakingPoolNonce

▸ **getStakingPoolNonce**(`currencyId`, `vaultId`): `Promise`<`number`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | The staked currency |
| `vaultId` | `AccountId` | The account ID of the staking pool nominee |

#### Returns

`Promise`<`number`\>

The current nonce of the staking pool

#### Defined in

[src/parachain/rewards.ts:84](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L84)

___

### <a id="getstakingpoolrewardpertoken" name="getstakingpoolrewardpertoken"></a> getStakingPoolRewardPerToken

▸ **getStakingPoolRewardPerToken**(`rewardCurrencyId`, `vaultId`, `collateralCurrencyId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rewardCurrencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The reward currency, e.g. kBTC, KINT, interBTC, INTR |
| `vaultId` | `AccountId` | The account ID of the staking pool nominee |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral currency used by the vault |
| `nonce?` | `number` | Nonce of the rewards pool |

#### Returns

`Promise`<`Big`\>

The reward per token, as a Big object

#### Defined in

[src/parachain/rewards.ts:73](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L73)

___

### <a id="getstakingpoolrewardtally" name="getstakingpoolrewardtally"></a> getStakingPoolRewardTally

▸ **getStakingPoolRewardTally**(`rewardCurrencyId`, `vaultId`, `nominatorId`, `collateralCurrencyId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rewardCurrencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The reward currency, e.g. kBTC, KINT, interBTC, INTR |
| `vaultId` | `AccountId` | The account ID of the staking pool nominee |
| `nominatorId` | `AccountId` | The account ID of the staking pool nominator |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral currency used by the vault |
| `nonce?` | `number` | Nonce of the rewards pool |

#### Returns

`Promise`<`Big`\>

The reward tally, as a Big object

#### Defined in

[src/parachain/rewards.ts:59](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L59)

___

### <a id="getstakingpoolstake" name="getstakingpoolstake"></a> getStakingPoolStake

▸ **getStakingPoolStake**(`collateralCurrencyId`, `vaultId`, `nominatorId`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | The staked currency |
| `vaultId` | `AccountId` | The account ID of the staking pool nominee |
| `nominatorId` | `AccountId` | The account ID of the staking pool nominator |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Defined in

[src/parachain/rewards.ts:50](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L50)

___

### <a id="withdrawrewards" name="withdrawrewards"></a> withdrawRewards

▸ **withdrawRewards**(`vaultId`, `nonce?`): `Promise`<`void`\>

**`remarks`** Withdraw all rewards from the current account in the `vaultId` staking pool.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | VaultId object |
| `nonce?` | `number` | Staking pool nonce |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/rewards.ts:133](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/rewards.ts#L133)
