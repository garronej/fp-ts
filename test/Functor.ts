import * as U from './util.ts'
import * as RA from '../src/ReadonlyArray.ts'
import { getFunctorComposition } from '../src/Functor.ts'
import * as option from '../src/Option.ts'

describe('Functor', () => {
  it('getFunctorComposition', () => {
    const arrayOption = getFunctorComposition(RA.Functor, option.Functor)
    U.deepStrictEqual(arrayOption.map([option.some(1)], U.double), [option.some(2)])
  })
})
