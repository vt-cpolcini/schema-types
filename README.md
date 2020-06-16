<p align="center"><img src="https://schema-types.dev/logo.png" alt="schema-types logo" width="128" /></p>

# schema-types

**Status:** Alpha

This library provides runtime and compile-type type schema definition and validation. It is roughly usable, but still evolving.

### Goals

- As close to JSON Schema as possible (represent the type schema as pure data)
- High level of developer ergonomics (easy to define types, validate)
- Full modern TypeScript support (only target latest TypeScript, use all advanced features)

## Type Compatibility

Implemented types:

| TypeScript          | schema-types        |
| ------------------- | ------------------- |
| `any`               | `T.any()`           |
| `Array`             | `T.array()`         |
| `bigint`            | `T.bigint()`        |
| `boolean`           | `T.boolean()`       |
| `Function`          | `T.function()`      |
| `null`              | `T.null()`          |
| `number`            | `T.number()`        |
| `object`            | `T.object()`        |
| `Record<string, T>` | `T.map()`           |
| `string`            | `T.string()`        |
| `Tuple`             | `T.tuple()`         |
| `undefined`         | `T.undefined()`     |
| `unknown`           | `T.unknown()`       |
| `void`              | `T.void()`          |
| Literals            | `T.literal()`       |
| Union               | `T.union()`         |
| Literal Union       | `T.literalUnion()`  |
| Intersection        | `T.intersection()`` |

Implemented modifiers:

| TypeScript | schema-types   |
| ---------- | -------------- |
| Optional   | `T.optional()` |
| Read-only  | `T.readonly()` |

Not yet implemented:

| TypeScript | schema-types    |
| ---------- | --------------- |
| Enums      | Not Implemented |
| Generics   | Not Implemented |

## Helpers

### `TypeOf`

### `is`

### `validate`

### `validateOrThrow`

### `asCode`

## Credits

This library was inspired by several other TypeScript runtime type libraries:

- [typebox](https://github.com/sinclairzx81/typebox)
- [io-ts](https://github.com/gcanti/io-ts)
- [zod](https://github.com/vriad/zod)
- [runtypes](https://github.com/pelotom/runtypes)
- [@punchcard/shape](https://github.com/punchcard/punchcard/tree/master/packages/%40punchcard/shape)
- [ajv](https://github.com/ajv-validator/ajv)

## License

MIT license, see `LICENSE`
