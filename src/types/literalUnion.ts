import {SchemaType, withTypeSymbol} from './base'

type PrimitiveType = bigint | boolean | null | number | string | undefined

type InferLiteralType<U extends PrimitiveType = PrimitiveType> =
  | U
  | {[name: string]: InferLiteralType<U>}
  | []
  | [InferLiteralType<U>]
  | [InferLiteralType<U>, ...InferLiteralType<U>[]]

export interface LiteralUnionType<T extends any[]> extends SchemaType<T[number]> {
  type: 'literalUnion'
  values: T
}

export const literalUnion = <U extends PrimitiveType, T extends InferLiteralType<U>[]>(
  ...values: T
): LiteralUnionType<T> => withTypeSymbol({type: 'literalUnion', values} as const)

export const isLiteralUnionType = <T extends any[]>(value: SchemaType<unknown>): value is LiteralUnionType<T> =>
  value.type === 'literalUnion'
