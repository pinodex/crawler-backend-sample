const Redis = require('ioredis');

const { url } = require('@/config/redis');

let instance = null;

/**
 * Get ioredis instance
 *
 * @return {Redis}
 */
exports.getInstance = () => {
  if (instance === null) {
    instance = new Redis(url);
  }

  return instance;
};

/**
 * Set ioredis instance
 *
 * @param  {Redis} newInstance ioredis instance
 */
exports.setInstance = (newInstance) => {
  instance = newInstance;
};
