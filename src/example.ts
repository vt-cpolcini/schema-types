import * as T from './types'

const test = T.object({
  /** prop docs go here */
  prop: T.literal([true, 'string']),
  /** prop2 docs, nice */
  prop2: T.readonly(T.optional(T.readonly(T.boolean()))),

  prop3: T.record(T.optional(T.string())),
})

export type Test = T.TypeOf<typeof test>

export const t: Test = {
  prop: [true, 'string'],
  prop2: true,
  prop3: {prop: undefined},
}
