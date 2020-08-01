require('../../bootstrap');

const mongoDbTestServer = require('@/tests/helpers/mongodb-test-server');

module.exports = async () => {
  await mongoDbTestServer.disconnect();
};
