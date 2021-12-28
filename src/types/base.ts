const TypeSymbol = Symbol('SchemaType.type')

export interface SchemaType<T = unknown> {
  type: string
  [TypeSymbol]: T
  required?: boolean
  optional?: boolean
  readonly?: boolean
  computed?: boolean
  isInnerBlock?: boolean
  minItems?: number
  maxItems?: number
}

export function withTypeSymbol<T, Value = unknown>(value: Value): Value & {[TypeSymbol]: T} {
  return value as Value & {[TypeSymbol]: T}
}

export type TypeOf<T> = T extends SchemaType<infer U> ? U : never
