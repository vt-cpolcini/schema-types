import {pathToString, ValidationIssue} from '../helpers/validate'
import {SchemaType, withTypeSymbol} from './base'
import {equalsLiteral} from './literal'

type PrimitiveType = bigint | boolean | null | number | string | undefined

type InferLiteralType<U extends PrimitiveType = PrimitiveType> =
  | U
  | {[name: string]: InferLiteralType<U>}
  | []
  | [InferLiteralType<U>]
  | [InferLiteralType<U>, ...InferLiteralType<U>[]]

export interface LiteralUnionType<T extends any[]> extends SchemaType<T[number]> {
  type: 'literalUnion'
  values: T
}

export const literalUnion = <U extends PrimitiveType, T extends InferLiteralType<U>[]>(
  ...values: T
): LiteralUnionType<T> => withTypeSymbol({type: 'literalUnion', values} as const)

export const isLiteralUnionType = <T extends any[]>(value: SchemaType<unknown>): value is LiteralUnionType<T> =>
  value.type === 'literalUnion'

export const validate = <T extends any[]>(
  schema: LiteralUnionType<T>,
  value: unknown,
  path: string[],
): ValidationIssue[] => {
  const candidateIssues: ValidationIssue[][] = []

  for (const candidate of schema.values) {
    const issues = equalsLiteral(candidate, value, path)
    if (issues.length === 0) {
      return []
    }
    candidateIssues.push(issues)
  }

  return [
    {
      type: 'NO_UNION_TYPE_MATCH',
      message: `Value did not match any union type candidates`,
      path: pathToString(path),
      candidateIssues,
    },
  ]
}
