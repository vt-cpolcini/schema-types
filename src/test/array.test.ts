import test from 'ava'
import * as T from '../..'

const arrayType = T.array(T.number())

test('Return no issues for array', (t) => {
  t.deepEqual(T.validate(arrayType, [123]), [])
  t.deepEqual(T.validate(arrayType, []), [])
})

test('Return issues for other types', (t) => {
  // t.snapshot(T.validate(arrayType, [123]))
  t.snapshot(T.validate(arrayType, BigInt(1)))
  t.snapshot(T.validate(arrayType, true))
  t.snapshot(T.validate(arrayType, () => {}))
  t.snapshot(T.validate(arrayType, null))
  t.snapshot(T.validate(arrayType, 123))
  t.snapshot(T.validate(arrayType, {an: 'object'}))
  t.snapshot(T.validate(arrayType, 'string'))
  t.snapshot(T.validate(arrayType, undefined))
})

test('Return issues for incorrect wrapped type', (t) => {
  t.snapshot(T.validate(arrayType, ['string']))
})
