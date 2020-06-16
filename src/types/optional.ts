import {SchemaType, TypeOf, withTypeSymbol} from './base'
import {isModifiedType, ModifiedType} from './modified'
import {isReadonlyType, ReadonlyType} from './readonly'
import {ReadonlyOptionalType} from './readonlyOptional'

export interface OptionalType<T extends SchemaType> extends ModifiedType<T, TypeOf<T> | undefined> {
  optional: true
}

type OptionalWrapped<T extends SchemaType> = T extends OptionalType<infer _>
  ? T
  : T extends ReadonlyType<infer U>
  ? ReadonlyOptionalType<U>
  : OptionalType<T>

export const optional = <T extends SchemaType>(item: T): OptionalWrapped<T> => {
  if (isOptionalType(item)) {
    return item as OptionalWrapped<T>
  }

  if (isReadonlyType(item)) {
    const wrapped: ReadonlyOptionalType<SchemaType> = {...item, optional: true}
    return wrapped as OptionalWrapped<T>
  }

  return withTypeSymbol({type: 'modified', optional: true, item}) as OptionalWrapped<T>
}

export const isOptionalType = <T extends SchemaType>(value: SchemaType<unknown>): value is OptionalType<T> =>
  isModifiedType(value) && value.optional === true
