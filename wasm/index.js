let u8;
let wasm;

{
  const mod = new WebAssembly.Module(require('fs').readFileSync(require('path').join(__dirname, `${WebAssembly.validate(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11)) ? 'simd' : 'opus'}.wasm`)));

  const instance = new WebAssembly.Instance(mod, {
    wasi_snapshot_preview1: { fd_seek() { }, fd_write() { }, fd_close() { }, proc_exit() { } },
    env: { emscripten_notify_memory_growth() { u8 = new Uint8Array(wasm.memory.buffer); i16 = new Int16Array(wasm.memory.buffer); } },
  });

  wasm = instance.exports;
  u8 = new Uint8Array(wasm.memory.buffer);
}

function err(code) { if (0 > code) throw new Error(`opus: ${load_static_string(u8, wasm.opus_strerror(code))}`); else return code; }
function cgc(f) { return !('FinalizationRegistry' in globalThis) ? { delete(_) { }, add(_, __) { } } : { r: new FinalizationRegistry(f), delete(k) { this.r.unregister(k); }, add(k, v) { this.r.register(k, v, k); } }; }

function load_static_string(u8, ptr) {
  let s = '';
  const l = u8.length | 0;

  for (let o = ptr | 0; o < l; o++) {
    const x = u8[o];
    if (0 === x) break;
    s += String.fromCharCode(x);
  }

  return s;
}

const pptrs = 2 ** 13;
const pptr = wasm.malloc(2 ** 13);
const bptr = wasm.malloc(2 ** 15);
const gc = cgc(ptr => wasm.free(ptr));
const bptrs = u8.subarray(bptr, bptr + 2 ** 15);

class Encoder {
  #ptr = 0;
  constructor({ channels, application, sample_rate }) {
    this.channels = channels || 2;
    gc.add(this, this.#ptr = wasm.malloc(wasm.opus_encoder_get_size(this.channels)));
    application = ({ voip: 2048, audio: 2049, restricted_lowdelay: 2051 })[application || 'audio'];
    try { err(wasm.opus_encoder_init(this.#ptr, sample_rate || 48000, this.channels, application)); } catch (e) { throw (this.drop(), e); }
  }

  drop() { if (this.#ptr) (gc.delete(this), wasm.free(this.#ptr), this.#ptr = 0); }
  ctl(cmd, arg) { if (arg == null) return wasm.opus_encoder_ctl_get(this.#ptr, cmd); else return err(wasm.opus_encoder_ctl_set(this.#ptr, cmd, arg)); }

  encode(buffer) {
    bptrs.set(buffer = new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength));
    const l = err(wasm.opus_encode(this.#ptr, bptr, buffer.length / 2 / this.channels, pptr, pptrs));

    return u8.slice(pptr, l + pptr);
  }
}

module.exports = { Encoder };