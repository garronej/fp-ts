import * as _ from '../../src/Ring.ts'
import * as N from '../../src/number.ts'

//
// tuple
//

// $ExpectType Ring<readonly [number, number, number]>
_.tuple(N.Field, N.Field, N.Field)

//
// getTupleRing
//

_.getTupleRing(N.Field, N.Field, N.Field) // $ExpectType Ring<[number, number, number]>
