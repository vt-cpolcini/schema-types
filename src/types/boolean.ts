import {SchemaType, withTypeSymbol} from './base'

export interface BooleanType extends SchemaType<boolean> {
  type: 'boolean'
}

export const boolean = (): BooleanType => withTypeSymbol({type: 'boolean'})

export const isBooleanType = (value: SchemaType<unknown>): value is BooleanType => value.type === 'boolean'
