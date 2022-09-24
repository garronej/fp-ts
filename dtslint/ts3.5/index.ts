import * as _ from '../../src/HKT.ts'
import * as T from '../../src/Task.ts'

// issue #536
function testIssue536<F extends _.URIS, G extends _.URIS, A>(x: _.Kind<F, A>): _.Kind<G, A> {
  // $ExpectError
  return x
}

const testURI = <F extends _.URIS>(ma: T.Task<number>): _.Kind<F, number> => {
  // $ExpectError
  return ma
}

// $ExpectError
type HKT1 = _.Kind<'a', string>

type Tuple<E, A> = readonly [A, E]
