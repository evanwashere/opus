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

## benchmarks

![encoding](https://plot.evan.lol/bar/eyJ0aXRsZSI6Im9wcy9zIChoaWdoZXIgaXMgYmV0dGVyKSIsInBvaW50cyI6W3sibmFtZSI6ImVuY29kZShwY20vMmNoLzQ4SHopIDEyMGticHMiLCJzY29yZXMiOlsyOTA3Ljk3LDU1NzguMzQsMTkzNy4xNCw0NDAyLjVdfSx7Im5hbWUiOiJlbmNvZGUocGNtLzJjaC80OEh6KSAzMjBrYnBzIiwic2NvcmVzIjpbMjgyNi4yNiw0NzUyLjUsMTY5Ni4zOSwzOTc3LjYyXX0seyJuYW1lIjoiZW5jb2RlKHBjbS8yY2gvNDhIeikgNTEya2JwcyIsInNjb3JlcyI6WzI2NzEuNTIsNDIyMC45MywxNjUyLjU0LDM3MDIuMjJdfV0sImxlZ2VuZCI6W3sibmFtZSI6Indhc20oQGV2YW4vb3B1cykiLCJjb2xvciI6ODUxMTM4MDQ3fSx7Im5hbWUiOiJuYXRpdmUoQGV2YW4vb3B1cykiLCJjb2xvciI6LTEyNTA5NzI2NzN9LHsibmFtZSI6Indhc20ob3B1c3NjcmlwdCkiLCJjb2xvciI6LTExNTY1MDA0ODF9LHsibmFtZSI6Im5hdGl2ZShAZGlzY29yZGpzL29wdXMpIiwiY29sb3IiOi0xNDEyODcxNjl9XX0=.png)