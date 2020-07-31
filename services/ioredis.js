const Redis = require('ioredis');

const { url } = require('@/config/redis');

let instance = null;

/**
 * Get ioredis instance
 *
 * @return {Redis}
 */
exports.getRedisInstance = () => {
  if (instance === null) {
    instance = new Redis(url);
  }

  return instance;
};
