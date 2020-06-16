import {SchemaType, withTypeSymbol} from './base'

export interface BigintType extends SchemaType<bigint> {
  type: 'bigint'
}

export const bigint = (): BigintType => withTypeSymbol({type: 'bigint'})

export const isBigintType = (value: SchemaType<unknown>): value is BigintType => value.type === 'bigint'
