import * as _ from '../../src/Applicative.ts'
import * as E from '../../src/Either.ts'
import * as S from '../../src/Semigroup.ts'
import * as R from '../../src/Reader.ts'

//
// getApplicativeComposition
//

const applicativeValidation = E.getValidation(S.semigroupString)

_.getApplicativeComposition(R.reader, applicativeValidation).map // $ExpectType <FE, A, B>(fa: Reader<FE, Either<string, A>>, f: (a: A) => B) => Reader<FE, Either<string, B>>
