const { arch, platform } = require('os');
module.exports = require(`./${arch()}-${platform()}.node`);