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

| TypeScript          | schema-types    |
| ------------------- | --------------- |
| `boolean`           | `T.boolean()`   |
| `number`            | `T.number()`    |
| `string`            | `T.string()`    |
| `Array`             | `T.array()`     |
| `Tuple`             | `T.tuple()`     |
| `null`              | `T.null()`      |
| `undefined`         | `T.undefined()` |
| `object`            | `T.object()`    |
| `Record<string, T>` | `T.map()`       |

Implemented modifiers:

| TypeScript | schema-types   |
| ---------- | -------------- |
| Optional   | `T.optional()` |
| Read-only  | `T.readonly()` |

Not yet implemented:

| TypeScript   | schema-types    |
| ------------ | --------------- |
| `any`        | Not Implemented |
| `unknown`    | Not Implemented |
| `void`       | Not Implemented |
| Enums        | Not Implemented |
| Function     | Not Implemented |
| Literals     | Not Implemented |
| Union        | Not Implemented |
| Intersection | Not Implemented |
| Generics     | Not Implemented |

## Helpers

### `TypeOf`

### `is`

### `validate`

### `validateOrThrow`

### `asCode`
