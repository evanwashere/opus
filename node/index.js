module.exports = require(`./${process.arch}-${process.platform}.node`);

const eb = module.exports.buffers.encoder();
module.exports.Encoder = class Encoder extends module.exports.Encoder {
  encode(buf) { return eb.slice(0, super.encode(buf)); }
}

const db = module.exports.buffers.decoder();
module.exports.Decoder = class Decoder extends module.exports.Decoder {
  decode(buf) { return db.slice(0, super.decode(buf)); }
}