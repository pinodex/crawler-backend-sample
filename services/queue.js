const Bull = require('bull');
const { getInstance } = require('@/services/ioredis');

/**
 * Create Bull instance
 *
 * @param  {String} name Queue name
 * @return {Bull}
 */
exports.create = (name) => new Bull(name, null, {
  createClient: () => getInstance(),
});
