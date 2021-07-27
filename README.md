# fast opus bindings for node and browsers

`npm i @evan/opus`

```js
import { Encoder } from '@evan/opus/lib.mjs';
// or const { Encoder } = require('@evan/opus');
const e = new Encoder({ channels: 2, sample_rate: 48_000 });

e.encode(pcm);
```

## supported platforms
|                  | node@10 | node@12 | node@14 | node@16 |
| ---------------- | ------- | ------- | ------- | ------- |
| wasm32           | ✕       | ✓       | ✓       | ✓       |
| macos x64        | ✓       | ✓       | ✓       | ✓       |
| macos arm64      | ✓       | ✓       | ✓       | ✓       |
| windows x64      | ✓       | ✓       | ✓       | ✓       |
| linux x64 gnu    | ✓       | ✓       | ✓       | ✓       |
| linux arm64 gnu  | ✓       | ✓       | ✓       | ✓       |

you can force usage of wasm by setting `OPUS_FORCE_WASM` env variable

for deno and browsers use `@evan/wasm/target/opus/deno.js` from [npm](https://npmjs.com/@evan/wasm)/[cdn](https://unpkg.com/@evan/wasm/target/opus/deno.js)