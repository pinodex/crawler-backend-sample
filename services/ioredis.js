const Redis = require('ioredis');

const { url } = require('@/config/redis');

const instances = [];

/**
 * Get ioredis instance
 *
 * @return {Redis}
 */
exports.getInstance = (name = 'default') => {
  if (!instances[name]) {
    instances[name] = new Redis(url);
  }

  return instances[name];
};
