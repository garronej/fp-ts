import * as U from './util.ts'
import * as E from '../src/Either.ts'
import { getEitherM } from '../src/EitherT.ts'
import * as I from '../src/IO.ts'

describe('EitherT', () => {
  const T = getEitherM(I.Monad)

  it('fold', () => {
    const onLeft = (s: string) => I.of(`left(${s})`)
    const onRight = (n: number) => I.of(`right(${n})`)
    U.deepStrictEqual(T.fold(I.of(E.right(1)), onLeft, onRight)(), 'right(1)')
    U.deepStrictEqual(T.fold(I.of(E.left('bb')), onLeft, onRight)(), 'left(bb)')
  })

  it('getOrElse', () => {
    const onLeft = (s: string) => I.of(`left(${s})`)
    U.deepStrictEqual(T.getOrElse(I.of(E.right('a')), onLeft)(), 'a')
    U.deepStrictEqual(T.getOrElse(I.of(E.left('bb')), onLeft)(), 'left(bb)')
  })
})
