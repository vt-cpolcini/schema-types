# API

```typescript
import {T, TypeOf, is} from 'schema-types'

const customType = T.object({
  prop1: T.string(),
  prop2: T.number(),
})

type CustomType = TypeOf<typeof customType>

const custom: CustomType = {
  prop1: 'hello',
  prop2: 123,
}

if (is(customType, custom)) {
  // custom has the type customType
  console.log(custom.prop2)
}

const errorExample: CustomType = {
  prop1: 'hello',
  prop2: false, // ERROR
}
```

## New API

```typescript
import * as T from './types'

const test = T.object({
  /** prop docs go here */
  prop: T.union(T.boolean(), T.optional(T.string())),
  /** prop2 docs, nice */
  prop2: T.readonly(T.optional(T.readonly(T.boolean()))),

  prop3: T.record(T.optional(T.string())),

  prop4: T.function(T.string(), T.boolean(), T.number()),
})

export type Test = T.TypeOf<typeof test>

export const t: Test = {
  prop: true,
  prop2: true,
  prop3: {prop: undefined},
  prop4: () => 123,
}
```
