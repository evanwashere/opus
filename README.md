# fast opus bindings for node and browsers

`npm i @evan/opus`

```js
import { Encoder, Decoder } from '@evan/opus';

const e = new Encoder({ channels: 2, sample_rate: 48_000 });
const d = new Decoder({ channels: 2, sample_rate: 48_000 });

d.decode(e.encode(pcm));
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

![encoding](https://plot.evan.lol/bar/eyJ0aXRsZSI6Im9wcy9zIChoaWdoZXIgaXMgYmV0dGVyKSIsInBvaW50cyI6W3sibmFtZSI6ImVuY29kZShwY20vMmNoLzQ4SHopIDEyMGticHMiLCJzY29yZXMiOlszMzA0LjM1LDU5OTQuNzksMjA3MS41Niw0Njk2LjQxXX0seyJuYW1lIjoiZW5jb2RlKHBjbS8yY2gvNDhIeikgMzIwa2JwcyIsInNjb3JlcyI6WzI5NjAuMzUsNDk4NS4xNCwxODA1LjI5LDQxNjYuN119LHsibmFtZSI6ImVuY29kZShwY20vMmNoLzQ4SHopIDUxMmticHMiLCJzY29yZXMiOlsyOTI1LjksNDM2Mi4wMSwxNzEzLjAxLDM3MzcuMjddfV0sImxlZ2VuZCI6W3sibmFtZSI6Indhc20oQGV2YW4vb3B1cykiLCJjb2xvciI6ODUxMTM4MDQ3fSx7Im5hbWUiOiJuYXRpdmUoQGV2YW4vb3B1cykiLCJjb2xvciI6LTEyNTA5NzI2NzN9LHsibmFtZSI6Indhc20ob3B1c3NjcmlwdCkiLCJjb2xvciI6LTExNTY1MDA0ODF9LHsibmFtZSI6Im5hdGl2ZShAZGlzY29yZGpzL29wdXMpIiwiY29sb3IiOi0xNDEyODcxNjl9XX0=.png)
![decoding](https://plot.evan.lol/bar/eyJ0aXRsZSI6Im9wcy9zIChoaWdoZXIgaXMgYmV0dGVyKSIsInBvaW50cyI6W3sibmFtZSI6ImRlY29kZShwY20vMmNoLzQ4SHopIDEyMGticHMiLCJzY29yZXMiOlsxMDQ2My4zMSw5NDczLjQ0LDE0NjUwLjIzLDE1Mzk5LjkzXX0seyJuYW1lIjoiZGVjb2RlKHBjbS8yY2gvNDhIeikgMzIwa2JwcyIsInNjb3JlcyI6Wzg4MTIuMDQsODA3NC45MiwxMTYyNi45OCwxMjE2MS44Nl19LHsibmFtZSI6ImRlY29kZShwY20vMmNoLzQ4SHopIDUxMmticHMiLCJzY29yZXMiOls2MTk1LjIxLDU2MTEuMjEsNzg4Mi45OCw4MDk0Ljc4XX1dLCJsZWdlbmQiOlt7Im5hbWUiOiJ3YXNtKEBldmFuL29wdXMpIiwiY29sb3IiOjg1MTEzODA0N30seyJuYW1lIjoid2FzbShvcHVzc2NyaXB0KSIsImNvbG9yIjotMTI1MDk3MjY3M30seyJuYW1lIjoibmF0aXZlKEBldmFuL29wdXMpIiwiY29sb3IiOi0xMTU2NTAwNDgxfSx7Im5hbWUiOiJuYXRpdmUoQGRpc2NvcmRqcy9vcHVzKSIsImNvbG9yIjotMTQxMjg3MTY5fV19.png)