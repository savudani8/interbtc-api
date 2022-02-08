[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / ChainBalance

# Class: ChainBalance<U\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`CurrencyUnit`](/modules.md#currencyunit) |

## Table of contents

### Constructors

- [constructor](/classes/ChainBalance.md#constructor)

### Properties

- [currency](/classes/ChainBalance.md#currency)
- [free](/classes/ChainBalance.md#free)
- [reserved](/classes/ChainBalance.md#reserved)
- [transferable](/classes/ChainBalance.md#transferable)

### Methods

- [toString](/classes/ChainBalance.md#tostring)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ChainBalance**<`U`\>(`currency`, `free?`, `transferable?`, `reserved?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `INTR`: ``10`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`U`\> |
| `free?` | `BigSource` |
| `transferable?` | `BigSource` |
| `reserved?` | `BigSource` |

#### Defined in

[src/types/currency.ts:160](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L160)

## Properties

### <a id="currency" name="currency"></a> currency

• **currency**: `Currency`<`U`\>

#### Defined in

[src/types/currency.ts:158](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L158)

___

### <a id="free" name="free"></a> free

• **free**: `MonetaryAmount`<`Currency`<`U`\>, `U`\>

#### Defined in

[src/types/currency.ts:155](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L155)

___

### <a id="reserved" name="reserved"></a> reserved

• **reserved**: `MonetaryAmount`<`Currency`<`U`\>, `U`\>

#### Defined in

[src/types/currency.ts:157](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L157)

___

### <a id="transferable" name="transferable"></a> transferable

• **transferable**: `MonetaryAmount`<`Currency`<`U`\>, `U`\>

#### Defined in

[src/types/currency.ts:156](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L156)

## Methods

### <a id="tostring" name="tostring"></a> toString

▸ **toString**(`base?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base?` | `U`[keyof `U`] |

#### Returns

`string`

#### Defined in

[src/types/currency.ts:176](https://github.com/interlay/interbtc-api/blob/b81f698/src/types/currency.ts#L176)
