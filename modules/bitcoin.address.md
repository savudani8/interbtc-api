[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / address

# Namespace: address

[bitcoin](/modules/bitcoin.md).address

## Table of contents

### Interfaces

- [Base58CheckResult](/interfaces/bitcoin.address.Base58CheckResult.md)
- [Bech32Result](/interfaces/bitcoin.address.Bech32Result.md)

### Functions

- [fromBase58Check](/modules/bitcoin.address.md#frombase58check)
- [fromBech32](/modules/bitcoin.address.md#frombech32)
- [fromOutputScript](/modules/bitcoin.address.md#fromoutputscript)
- [toBase58Check](/modules/bitcoin.address.md#tobase58check)
- [toBech32](/modules/bitcoin.address.md#tobech32)
- [toOutputScript](/modules/bitcoin.address.md#tooutputscript)

## Functions

### <a id="frombase58check" name="frombase58check"></a> fromBase58Check

▸ **fromBase58Check**(`address`): [`Base58CheckResult`](/interfaces/bitcoin.address.Base58CheckResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Base58CheckResult`](/interfaces/bitcoin.address.Base58CheckResult.md)

#### Defined in

node_modules/bitcoinjs-lib/types/address.d.ts:11

___

### <a id="frombech32" name="frombech32"></a> fromBech32

▸ **fromBech32**(`address`): [`Bech32Result`](/interfaces/bitcoin.address.Bech32Result.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`Bech32Result`](/interfaces/bitcoin.address.Bech32Result.md)

#### Defined in

node_modules/bitcoinjs-lib/types/address.d.ts:12

___

### <a id="fromoutputscript" name="fromoutputscript"></a> fromOutputScript

▸ **fromOutputScript**(`output`, `network?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | `Buffer` |
| `network?` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

`string`

#### Defined in

node_modules/bitcoinjs-lib/types/address.d.ts:15

___

### <a id="tobase58check" name="tobase58check"></a> toBase58Check

▸ **toBase58Check**(`hash`, `version`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Buffer` |
| `version` | `number` |

#### Returns

`string`

#### Defined in

node_modules/bitcoinjs-lib/types/address.d.ts:13

___

### <a id="tobech32" name="tobech32"></a> toBech32

▸ **toBech32**(`data`, `version`, `prefix`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` |
| `version` | `number` |
| `prefix` | `string` |

#### Returns

`string`

#### Defined in

node_modules/bitcoinjs-lib/types/address.d.ts:14

___

### <a id="tooutputscript" name="tooutputscript"></a> toOutputScript

▸ **toOutputScript**(`address`, `network?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `network?` | [`Network`](/interfaces/bitcoin.networks.Network.md) |

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/address.d.ts:16
