import * as U from './util.ts'
import { getMinMaxBoundedDistributiveLattice } from '../src/BoundedDistributiveLattice.ts'
import * as N from '../src/number.ts'

describe('BoundedDistributiveLattice', () => {
  it('getMinMaxBoundedDistributiveLattice', () => {
    const BDL = getMinMaxBoundedDistributiveLattice(N.Ord)(0, 1)
    U.deepStrictEqual(BDL.join(0.2, 0.4), 0.4)
    U.deepStrictEqual(BDL.meet(0.2, 0.4), 0.2)
    U.deepStrictEqual(BDL.one, 1)
    U.deepStrictEqual(BDL.zero, 0)
  })
})
