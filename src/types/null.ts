import {SchemaType, withTypeSymbol} from './base'

export interface NullType extends SchemaType<null> {
  type: 'null'
}

const nullType = (): NullType => withTypeSymbol({type: 'null'})
export {nullType as null}

export const isNullType = (value: SchemaType<unknown>): value is NullType => value.type === 'null'
