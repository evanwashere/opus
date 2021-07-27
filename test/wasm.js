process.env.OPUS_FORCE_WASM = '1';
const { ctl, Encoder } = require('../');
const e = new Encoder({ sample_rate: 48000 });

if (9 !== e.complexity) throw 'complexity';