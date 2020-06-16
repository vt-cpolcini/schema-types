import {SchemaType, withTypeSymbol} from './base'

interface NumberOptions {
  multipleOf?: number
  maximum?: number
  exclusiveMaximum?: number
  minimum?: number
  exclusiveMinimum?: number
}

export interface NumberType extends SchemaType<number> {
  type: 'number'
  options: NumberOptions
}

export const number = (options: NumberOptions = {}): NumberType => withTypeSymbol({type: 'number', options})

export const isNumberType = (value: SchemaType): value is NumberType => value.type === 'number'
