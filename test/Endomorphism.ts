import * as _ from '../src/Endomorphism.ts'
import * as U from './util.ts'

describe('Endomorphism', () => {
  it('getMonoid', () => {
    const M = _.getMonoid<number>()
    const inc = (n: number) => n + 1
    const f = M.concat(inc, U.double)
    U.deepStrictEqual(f(3), 8)
  })
})
