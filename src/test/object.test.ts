import test from 'ava'
import * as T from '../..'

const objectType = T.object({an: T.string()})

test('Return no issues for object', (t) => {
  t.deepEqual(T.validate(objectType, {an: 'object'}), [])
})

test('Return issues for other types', (t) => {
  t.snapshot(T.validate(objectType, [123]))
  t.snapshot(T.validate(objectType, BigInt(1)))
  t.snapshot(T.validate(objectType, true))
  t.snapshot(T.validate(objectType, () => {}))
  t.snapshot(T.validate(objectType, null))
  t.snapshot(T.validate(objectType, 123))
  // t.snapshot(T.validate(objectType, {an: 'object'}))
  t.snapshot(T.validate(objectType, 'string'))
  t.snapshot(T.validate(objectType, undefined))
})
