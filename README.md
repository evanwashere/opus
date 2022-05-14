# fast opus bindings for node and browsers

`bun add @evan/opus`

`npm install @evan/opus`

```js
import { Encoder, Decoder } from '@evan/opus';

const e = new Encoder({ channels: 2, sample_rate: 48_000 });
const d = new Decoder({ channels: 2, sample_rate: 48_000 });

d.decode(e.encode(pcm));
```

## supported platforms
|                  | node@10 | node@12 | node@14 | node@16 | node@18 |
| ---------------- | ------- | ------- | ------- | ------- | ------- |
| wasm32           | ✕       | ✓       | ✓       | ✓       | ✓       |
| macos x64        | ✓       | ✓       | ✓       | ✓       | ✓       |
| macos arm64      | ✓       | ✓       | ✓       | ✓       | ✓       |
| windows x64      | ✓       | ✓       | ✓       | ✓       | ✓       |
| linux x64 gnu    | ✓       | ✓       | ✓       | ✓       | ✓       |
| linux arm64 gnu  | ✓       | ✓       | ✓       | ✓       | ✓       |

you can force usage of wasm by setting `OPUS_FORCE_WASM` env variable

for deno and browsers use `@evan/wasm/target/opus/deno.js` from [npm](https://npmjs.com/@evan/wasm)/[cdn](https://unpkg.com/@evan/wasm/target/opus/deno.js)

## benchmarks

![encoding](https://plot.evan.lol/bar/eyJ0aXRsZSI6Im9wcy9zIChoaWdoZXIgaXMgYmV0dGVyKSIsInBvaW50cyI6W3sibmFtZSI6ImVuY29kZShwY20vMmNoLzQ4SHopIDEyMGticHMiLCJzY29yZXMiOls0MDA0LjAzLDcyMTUuMjQsMjUzMi4zNCw1NDcwLjg2XX0seyJuYW1lIjoiZW5jb2RlKHBjbS8yY2gvNDhIeikgMzIwa2JwcyIsInNjb3JlcyI6WzM4ODguNSw2MTYzLjM0LDIyNjguNjMsNTAxNS4yNV19LHsibmFtZSI6ImVuY29kZShwY20vMmNoLzQ4SHopIDUxMmticHMiLCJzY29yZXMiOlszNTY2LjgxLDU1MDkuMjcsMjA1OC4wNiw0Njc5LjA2XX1dLCJsZWdlbmQiOlt7Im5hbWUiOiJ3YXNtKEBldmFuL29wdXMpIiwiY29sb3IiOjg1MTEzODA0N30seyJuYW1lIjoibmF0aXZlKEBldmFuL29wdXMpIiwiY29sb3IiOi0xMjUwOTcyNjczfSx7Im5hbWUiOiJ3YXNtKG9wdXNzY3JpcHQpIiwiY29sb3IiOi0xMTU2NTAwNDgxfSx7Im5hbWUiOiJuYXRpdmUoQGRpc2NvcmRqcy9vcHVzKSIsImNvbG9yIjotMTQxMjg3MTY5fV19.png)
![decoding](https://plot.evan.lol/bar/eyJ0aXRsZSI6Im9wcy9zIChoaWdoZXIgaXMgYmV0dGVyKSIsInBvaW50cyI6W3sibmFtZSI6ImRlY29kZShwY20vMmNoLzQ4SHopIDEyMGticHMiLCJzY29yZXMiOlsxMzUwOS44NiwxMTk4Ni4zLDE5NTY1LjY5LDE5Nzc0LjZdfSx7Im5hbWUiOiJkZWNvZGUocGNtLzJjaC80OEh6KSAzMjBrYnBzIiwic2NvcmVzIjpbMTEzOTEuMSwxMDg1Ny4zMiwxNTM5MS4yNiwxNTU3OS41MV19LHsibmFtZSI6ImRlY29kZShwY20vMmNoLzQ4SHopIDUxMmticHMiLCJzY29yZXMiOls3ODAzLjI0LDc1ODYuNTUsMTAyODIuODMsMTAwMzIuODRdfV0sImxlZ2VuZCI6W3sibmFtZSI6Indhc20oQGV2YW4vb3B1cykiLCJjb2xvciI6ODUxMTM4MDQ3fSx7Im5hbWUiOiJ3YXNtKG9wdXNzY3JpcHQpIiwiY29sb3IiOi0xMjUwOTcyNjczfSx7Im5hbWUiOiJuYXRpdmUoQGV2YW4vb3B1cykiLCJjb2xvciI6LTExNTY1MDA0ODF9LHsibmFtZSI6Im5hdGl2ZShAZGlzY29yZGpzL29wdXMpIiwiY29sb3IiOi0xNDEyODcxNjl9XX0=.png)

## License

MIT © [Evan](https://github.com/evanwashere)