import * as _ from '../../src/Show.ts'
import * as S from '../../src/string.ts'
import * as N from '../../src/number.ts'
import * as B from '../../src/boolean.ts'

//
// struct
//

// $ExpectType Show<{ readonly a: string; readonly b: number; readonly c: boolean; }>
_.struct({ a: S.Show, b: N.Show, c: B.Show })

//
// tuple
//

// $ExpectType Show<readonly [string, number, boolean]>
_.tuple(S.Show, N.Show, B.Show)
