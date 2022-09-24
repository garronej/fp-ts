fp-ts's author [is not interested in supporting Deno](https://github.com/gcanti/fp-ts/pull/1594#issuecomment-933343833) so I publish 
it on [deno.land/x](https://deno.land/x/fp_ts) form this fork.  
Automatically syncs with fork, on tagged release fixes imports to use .ts extensions to run on deno natively

## Setup
in `import_map.json`
```json
{
    "imports": {
      "fp/": "https://raw.githubusercontent.com/garronej/fp-ts/2.12.3-deno/src/"
    }
}
```
post 2.12.3 change the version to tagged release you want to use

example: `"fp/": "https://raw.githubusercontent.com/garronej/fp-ts/2.13.0-deno/src/"`

in `deno.json`
```json
{
    "importMap": "import_map.json",
}
```
in `example.ts`
```typescript
import { Option, some, none} from "fp/Option.ts"
const a: Option<string> = some("string");
const b: Option<string> = none;
```
WARNING: [It's currently broken](https://github.com/gcanti/fp-ts/pull/1594#issuecomment-935623964) anyone who whould be willing to figure out how [the sources files](https://github.com/garronej/fp-ts/tree/master/src) should be [transformed](https://github.com/garronej/fp-ts/tree/latest/deno_dist) would just have to tell me and I'll fix it. I just don't have time to figure it out myself. 

<h3 align="center">
  <a href="https://gcanti.github.io/fp-ts/">
    <img src="https://user-images.githubusercontent.com/6702424/135910484-720a18ee-0b3f-43f6-88a5-f323e7db9359.png">
  </a>
</h3>

<p align="center">
Functional programming in TypeScript
</p>

<p align="center">
  <a href="https://github.com/gcanti/fp-ts/actions">
    <img src="https://github.com/gcanti/fp-ts/actions/workflows/main.yml/badge.svg?branch=master" alt="build status" height="20">
  </a>
  <a href="https://www.npmjs.com/package/fp-ts">
    <img src="https://img.shields.io/npm/dm/fp-ts.svg" alt="npm downloads" height="20">
  </a>
</p>

# Typed functional programming in TypeScript

`fp-ts` is a library for _typed functional programming_ in TypeScript.

`fp-ts` aims to allow developers to use _popular patterns and abstractions_ that are available in most functional languages. For this, it includes the most popular data types, type classes and abstractions such as [Option](https://gcanti.github.io/fp-ts/modules/Option.ts), [Either](https://gcanti.github.io/fp-ts/modules/Either.ts), [IO](https://gcanti.github.io/fp-ts/modules/IO.ts), [Task](https://gcanti.github.io/fp-ts/modules/Task.ts), [Functor](https://gcanti.github.io/fp-ts/modules/Functor.ts), [Applicative](https://gcanti.github.io/fp-ts/modules/Applicative.ts), [Monad](https://gcanti.github.io/fp-ts/modules/Monad.ts) to empower users to write pure FP apps and libraries built atop higher order abstractions.

A distinctive feature of `fp-ts` with respect to other functional libraries is its implementation of [Higher Kinded Types](<https://en.wikipedia.org/wiki/Kind_(type_theory)>), which TypeScript doesn't support natively.

**Inspired by**

- [Haskell](https://www.haskell.org)
- [PureScript](https://www.purescript.org)
- [Scala](https://www.scala-lang.org)

# Installation

To install the stable version:

```
npm install fp-ts
```

Make sure to always have a single version of `fp-ts` installed in your project. Multiple versions are known to cause `tsc` to hang during compilation. You can check the versions currently installed using `npm ls fp-ts` (make sure there's a single version and all the others are marked as `deduped`).

## TypeScript compatibility

**Strictness** – This library is conceived, tested and is supposed to be consumed by TypeScript with the `strict` flag turned on.

| `fp-ts` version | required `typescript` version |
| --------------- | ----------------------------- |
| 2.0.x+          | 3.5+                          |
| 1.15.x+         | 3.1+                          |
| <= 1.14.4       | 2.8+ (\*)                     |

(\*) If you are running `< typescript@3.0.1` you have to polyfill the `unknown` type. You can use [unknown-ts](https://github.com/gcanti/unknown-ts) as a polyfill.

# Documentation

**Disclaimer**. Teaching functional programming is out of scope of this project, so the documentation assumes you already know what FP is.

- [Docs](https://gcanti.github.io/fp-ts)
- [Learning Resources](https://gcanti.github.io/fp-ts/learning-resources/)
- [Ecosystem](https://gcanti.github.io/fp-ts/ecosystem/)
- API Reference
  - [version 2.x (current)](https://gcanti.github.io/fp-ts/modules/)
  - [version 1.x](https://github.com/gcanti/fp-ts/tree/1.x/docs/modules/)

# Help

If you need help with `fp-ts` check out:

- this [Discord server](https://discord.gg/HVWmBBXM8A)
- the `#fp-ts` channel on [FP slack](https://fpslack.com/).

# Development

- [Code conventions](https://gcanti.github.io/fp-ts/guides/code-conventions)

# License

The MIT License (MIT)
