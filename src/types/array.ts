import {SchemaType, withTypeSymbol, TypeOf} from './base'

export interface ArrayType<T extends SchemaType> extends SchemaType<TypeOf<T>[]> {
  type: 'array'
  items: T
}

export const array = <T extends SchemaType>(items: T): ArrayType<T> => withTypeSymbol({type: 'array', items})

export const isArrayType = <T extends SchemaType>(value: SchemaType<unknown>): value is ArrayType<T> =>
  value.type === 'array'
