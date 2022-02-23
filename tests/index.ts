import fs from 'fs';
import { Encoder } from '@evan/opus';

const e = new Encoder();

e.signal = 'music';
e.bitrate = 512_000;

const packets = e.encode_pcm_stream(960, fs.createReadStream('./tests/test.pcm'));