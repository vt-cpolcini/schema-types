import {SchemaType, withTypeSymbol, TypeOf} from './base'

type TypeOfUnion<T extends SchemaType[]> = {
  [K in keyof T]: T[K] extends SchemaType ? TypeOf<T[K]> : never
}[number]

export interface UnionType<T extends SchemaType[]> extends SchemaType<TypeOfUnion<T>> {
  type: 'union'
  oneOf: T
}

export const union = <T extends SchemaType[]>(...items: T): UnionType<T> =>
  withTypeSymbol({type: 'union', oneOf: items})

export const isUnionType = <T extends SchemaType[]>(value: SchemaType<unknown>): value is UnionType<T> =>
  value.type === 'union'
