[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultEscrowAPI

# Class: DefaultEscrowAPI

## Implements

- [`EscrowAPI`](/interfaces/EscrowAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultEscrowAPI.md#constructor)

### Methods

- [createLock](/classes/DefaultEscrowAPI.md#createlock)
- [getMaxPeriod](/classes/DefaultEscrowAPI.md#getmaxperiod)
- [getSlopeChange](/classes/DefaultEscrowAPI.md#getslopechange)
- [getSpan](/classes/DefaultEscrowAPI.md#getspan)
- [increaseAmount](/classes/DefaultEscrowAPI.md#increaseamount)
- [increaseUnlockHeight](/classes/DefaultEscrowAPI.md#increaseunlockheight)
- [rawBalanceAt](/classes/DefaultEscrowAPI.md#rawbalanceat)
- [rawSupplyAt](/classes/DefaultEscrowAPI.md#rawsupplyat)
- [roundHeight](/classes/DefaultEscrowAPI.md#roundheight)
- [saturatingSub](/classes/DefaultEscrowAPI.md#saturatingsub)
- [totalVotingSupply](/classes/DefaultEscrowAPI.md#totalvotingsupply)
- [votingBalance](/classes/DefaultEscrowAPI.md#votingbalance)
- [withdraw](/classes/DefaultEscrowAPI.md#withdraw)
- [withdrawRewards](/classes/DefaultEscrowAPI.md#withdrawrewards)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultEscrowAPI**(`api`, `governanceCurrency`, `systemAPI`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `governanceCurrency` | `Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  }\> |
| `systemAPI` | [`SystemAPI`](/interfaces/SystemAPI.md) |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/escrow.ts:77](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L77)

## Methods

### <a id="createlock" name="createlock"></a> createLock

▸ **createLock**<`U`\>(`amount`, `unlockHeight`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> |
| `unlockHeight` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[createLock](/interfaces/EscrowAPI.md#createlock)

#### Defined in

[src/parachain/escrow.ts:84](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L84)

___

### <a id="getmaxperiod" name="getmaxperiod"></a> getMaxPeriod

▸ **getMaxPeriod**(): `Promise`<`BN`\>

#### Returns

`Promise`<`BN`\>

The maximum time for locks.

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[getMaxPeriod](/interfaces/EscrowAPI.md#getmaxperiod)

#### Defined in

[src/parachain/escrow.ts:203](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L203)

___

### <a id="getslopechange" name="getslopechange"></a> getSlopeChange

▸ `Private` **getSlopeChange**(`slopeChanges`, `key`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slopeChanges` | `Map`<`BN`, `BN`\> |
| `key` | `BN` |

#### Returns

`BN`

#### Defined in

[src/parachain/escrow.ts:211](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L211)

___

### <a id="getspan" name="getspan"></a> getSpan

▸ **getSpan**(): `Promise`<`BN`\>

#### Returns

`Promise`<`BN`\>

All future times are rounded by this.

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[getSpan](/interfaces/EscrowAPI.md#getspan)

#### Defined in

[src/parachain/escrow.ts:199](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L199)

___

### <a id="increaseamount" name="increaseamount"></a> increaseAmount

▸ **increaseAmount**<`U`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[increaseAmount](/interfaces/EscrowAPI.md#increaseamount)

#### Defined in

[src/parachain/escrow.ts:102](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L102)

___

### <a id="increaseunlockheight" name="increaseunlockheight"></a> increaseUnlockHeight

▸ **increaseUnlockHeight**(`unlockHeight`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `unlockHeight` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[increaseUnlockHeight](/interfaces/EscrowAPI.md#increaseunlockheight)

#### Defined in

[src/parachain/escrow.ts:107](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L107)

___

### <a id="rawbalanceat" name="rawbalanceat"></a> rawBalanceAt

▸ `Private` **rawBalanceAt**(`escrowPoint`, `height`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `escrowPoint` | [`RWEscrowPoint`](/modules.md#rwescrowpoint) |
| `height` | `number` |

#### Returns

`BN`

#### Defined in

[src/parachain/escrow.ts:128](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L128)

___

### <a id="rawsupplyat" name="rawsupplyat"></a> rawSupplyAt

▸ `Private` **rawSupplyAt**(`escrowPoint`, `height`, `escrowSpan`, `slopeChanges`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `escrowPoint` | [`RWEscrowPoint`](/modules.md#rwescrowpoint) |
| `height` | `BN` |
| `escrowSpan` | `BN` |
| `slopeChanges` | `Map`<`BN`, `BN`\> |

#### Returns

`BN`

#### Defined in

[src/parachain/escrow.ts:164](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L164)

___

### <a id="roundheight" name="roundheight"></a> roundHeight

▸ `Private` **roundHeight**(`height`, `span`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `BN` |
| `span` | `BN` |

#### Returns

`BN`

#### Defined in

[src/parachain/escrow.ts:207](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L207)

___

### <a id="saturatingsub" name="saturatingsub"></a> saturatingSub

▸ `Private` **saturatingSub**(`x`, `y`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `BN` |
| `y` | `BN` |

#### Returns

`BN`

#### Defined in

[src/parachain/escrow.ts:219](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L219)

___

### <a id="totalvotingsupply" name="totalvotingsupply"></a> totalVotingSupply

▸ **totalVotingSupply**(`blockNumber?`): `Promise`<`MonetaryAmount`<`Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

**`remarks`**
- Expect poor performance from this function as more blocks are appended to the parachain.
It is not recommended to call this directly, but rather to query through the indexer (currently `interbtc-index`).
- Logic is duplicated from Escrow pallet in the parachain

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

The voting balance

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[totalVotingSupply](/interfaces/EscrowAPI.md#totalvotingsupply)

#### Defined in

[src/parachain/escrow.ts:143](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L143)

___

### <a id="votingbalance" name="votingbalance"></a> votingBalance

▸ **votingBalance**(`accountId`, `blockNumber?`): `Promise`<`MonetaryAmount`<`Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

**`remarks`** Logic is duplicated from Escrow pallet in the parachain

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `AccountId` |
| `blockNumber?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

The voting balance

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[votingBalance](/interfaces/EscrowAPI.md#votingbalance)

#### Defined in

[src/parachain/escrow.ts:112](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L112)

___

### <a id="withdraw" name="withdraw"></a> withdraw

▸ **withdraw**(): `Promise`<`void`\>

**`remarks`** Withdraws all locked governance currency

#### Returns

`Promise`<`void`\>

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[withdraw](/interfaces/EscrowAPI.md#withdraw)

#### Defined in

[src/parachain/escrow.ts:92](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L92)

___

### <a id="withdrawrewards" name="withdrawrewards"></a> withdrawRewards

▸ **withdrawRewards**(): `Promise`<`void`\>

**`remarks`** Withdraws stake-to-vote rewards

#### Returns

`Promise`<`void`\>

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[withdrawRewards](/interfaces/EscrowAPI.md#withdrawrewards)

#### Defined in

[src/parachain/escrow.ts:97](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L97)
