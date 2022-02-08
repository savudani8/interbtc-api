[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultRefundAPI

# Class: DefaultRefundAPI

## Implements

- [`RefundAPI`](/interfaces/RefundAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultRefundAPI.md#constructor)

### Methods

- [execute](/classes/DefaultRefundAPI.md#execute)
- [getRequestById](/classes/DefaultRefundAPI.md#getrequestbyid)
- [getRequestByIssueId](/classes/DefaultRefundAPI.md#getrequestbyissueid)
- [list](/classes/DefaultRefundAPI.md#list)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultRefundAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `btcNetwork` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/refund.ts:40](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/refund.ts#L40)

## Methods

### <a id="execute" name="execute"></a> execute

▸ **execute**(`requestId`, `btcTxId`): `Promise`<`void`\>

Execute a refund request

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |
| `btcTxId` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[execute](/interfaces/RefundAPI.md#execute)

#### Defined in

[src/parachain/refund.ts:48](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/refund.ts#L48)

___

### <a id="getrequestbyid" name="getrequestbyid"></a> getRequestById

▸ **getRequestById**(`refundId`): `Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `refundId` | `H256` |

#### Returns

`Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>

A refund object

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[getRequestById](/interfaces/RefundAPI.md#getrequestbyid)

#### Defined in

[src/parachain/refund.ts:63](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/refund.ts#L63)

___

### <a id="getrequestbyissueid" name="getrequestbyissueid"></a> getRequestByIssueId

▸ **getRequestByIssueId**(`issueId`): `Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueId` | `string` |

#### Returns

`Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)\>

A refund request object

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[getRequestByIssueId](/interfaces/RefundAPI.md#getrequestbyissueid)

#### Defined in

[src/parachain/refund.ts:76](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/refund.ts#L76)

___

### <a id="list" name="list"></a> list

▸ **list**(): `Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)[]\>

#### Returns

`Promise`<[`RefundRequestExt`](/interfaces/RefundRequestExt.md)[]\>

An array containing the refund requests

#### Implementation of

[RefundAPI](/interfaces/RefundAPI.md).[list](/interfaces/RefundAPI.md#list)

#### Defined in

[src/parachain/refund.ts:55](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/refund.ts#L55)
