import * as _ from '../../src/Const.ts'

//
// contramap
//

_.const_.contramap(_.make<boolean>(true), (s: string) => s.length) // $ExpectType Const<boolean, string>
