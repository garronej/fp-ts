import * as _ from '../../src/Ord.ts'
import * as S from '../../src/string.ts'
import * as N from '../../src/number.ts'
import * as B from '../../src/boolean.ts'

//
// tuple
//

// $ExpectType Ord<readonly [string, number, boolean]>
_.tuple(S.Ord, N.Ord, B.Ord)

//
// getTupleOrd
//

_.getTupleOrd(_.ordString, _.ordNumber, _.ordBoolean) // $ExpectType Ord<[string, number, boolean]>
