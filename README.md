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

| TypeScript          | schema-types       |
| ------------------- | ------------------ |
| `any`               | `T.any()`          |
| `Array`             | `T.array()`        |
| `bigint`            | `T.bigint()`       |
| `boolean`           | `T.boolean()`      |
| `Function`          | `T.function()`     |
| `null`              | `T.null()`         |
| `number`            | `T.number()`       |
| `object`            | `T.object()`       |
| `Record<string, T>` | `T.map()`          |
| `string`            | `T.string()`       |
| `undefined`         | `T.undefined()`    |
| `unknown`           | `T.unknown()`      |
| `void`              | `T.void()`         |
| Literals            | `T.literal()`      |
| Literal Union       | `T.literalUnion()` |
| Tuple               | `T.tuple()`        |
| Union               | `T.union()`        |
| Intersection        | `T.intersection()` |

Implemented modifiers:

| TypeScript | schema-types   |
| ---------- | -------------- |
| Optional   | `T.optional()` |
| Read-only  | `T.readonly()` |

Not implemented:

| TypeScript | schema-types    |
| ---------- | --------------- |
| Enums      | Not Implemented |
| Generics   | Not Implemented |

## Helpers

### `T.TypeOf<T>`

Takes a type schema and infers the TypeScript type for that schema.

### `T.assert(schema, value)`

Checks to see if the value matches the supplied schema, and if not, throws an error.

### `T.is(schema, value)`

Returns a boolean indicating if the value matches the supplied schema.

### `T.validate(schema, value)`

Returns an array of validation issues, if any.

### `T.code(schema)`

Returns a string containing the TypeScript code representation of the schema, useful for code generation.

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
