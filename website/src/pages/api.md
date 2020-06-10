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
