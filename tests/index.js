const { ctl, Encoder, Decoder } = require('../');
const e = new Encoder({ channels: 2, sample_rate: 48000 });
const d = new Decoder({ channels: 2, sample_rate: 48000 });
const sample = new Uint8Array(require('fs').readFileSync('./tests/test.pcm').subarray(0, 4 * 960));

if (9 !== e.complexity) throw 'complexity';
if (sample.length !== d.decode(e.encode(sample)).length) throw 'decoding';