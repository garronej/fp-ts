import { left } from '../src/TaskEither.ts'
import { run } from './run.ts'

const main = left(new Error('"npm publish" can not be run from root, run "npm run release" instead'))

run(main)
