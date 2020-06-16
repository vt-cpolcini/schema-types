import {SchemaType, withTypeSymbol} from './base'

export interface VoidType extends SchemaType<void> {
  type: 'void'
}

const voidType = (): VoidType => withTypeSymbol({type: 'void'})
export {voidType as void}

export const isVoidType = (value: SchemaType<void>): value is VoidType => value.type === 'void'
