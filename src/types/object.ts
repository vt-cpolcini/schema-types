import {SchemaType, TypeOf, withTypeSymbol} from './base'
import {OptionalType} from './optional'
import {ReadonlyType} from './readonly'
import {ReadonlyOptionalType} from './readonlyOptional'

// type TypeFromSchema<T> = T extends {
//   type: 'object'
//   properties: infer Properties
//   required?: infer RequiredProperties
// }
//   ? RequiredProperties extends (keyof Properties)[]
//     ? Flatten<
//         {
//           [K in keyof Properties]+?: TypeOf<Properties[K]>
//         } &
//           {
//             [K in RequiredProperties[number]]: TypeOf<Properties[K]>
//           }
//       >
//     : {
//         [K in keyof Properties]+?: TypeOf<Properties[K]>
//       }
//   : T

// interface ObjectType_<T extends ObjectProperties, R extends (keyof T)[]> {
//   type: 'object'
//   properties: T
//   required?: R
// }

type Identity<T> = T
type Flatten<T extends object> = Identity<{[k in keyof T]: T[k]}>

export type ObjectProperties = {
  [key: string]: SchemaType
}

type ReadonlyProps<T extends ObjectProperties> = {
  [K in keyof T]: T[K] extends ReadonlyType<infer _> | ReadonlyOptionalType<infer _> ? K : never
}[keyof T]

type TypeFromObjectProperties<T extends ObjectProperties> = Flatten<
  {
    [K in keyof T]+?: TypeOf<T[K]>
  } &
    {
      +readonly [K in ReadonlyProps<T>]?: TypeOf<T[K]>
    } &
    {
      [K in RequiredProps<T>]: TypeOf<T[K]>
    }
>

type OptionalProps<T extends ObjectProperties> = {
  [K in keyof T]: T[K] extends OptionalType<infer _> | ReadonlyOptionalType<infer _> ? K : never
}[keyof T]

type RequiredProps<T extends ObjectProperties> = Exclude<keyof T, OptionalProps<T>>

export interface ObjectType<T extends ObjectProperties> extends SchemaType<TypeFromObjectProperties<T>> {
  type: 'object'
  properties: T
}

export const object = <T extends ObjectProperties>(properties: T): ObjectType<T> =>
  withTypeSymbol({type: 'object', properties})

export const isObjectType = <T extends ObjectProperties>(value: SchemaType): value is ObjectType<T> =>
  value.type === 'object'
