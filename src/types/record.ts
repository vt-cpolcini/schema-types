import {SchemaType, TypeOf, withTypeSymbol} from './base'

export interface RecordType<T extends SchemaType> extends SchemaType<Record<string, TypeOf<T>>> {
  type: 'record'
  additionalProperties: T
}

export const record = <T extends SchemaType>(type: T): RecordType<T> =>
  withTypeSymbol({type: 'record', additionalProperties: type})

export const isRecordType = (value: SchemaType): value is RecordType<SchemaType> => value.type === 'record'
