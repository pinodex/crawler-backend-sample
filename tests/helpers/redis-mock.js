const Redis = require('ioredis-mock');

let instance = null;

/**
 * Get ioredis-mock instance
 *
 * @return {Redis}
 */
exports.getMockInstance = () => {
  if (instance === null) {
    instance = new Redis();
  }

  return instance;
};
