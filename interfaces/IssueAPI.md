[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / IssueAPI

# Interface: IssueAPI

## Implemented by

- [`DefaultIssueAPI`](/classes/DefaultIssueAPI.md)

## Table of contents

### Methods

- [cancel](/interfaces/IssueAPI.md#cancel)
- [execute](/interfaces/IssueAPI.md#execute)
- [getFeeRate](/interfaces/IssueAPI.md#getfeerate)
- [getFeesToPay](/interfaces/IssueAPI.md#getfeestopay)
- [getIssuePeriod](/interfaces/IssueAPI.md#getissueperiod)
- [getRequestById](/interfaces/IssueAPI.md#getrequestbyid)
- [getRequestLimits](/interfaces/IssueAPI.md#getrequestlimits)
- [getRequestsByIds](/interfaces/IssueAPI.md#getrequestsbyids)
- [getVaultIssuableAmount](/interfaces/IssueAPI.md#getvaultissuableamount)
- [list](/interfaces/IssueAPI.md#list)
- [request](/interfaces/IssueAPI.md#request)
- [requestAdvanced](/interfaces/IssueAPI.md#requestadvanced)
- [setIssuePeriod](/interfaces/IssueAPI.md#setissueperiod)

## Methods

### <a id="cancel" name="cancel"></a> cancel

▸ **cancel**(`issueId`): `Promise`<`void`\>

Send an issue cancellation transaction. After the issue period has elapsed,
the issuance request can be cancelled. As a result, the griefing collateral
of the requester will be slashed and sent to the vault that had prepared to issue.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `issueId` | `string` | The ID returned by the issue request transaction |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/issue.ts:101](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L101)

___

### <a id="execute" name="execute"></a> execute

▸ **execute**(`requestId`, `btcTxId`): `Promise`<`void`\>

Send an issue execution transaction

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestId` | `string` | - |
| `btcTxId` | `string` | Bitcoin transaction ID |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/issue.ts:94](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L94)

___

### <a id="getfeerate" name="getfeerate"></a> getFeeRate

▸ **getFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The fee charged for issuing. For instance, "0.005" stands for 0.5%

#### Defined in

[src/parachain/issue.ts:133](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L133)

___

### <a id="getfeestopay" name="getfeestopay"></a> getFeesToPay

▸ **getFeesToPay**(`amount`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | The amount, in BTC, for which to compute the issue fees |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The fees, in BTC

#### Defined in

[src/parachain/issue.ts:138](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L138)

___

### <a id="getissueperiod" name="getissueperiod"></a> getIssuePeriod

▸ **getIssuePeriod**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The time difference in number of blocks between an issue request is created
and required completion time by a user. The issue period has an upper limit
to prevent griefing of vault collateral.

#### Defined in

[src/parachain/issue.ts:115](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L115)

___

### <a id="getrequestbyid" name="getrequestbyid"></a> getRequestById

▸ **getRequestById**(`issueId`): `Promise`<[`Issue`](/interfaces/Issue.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `issueId` | `string` \| `H256` | The ID of the issue request to fetch |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)\>

An issue request object

#### Defined in

[src/parachain/issue.ts:124](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L124)

___

### <a id="getrequestlimits" name="getrequestlimits"></a> getRequestLimits

▸ **getRequestLimits**(`vaults?`): `Promise`<`IssueLimits`\>

Gets the threshold for issuing with a single vault, and the maximum total
issue request size. Additionally passes the list of vaults for caching.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaults?` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> | (optional) A list of the vaults available to issue from. If not provided, will fetch from the parachain (incurring an extra request). |

#### Returns

`Promise`<`IssueLimits`\>

An object of type {singleVault, maxTotal, vaultsCache}

#### Defined in

[src/parachain/issue.ts:52](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L52)

___

### <a id="getrequestsbyids" name="getrequestsbyids"></a> getRequestsByIds

▸ **getRequestsByIds**(`issueIds`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueIds` | (`string` \| `H256`)[] |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

The issue request objects

#### Defined in

[src/parachain/issue.ts:129](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L129)

___

### <a id="getvaultissuableamount" name="getvaultissuableamount"></a> getVaultIssuableAmount

▸ **getVaultIssuableAmount**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault account ID |
| `collateralCurrency` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The amount of wrapped tokens issuable by this vault

#### Defined in

[src/parachain/issue.ts:146](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L146)

___

### <a id="list" name="list"></a> list

▸ **list**(): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array containing the issue requests

#### Defined in

[src/parachain/issue.ts:119](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L119)

___

### <a id="request" name="request"></a> request

▸ **request**(`amount`, `vaultAccountId?`, `collateralCurrencyIdLiteral?`, `atomic?`, `retries?`, `availableVaults?`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

Request issuing wrapped tokens (e.g. interBTC, kBTC).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | wrapped token amount to issue. |
| `vaultAccountId?` | `AccountId` | - |
| `collateralCurrencyIdLiteral?` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | (optional) Collateral currency for backing wrapped tokens |
| `atomic?` | `boolean` | (optional) Whether the issue request should be handled atomically or not. Only makes a difference if more than one vault is needed to fulfil it. Defaults to false. |
| `retries?` | `number` | (optional) Number of times to retry issuing, if some of the requests fail. Defaults to 0. |
| `availableVaults?` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> | (optional) A list of all vaults usable for issue. If not provided, will fetch from the parachain. |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array of type {issueId, issueRequest} if the requests succeeded. The function throws an error otherwise.

#### Defined in

[src/parachain/issue.ts:65](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L65)

___

### <a id="requestadvanced" name="requestadvanced"></a> requestAdvanced

▸ **requestAdvanced**(`amountsPerVault`, `atomic`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

Send a batch of aggregated issue transactions (to one or more vaults)

**`throws`** Rejects the promise if none of the requests succeeded (or if at least one failed, when atomic=true).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amountsPerVault` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> | A mapping of vaults to issue from, and wrapped token amounts to issue using each vault |
| `atomic` | `boolean` | Whether the issue request should be handled atomically or not. Only makes a difference if more than one vault is needed to fulfil it. |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array of `Issue` objects, if the requests succeeded.

#### Defined in

[src/parachain/issue.ts:82](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L82)

___

### <a id="setissueperiod" name="setissueperiod"></a> setIssuePeriod

▸ **setIssuePeriod**(`blocks`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blocks` | `number` | The time difference in number of blocks between an issue request is created and required completion time by a user. The issue period has an upper limit to prevent griefing of vault collateral. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/issue.ts:108](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/issue.ts#L108)
