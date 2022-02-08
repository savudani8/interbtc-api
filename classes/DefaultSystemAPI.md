[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultSystemAPI

# Class: DefaultSystemAPI

## Table of contents

### Constructors

- [constructor](/classes/DefaultSystemAPI.md#constructor)

### Methods

- [getCurrentActiveBlockNumber](/classes/DefaultSystemAPI.md#getcurrentactiveblocknumber)
- [getCurrentBlockNumber](/classes/DefaultSystemAPI.md#getcurrentblocknumber)
- [getStatusCode](/classes/DefaultSystemAPI.md#getstatuscode)
- [setCode](/classes/DefaultSystemAPI.md#setcode)
- [subscribeToFinalizedBlockHeads](/classes/DefaultSystemAPI.md#subscribetofinalizedblockheads)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultSystemAPI**(`api`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/system.ts:40](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/system.ts#L40)

## Methods

### <a id="getcurrentactiveblocknumber" name="getcurrentactiveblocknumber"></a> getCurrentActiveBlockNumber

▸ **getCurrentActiveBlockNumber**(`atBlock?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `atBlock?` | `BlockHash` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/parachain/system.ts:47](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/system.ts#L47)

___

### <a id="getcurrentblocknumber" name="getcurrentblocknumber"></a> getCurrentBlockNumber

▸ **getCurrentBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[src/parachain/system.ts:42](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/system.ts#L42)

___

### <a id="getstatuscode" name="getstatuscode"></a> getStatusCode

▸ **getStatusCode**(): `Promise`<[`SecurityStatusCode`](/interfaces/SecurityStatusCode.md)\>

#### Returns

`Promise`<[`SecurityStatusCode`](/interfaces/SecurityStatusCode.md)\>

#### Defined in

[src/parachain/system.ts:59](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/system.ts#L59)

___

### <a id="setcode" name="setcode"></a> setCode

▸ **setCode**(`code`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/system.ts:64](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/system.ts#L64)

___

### <a id="subscribetofinalizedblockheads" name="subscribetofinalizedblockheads"></a> subscribeToFinalizedBlockHeads

▸ **subscribeToFinalizedBlockHeads**(`callback`): `Promise`<() => `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`blockHeader`: `Header`) => `void` |

#### Returns

`Promise`<() => `void`\>

#### Defined in

[src/parachain/system.ts:52](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/system.ts#L52)
