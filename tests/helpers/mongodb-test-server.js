const { MongoMemoryServer } = require('mongodb-memory-server');

let server = null;

exports.connect = async () => {
  if (server === null) {
    server = new MongoMemoryServer();
  }

  return server.getUri();
};

exports.disconnect = async () => {
  await server.stop();

  server = null;
};
