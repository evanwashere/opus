import { arch, platform } from 'os';
import { createRequire } from 'module';
export default createRequire(import.meta.url)(`./${arch()}-${platform()}.node`);