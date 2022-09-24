import * as _ from '../../src/Identity.ts'
import { pipe } from '../../src/function.ts'

//
// Do
//

// $ExpectType { readonly a1: number; readonly a2: string; }
pipe(
  _.Do,
  _.bind('a1', () => _.of(1)),
  _.bind('a2', () => _.of('b'))
)
