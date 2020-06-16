import {SchemaType, withTypeSymbol} from './base'

export interface UnknownType extends SchemaType<unknown> {
  type: 'unknown'
}

export const unknown = (): UnknownType => withTypeSymbol({type: 'unknown'})

export const isUnknownType = (value: SchemaType<unknown>): value is UnknownType => value.type === 'unknown'
