import * as E from '../src/Either.ts'
import * as IO from '../src/IO.ts'
import * as _ from '../src/ReaderT.ts'
import * as TE from '../src/TaskEither.ts'
import * as U from './util.ts'

describe('ReaderT', () => {
  it('fromNaturalTransformation', async () => {
    const fromReaderIO = _.fromNaturalTransformation<'IO', 'TaskEither'>(TE.fromIO)
    const f = (s: string): IO.IO<number> => IO.of(s.length)
    const fa = fromReaderIO(f)
    U.deepStrictEqual(await fa('a')(), E.right(1))
  })
})
