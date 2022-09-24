import * as U from './util.ts'
import * as RA from '../src/ReadonlyArray.ts'
import { getCompactableComposition } from '../src/Compactable.ts'
import { none, some } from '../src/Option.ts'
import { left, right } from '../src/Either.ts'
import { separated } from '../src/Separated.ts'

describe('Compactable', () => {
  it('getCompactableComposition', () => {
    const C = getCompactableComposition(RA.Functor, { ...RA.Functor, ...RA.Compactable })
    U.deepStrictEqual(
      C.map([[1], [2]], (n) => n * 2),
      [[2], [4]]
    )
    U.deepStrictEqual(
      C.compact([
        [some(1), none],
        [none, some(2)]
      ]),
      [[1], [2]]
    )
    U.deepStrictEqual(
      C.separate([
        [left('a'), right(1)],
        [right(2), left('b')]
      ]),
      separated([['a'], ['b']], [[1], [2]])
    )
  })
})
