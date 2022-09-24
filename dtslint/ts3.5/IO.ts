import * as _ from '../../src/IO.ts'
import { pipe } from '../../src/function.ts'

//
// Do
//

// $ExpectType IO<{ readonly a1: number; readonly a2: string; }>
pipe(
  _.Do,
  _.bind('a1', () => _.of(1)),
  _.bind('a2', () => _.of('b'))
)
