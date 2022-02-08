[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / EscrowAPI

# Interface: EscrowAPI

## Implemented by

- [`DefaultEscrowAPI`](/classes/DefaultEscrowAPI.md)

## Table of contents

### Methods

- [createLock](/interfaces/EscrowAPI.md#createlock)
- [getMaxPeriod](/interfaces/EscrowAPI.md#getmaxperiod)
- [getSpan](/interfaces/EscrowAPI.md#getspan)
- [increaseAmount](/interfaces/EscrowAPI.md#increaseamount)
- [increaseUnlockHeight](/interfaces/EscrowAPI.md#increaseunlockheight)
- [totalVotingSupply](/interfaces/EscrowAPI.md#totalvotingsupply)
- [votingBalance](/interfaces/EscrowAPI.md#votingbalance)
- [withdraw](/interfaces/EscrowAPI.md#withdraw)
- [withdrawRewards](/interfaces/EscrowAPI.md#withdrawrewards)

## Methods

### <a id="createlock" name="createlock"></a> createLock

▸ **createLock**<`U`\>(`amount`, `unlockHeight`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> | Governance token amount to lock (e.g. KINT or INTR) |
| `unlockHeight` | `number` | Block number to lock until |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/escrow.ts:40](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L40)

___

### <a id="getmaxperiod" name="getmaxperiod"></a> getMaxPeriod

▸ **getMaxPeriod**(): `Promise`<`BN`\>

#### Returns

`Promise`<`BN`\>

The maximum time for locks.

#### Defined in

[src/parachain/escrow.ts:56](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L56)

___

### <a id="getspan" name="getspan"></a> getSpan

▸ **getSpan**(): `Promise`<`BN`\>

#### Returns

`Promise`<`BN`\>

All future times are rounded by this.

#### Defined in

[src/parachain/escrow.ts:51](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L51)

___

### <a id="increaseamount" name="increaseamount"></a> increaseAmount

▸ **increaseAmount**<`U`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> | Governance token amount to lock (e.g. KINT or INTR) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/escrow.ts:64](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L64)

___

### <a id="increaseunlockheight" name="increaseunlockheight"></a> increaseUnlockHeight

▸ **increaseUnlockHeight**(`unlockHeight`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `unlockHeight` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/escrow.ts:70](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L70)

___

### <a id="totalvotingsupply" name="totalvotingsupply"></a> totalVotingSupply

▸ **totalVotingSupply**(`blockNumber?`): `Promise`<`MonetaryAmount`<`Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

**`remarks`**
- Expect poor performance from this function as more blocks are appended to the parachain.
It is not recommended to call this directly, but rather to query through the indexer (currently `interbtc-index`).
- Logic is duplicated from Escrow pallet in the parachain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockNumber?` | `number` | The number of block to query state at |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

The voting balance

#### Defined in

[src/parachain/escrow.ts:33](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L33)

___

### <a id="votingbalance" name="votingbalance"></a> votingBalance

▸ **votingBalance**(`accountId`, `blockNumber?`): `Promise`<`MonetaryAmount`<`Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

**`remarks`** Logic is duplicated from Escrow pallet in the parachain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `AccountId` | Account whose voting balance to fetch |
| `blockNumber?` | `number` | The number of block to query state at |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>, { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  }\>\>

The voting balance

#### Defined in

[src/parachain/escrow.ts:21](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L21)

___

### <a id="withdraw" name="withdraw"></a> withdraw

▸ **withdraw**(): `Promise`<`void`\>

**`remarks`** Withdraws all locked governance currency

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/escrow.ts:47](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L47)

___

### <a id="withdrawrewards" name="withdrawrewards"></a> withdrawRewards

▸ **withdrawRewards**(): `Promise`<`void`\>

**`remarks`** Withdraws stake-to-vote rewards

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/escrow.ts:60](https://github.com/interlay/interbtc-api/blob/b81f698/src/parachain/escrow.ts#L60)
