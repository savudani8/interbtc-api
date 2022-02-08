[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultFeeAPI

# Class: DefaultFeeAPI

## Implements

- [`FeeAPI`](/interfaces/FeeAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultFeeAPI.md#constructor)

### Methods

- [calculateAPY](/classes/DefaultFeeAPI.md#calculateapy)
- [getGriefingCollateral](/classes/DefaultFeeAPI.md#getgriefingcollateral)
- [getIssueFee](/classes/DefaultFeeAPI.md#getissuefee)
- [getIssueGriefingCollateralRate](/classes/DefaultFeeAPI.md#getissuegriefingcollateralrate)
- [getReplaceGriefingCollateralRate](/classes/DefaultFeeAPI.md#getreplacegriefingcollateralrate)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultFeeAPI**(`api`, `oracleAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `oracleAPI` | [`OracleAPI`](/interfaces/OracleAPI.md) |

#### Defined in

[src/parachain/fee.ts:55](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/fee.ts#L55)

## Methods

### <a id="calculateapy" name="calculateapy"></a> calculateAPY

▸ **calculateAPY**<`C`\>(`feesWrapped`, `lockedCollateral`, `exchangeRate?`): `Promise`<`Big`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `feesWrapped` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `lockedCollateral` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |
| `exchangeRate?` | `ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`Big`\>

The APY, given the parameters

#### Implementation of

[FeeAPI](/interfaces/FeeAPI.md).[calculateAPY](/interfaces/FeeAPI.md#calculateapy)

#### Defined in

[src/parachain/fee.ts:102](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/fee.ts#L102)

___

### <a id="getgriefingcollateral" name="getgriefingcollateral"></a> getGriefingCollateral

▸ **getGriefingCollateral**(`amount`, `type`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `type` | `GriefingCollateralType` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

The griefing collateral

#### Implementation of

[FeeAPI](/interfaces/FeeAPI.md).[getGriefingCollateral](/interfaces/FeeAPI.md#getgriefingcollateral)

#### Defined in

[src/parachain/fee.ts:60](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/fee.ts#L60)

___

### <a id="getissuefee" name="getissuefee"></a> getIssueFee

▸ **getIssueFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The percentage of issued token that is received by the vault as reward

#### Implementation of

[FeeAPI](/interfaces/FeeAPI.md).[getIssueFee](/interfaces/FeeAPI.md#getissuefee)

#### Defined in

[src/parachain/fee.ts:96](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/fee.ts#L96)

___

### <a id="getissuegriefingcollateralrate" name="getissuegriefingcollateralrate"></a> getIssueGriefingCollateralRate

▸ **getIssueGriefingCollateralRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The griefing collateral rate for issuing InterBTC

#### Implementation of

[FeeAPI](/interfaces/FeeAPI.md).[getIssueGriefingCollateralRate](/interfaces/FeeAPI.md#getissuegriefingcollateralrate)

#### Defined in

[src/parachain/fee.ts:84](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/fee.ts#L84)

___

### <a id="getreplacegriefingcollateralrate" name="getreplacegriefingcollateralrate"></a> getReplaceGriefingCollateralRate

▸ **getReplaceGriefingCollateralRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The griefing collateral rate for the Vault replace request

#### Implementation of

[FeeAPI](/interfaces/FeeAPI.md).[getReplaceGriefingCollateralRate](/interfaces/FeeAPI.md#getreplacegriefingcollateralrate)

#### Defined in

[src/parachain/fee.ts:90](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/fee.ts#L90)
