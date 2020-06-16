import {SchemaType, withTypeSymbol, TypeOf} from './base'

type Tail<T extends any[]> = ((...t: T) => void) extends (h: any, ...r: infer R) => void ? R : never

type Last<T extends any[]> = T[Exclude<keyof T, keyof Tail<T>>]

type Prepend<Tuple extends any[], Addend> = ((_: Addend, ..._1: Tuple) => any) extends (..._: infer Result) => any
  ? Result
  : never

type Reverse<Tuple extends any[], Prefix extends any[] = []> = {
  0: Prefix
  1: ((..._: Tuple) => any) extends (_: infer First, ..._1: infer Next) => any
    ? Reverse<Next, Prepend<Prefix, First>>
    : never
}[Tuple extends [any, ...any[]] ? 1 : 0]

type TypeOfTuple<T extends SchemaType[]> = {
  [K in keyof T]: TypeOf<T[K]>
}

export interface FunctionType<Args extends SchemaType[]>
  extends SchemaType<(...args: Reverse<Tail<Reverse<TypeOfTuple<Args>>>>) => TypeOf<Last<Args>>> {
  type: 'function'
  args: Args
}

export const functionType = <Args extends SchemaType[]>(...args: Args): FunctionType<Args> =>
  withTypeSymbol({type: 'function', args})
export {functionType as function}

export const isFunctionType = <Args extends SchemaType[]>(value: SchemaType<unknown>): value is FunctionType<Args> =>
  value.type === 'function'
