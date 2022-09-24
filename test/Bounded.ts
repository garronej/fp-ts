import * as _ from '../src/Bounded.ts'
import * as N from '../src/number.ts'
import * as U from './util.ts'

describe('Bounded', () => {
  it('clamp', () => {
    const B: _.Bounded<number> = {
      ...N.Ord,
      top: 10,
      bottom: 0
    }
    const clamp = _.clamp(B)
    U.deepStrictEqual(clamp(5), 5)
    U.deepStrictEqual(clamp(-1), 0)
    U.deepStrictEqual(clamp(11), 10)
  })

  it('reverse', () => {
    const B: _.Bounded<number> = _.reverse({
      ...N.Ord,
      top: 10,
      bottom: 0
    })
    U.deepStrictEqual(B.top, 0)
    U.deepStrictEqual(B.bottom, 10)
  })
})
