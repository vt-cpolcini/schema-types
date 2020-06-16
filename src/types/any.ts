import {SchemaType, withTypeSymbol} from './base'

export interface AnyType extends SchemaType<any> {
  type: 'any'
}

export const any = (): AnyType => withTypeSymbol({type: 'any'})

export const isAnyType = (value: SchemaType<unknown>): value is AnyType => value.type === 'any'
