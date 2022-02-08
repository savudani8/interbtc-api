[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / InterbtcPrimitivesCurrencyId

# Interface: InterbtcPrimitivesCurrencyId

**`name`** InterbtcPrimitivesCurrencyId

## Hierarchy

- `Enum`

  ↳ **`InterbtcPrimitivesCurrencyId`**

## Table of contents

### Properties

- [#private](/interfaces/InterbtcPrimitivesCurrencyId.md##private)
- [asToken](/interfaces/InterbtcPrimitivesCurrencyId.md#astoken)
- [createdAtHash](/interfaces/InterbtcPrimitivesCurrencyId.md#createdathash)
- [initialU8aLength](/interfaces/InterbtcPrimitivesCurrencyId.md#initialu8alength)
- [isToken](/interfaces/InterbtcPrimitivesCurrencyId.md#istoken)
- [registry](/interfaces/InterbtcPrimitivesCurrencyId.md#registry)

### Accessors

- [defIndexes](/interfaces/InterbtcPrimitivesCurrencyId.md#defindexes)
- [defKeys](/interfaces/InterbtcPrimitivesCurrencyId.md#defkeys)
- [encodedLength](/interfaces/InterbtcPrimitivesCurrencyId.md#encodedlength)
- [hash](/interfaces/InterbtcPrimitivesCurrencyId.md#hash)
- [index](/interfaces/InterbtcPrimitivesCurrencyId.md#index)
- [isBasic](/interfaces/InterbtcPrimitivesCurrencyId.md#isbasic)
- [isEmpty](/interfaces/InterbtcPrimitivesCurrencyId.md#isempty)
- [isNone](/interfaces/InterbtcPrimitivesCurrencyId.md#isnone)
- [isNull](/interfaces/InterbtcPrimitivesCurrencyId.md#isnull)
- [type](/interfaces/InterbtcPrimitivesCurrencyId.md#type)
- [value](/interfaces/InterbtcPrimitivesCurrencyId.md#value)

### Methods

- [\_toRawStruct](/interfaces/InterbtcPrimitivesCurrencyId.md#_torawstruct)
- [eq](/interfaces/InterbtcPrimitivesCurrencyId.md#eq)
- [toHex](/interfaces/InterbtcPrimitivesCurrencyId.md#tohex)
- [toHuman](/interfaces/InterbtcPrimitivesCurrencyId.md#tohuman)
- [toJSON](/interfaces/InterbtcPrimitivesCurrencyId.md#tojson)
- [toNumber](/interfaces/InterbtcPrimitivesCurrencyId.md#tonumber)
- [toRawType](/interfaces/InterbtcPrimitivesCurrencyId.md#torawtype)
- [toString](/interfaces/InterbtcPrimitivesCurrencyId.md#tostring)
- [toU8a](/interfaces/InterbtcPrimitivesCurrencyId.md#tou8a)

## Properties

### <a id="#private" name="#private"></a> #private

• `Private` **#private**: `any`

#### Inherited from

Enum.#private

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:14

___

### <a id="astoken" name="astoken"></a> asToken

• `Readonly` **asToken**: [`InterbtcPrimitivesTokenSymbol`](/interfaces/InterbtcPrimitivesTokenSymbol.md)

#### Defined in

src/interfaces/default/types.ts:31

___

### <a id="createdathash" name="createdathash"></a> createdAtHash

• `Optional` **createdAtHash**: `Hash`

#### Inherited from

Enum.createdAtHash

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:16

___

### <a id="initialu8alength" name="initialu8alength"></a> initialU8aLength

• `Optional` `Readonly` **initialU8aLength**: `number`

#### Inherited from

Enum.initialU8aLength

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:17

___

### <a id="istoken" name="istoken"></a> isToken

• `Readonly` **isToken**: `boolean`

#### Defined in

src/interfaces/default/types.ts:30

___

### <a id="registry" name="registry"></a> registry

• `Readonly` **registry**: `Registry`

#### Inherited from

Enum.registry

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:15

## Accessors

### <a id="defindexes" name="defindexes"></a> defIndexes

• `get` **defIndexes**(): `number`[]

**`description`** The available keys for this enum

#### Returns

`number`[]

#### Inherited from

Enum.defIndexes

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:52

___

### <a id="defkeys" name="defkeys"></a> defKeys

• `get` **defKeys**(): `string`[]

**`description`** The available keys for this enum

#### Returns

`string`[]

#### Inherited from

Enum.defKeys

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:56

___

### <a id="encodedlength" name="encodedlength"></a> encodedLength

• `get` **encodedLength**(): `number`

**`description`** The length of the value when encoded as a Uint8Array

#### Returns

`number`

#### Inherited from

Enum.encodedLength

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:23

___

### <a id="hash" name="hash"></a> hash

• `get` **hash**(): `CodecHash`

**`description`** returns a hash of the contents

#### Returns

`CodecHash`

#### Inherited from

Enum.hash

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:27

___

### <a id="index" name="index"></a> index

• `get` **index**(): `number`

**`description`** The index of the enum value

#### Returns

`number`

#### Inherited from

Enum.index

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:31

___

### <a id="isbasic" name="isbasic"></a> isBasic

• `get` **isBasic**(): `boolean`

**`description`** true if this is a basic enum (no values)

#### Returns

`boolean`

#### Inherited from

Enum.isBasic

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:35

___

### <a id="isempty" name="isempty"></a> isEmpty

• `get` **isEmpty**(): `boolean`

**`description`** Checks if the value is an empty value

#### Returns

`boolean`

#### Inherited from

Enum.isEmpty

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:39

___

### <a id="isnone" name="isnone"></a> isNone

• `get` **isNone**(): `boolean`

**`description`** Checks if the Enum points to a [[Null]] type

#### Returns

`boolean`

#### Inherited from

Enum.isNone

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:43

___

### <a id="isnull" name="isnull"></a> isNull

• `get` **isNull**(): `boolean`

**`description`** Checks if the Enum points to a [[Null]] type

**`deprecated`** use isNone

#### Returns

`boolean`

#### Inherited from

Enum.isNull

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:48

___

### <a id="type" name="type"></a> type

• `get` **type**(): `string`

**`description`** The name of the type this enum value represents

#### Returns

`string`

#### Inherited from

Enum.type

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:60

___

### <a id="value" name="value"></a> value

• `get` **value**(): `Codec`

**`description`** The value of the enum

#### Returns

`Codec`

#### Inherited from

Enum.value

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:64

## Methods

### <a id="_torawstruct" name="_torawstruct"></a> \_toRawStruct

▸ `Protected` **_toRawStruct**(): `string`[] \| `Record`<`string`, `string` \| `number`\>

**`description`** Returns a raw struct representation of the enum types

#### Returns

`string`[] \| `Record`<`string`, `string` \| `number`\>

#### Inherited from

Enum.\_toRawStruct

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:88

___

### <a id="eq" name="eq"></a> eq

▸ **eq**(`other?`): `boolean`

**`description`** Compares the value of the input to see if there is a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `other?` | `unknown` |

#### Returns

`boolean`

#### Inherited from

Enum.eq

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:68

___

### <a id="tohex" name="tohex"></a> toHex

▸ **toHex**(): \`0x${string}\`

**`description`** Returns a hex string representation of the value

#### Returns

\`0x${string}\`

#### Inherited from

Enum.toHex

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:72

___

### <a id="tohuman" name="tohuman"></a> toHuman

▸ **toHuman**(`isExtended?`): `AnyJson`

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters

| Name | Type |
| :------ | :------ |
| `isExtended?` | `boolean` |

#### Returns

`AnyJson`

#### Inherited from

Enum.toHuman

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:76

___

### <a id="tojson" name="tojson"></a> toJSON

▸ **toJSON**(): `AnyJson`

**`description`** Converts the Object to JSON, typically used for RPC transfers

#### Returns

`AnyJson`

#### Inherited from

Enum.toJSON

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:80

___

### <a id="tonumber" name="tonumber"></a> toNumber

▸ **toNumber**(): `number`

**`description`** Returns the number representation for the value

#### Returns

`number`

#### Inherited from

Enum.toNumber

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:84

___

### <a id="torawtype" name="torawtype"></a> toRawType

▸ **toRawType**(): `string`

**`description`** Returns the base runtime type name for this instance

#### Returns

`string`

#### Inherited from

Enum.toRawType

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:92

___

### <a id="tostring" name="tostring"></a> toString

▸ **toString**(): `string`

**`description`** Returns the string representation of the value

#### Returns

`string`

#### Inherited from

Enum.toString

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:96

___

### <a id="tou8a" name="tou8a"></a> toU8a

▸ **toU8a**(`isBare?`): `Uint8Array`

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isBare?` | `boolean` | true when the value has none of the type-specific prefixes (internal) |

#### Returns

`Uint8Array`

#### Inherited from

Enum.toU8a

#### Defined in

node_modules/@polkadot/types/codec/Enum.d.ts:101
