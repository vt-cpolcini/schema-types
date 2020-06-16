import {SchemaType, withTypeSymbol} from './base'

export interface UndefinedType extends SchemaType<undefined> {
  type: 'undefined'
}

export const undefined = (): UndefinedType => withTypeSymbol({type: 'undefined'})

export const isUndefinedType = (value: SchemaType<unknown>): value is UndefinedType => value.type === 'undefined'
