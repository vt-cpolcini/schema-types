import {SchemaType, withTypeSymbol} from './base'

type PrimitiveType = bigint | boolean | null | number | string | undefined

type InferLiteralType<U extends PrimitiveType = PrimitiveType> =
  | U
  | {[name: string]: InferLiteralType<U>}
  | []
  | [InferLiteralType<U>]
  | [InferLiteralType<U>, ...InferLiteralType<U>[]]

export interface LiteralType<T> extends SchemaType<T> {
  type: 'literal'
  value: T
}

export const literal = <U extends PrimitiveType, T extends InferLiteralType<U>>(value: T): LiteralType<T> =>
  withTypeSymbol({type: 'literal', value} as const)

export const isLiteralType = <T>(value: SchemaType<unknown>): value is LiteralType<T> => value.type === 'literal'
