import test from 'ava'
import * as T from '../..'

const numberType = T.number()

test('Return no issues for number', (t) => {
  t.deepEqual(T.validate(numberType, 1), [])
})

test('Return issues for other types', (t) => {
  t.snapshot(T.validate(numberType, [123]))
  t.snapshot(T.validate(numberType, BigInt(1)))
  t.snapshot(T.validate(numberType, true))
  t.snapshot(T.validate(numberType, () => {}))
  t.snapshot(T.validate(numberType, null))
  // t.snapshot(T.validate(numberType, 123))
  t.snapshot(T.validate(numberType, {an: 'object'}))
  t.snapshot(T.validate(numberType, 'string'))
  t.snapshot(T.validate(numberType, undefined))
})
