import {SchemaType, withTypeSymbol, TypeOf} from './base'

type TypeOfTuple<T extends SchemaType[]> = {
  [K in keyof T]: T[K] extends SchemaType ? TypeOf<T[K]> : never
}

export interface TupleType<T extends SchemaType[]> extends SchemaType<TypeOfTuple<T>> {
  type: 'tuple'
  items: T
}

export const tuple = <T extends SchemaType[]>(...items: T): TupleType<T> => withTypeSymbol({type: 'tuple', items})

export const isTupleType = <T extends SchemaType[]>(value: SchemaType<unknown>): value is TupleType<T> =>
  value.type === 'tuple'
