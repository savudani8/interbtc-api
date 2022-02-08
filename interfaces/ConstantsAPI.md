[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / ConstantsAPI

# Interface: ConstantsAPI

## Implemented by

- [`DefaultConstantsAPI`](/classes/DefaultConstantsAPI.md)

## Table of contents

### Methods

- [getSystemBlockHashCount](/interfaces/ConstantsAPI.md#getsystemblockhashcount)
- [getSystemDbWeight](/interfaces/ConstantsAPI.md#getsystemdbweight)
- [getTimestampMinimumPeriod](/interfaces/ConstantsAPI.md#gettimestampminimumperiod)
- [getTransactionByteFee](/interfaces/ConstantsAPI.md#gettransactionbytefee)
- [getTransactionWeightToFee](/interfaces/ConstantsAPI.md#gettransactionweighttofee)

## Methods

### <a id="getsystemblockhashcount" name="getsystemblockhashcount"></a> getSystemBlockHashCount

▸ **getSystemBlockHashCount**(): `BlockNumber`

#### Returns

`BlockNumber`

Maximum number of block number to block hash mappings to keep (oldest pruned first).

#### Defined in

[src/parachain/constants.ts:15](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/constants.ts#L15)

___

### <a id="getsystemdbweight" name="getsystemdbweight"></a> getSystemDbWeight

▸ **getSystemDbWeight**(): `RuntimeDbWeight`

#### Returns

`RuntimeDbWeight`

The weight of database operations that the runtime can invoke.

#### Defined in

[src/parachain/constants.ts:19](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/constants.ts#L19)

___

### <a id="gettimestampminimumperiod" name="gettimestampminimumperiod"></a> getTimestampMinimumPeriod

▸ **getTimestampMinimumPeriod**(): `Moment`

#### Returns

`Moment`

The minimum period between blocks. Beware that this is different to the *expected* period
that the block production apparatus provides. Your chosen consensus system will generally
work with this to determine a sensible block time. e.g. For Aura, it will be double this
period on default settings.

#### Defined in

[src/parachain/constants.ts:26](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/constants.ts#L26)

___

### <a id="gettransactionbytefee" name="gettransactionbytefee"></a> getTransactionByteFee

▸ **getTransactionByteFee**(): `BalanceOf`

#### Returns

`BalanceOf`

The fee to be paid for making a transaction; the per-byte portion.

#### Defined in

[src/parachain/constants.ts:30](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/constants.ts#L30)

___

### <a id="gettransactionweighttofee" name="gettransactionweighttofee"></a> getTransactionWeightToFee

▸ **getTransactionWeightToFee**(): `Vec`<`WeightToFeeCoefficient`\>

#### Returns

`Vec`<`WeightToFeeCoefficient`\>

The polynomial that is applied in order to derive fee from weight.

#### Defined in

[src/parachain/constants.ts:34](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/constants.ts#L34)
