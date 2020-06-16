import {SchemaType, withTypeSymbol} from './base'

export interface StringOptions {
  maxLength?: number
  minLength?: number
  pattern?: string
}

export interface StringType extends SchemaType<string> {
  type: 'string'
  options: StringOptions
}

export const string = (options: StringOptions = {}): StringType => withTypeSymbol({type: 'string', options})

export const isStringType = (value: SchemaType<unknown>): value is StringType => value.type === 'string'
