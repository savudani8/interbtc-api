[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultConstantsAPI

# Class: DefaultConstantsAPI

## Implements

- [`ConstantsAPI`](/interfaces/ConstantsAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultConstantsAPI.md#constructor)

### Methods

- [getSystemBlockHashCount](/classes/DefaultConstantsAPI.md#getsystemblockhashcount)
- [getSystemDbWeight](/classes/DefaultConstantsAPI.md#getsystemdbweight)
- [getTimestampMinimumPeriod](/classes/DefaultConstantsAPI.md#gettimestampminimumperiod)
- [getTransactionByteFee](/classes/DefaultConstantsAPI.md#gettransactionbytefee)
- [getTransactionWeightToFee](/classes/DefaultConstantsAPI.md#gettransactionweighttofee)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultConstantsAPI**(`api`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |

#### Defined in

[src/parachain/constants.ts:38](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/constants.ts#L38)

## Methods

### <a id="getsystemblockhashcount" name="getsystemblockhashcount"></a> getSystemBlockHashCount

▸ **getSystemBlockHashCount**(): `BlockNumber`

#### Returns

`BlockNumber`

Maximum number of block number to block hash mappings to keep (oldest pruned first).

#### Implementation of

[ConstantsAPI](/interfaces/ConstantsAPI.md).[getSystemBlockHashCount](/interfaces/ConstantsAPI.md#getsystemblockhashcount)

#### Defined in

[src/parachain/constants.ts:40](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/constants.ts#L40)

___

### <a id="getsystemdbweight" name="getsystemdbweight"></a> getSystemDbWeight

▸ **getSystemDbWeight**(): `RuntimeDbWeight`

#### Returns

`RuntimeDbWeight`

The weight of database operations that the runtime can invoke.

#### Implementation of

[ConstantsAPI](/interfaces/ConstantsAPI.md).[getSystemDbWeight](/interfaces/ConstantsAPI.md#getsystemdbweight)

#### Defined in

[src/parachain/constants.ts:44](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/constants.ts#L44)

___

### <a id="gettimestampminimumperiod" name="gettimestampminimumperiod"></a> getTimestampMinimumPeriod

▸ **getTimestampMinimumPeriod**(): `Moment`

#### Returns

`Moment`

The minimum period between blocks. Beware that this is different to the *expected* period
that the block production apparatus provides. Your chosen consensus system will generally
work with this to determine a sensible block time. e.g. For Aura, it will be double this
period on default settings.

#### Implementation of

[ConstantsAPI](/interfaces/ConstantsAPI.md).[getTimestampMinimumPeriod](/interfaces/ConstantsAPI.md#gettimestampminimumperiod)

#### Defined in

[src/parachain/constants.ts:48](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/constants.ts#L48)

___

### <a id="gettransactionbytefee" name="gettransactionbytefee"></a> getTransactionByteFee

▸ **getTransactionByteFee**(): `BalanceOf`

#### Returns

`BalanceOf`

The fee to be paid for making a transaction; the per-byte portion.

#### Implementation of

[ConstantsAPI](/interfaces/ConstantsAPI.md).[getTransactionByteFee](/interfaces/ConstantsAPI.md#gettransactionbytefee)

#### Defined in

[src/parachain/constants.ts:52](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/constants.ts#L52)

___

### <a id="gettransactionweighttofee" name="gettransactionweighttofee"></a> getTransactionWeightToFee

▸ **getTransactionWeightToFee**(): `Vec`<`WeightToFeeCoefficient`\>

#### Returns

`Vec`<`WeightToFeeCoefficient`\>

The polynomial that is applied in order to derive fee from weight.

#### Implementation of

[ConstantsAPI](/interfaces/ConstantsAPI.md).[getTransactionWeightToFee](/interfaces/ConstantsAPI.md#gettransactionweighttofee)

#### Defined in

[src/parachain/constants.ts:56](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/constants.ts#L56)
