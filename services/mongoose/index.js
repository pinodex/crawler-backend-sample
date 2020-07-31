const mongoose = require('mongoose');

const {
  uri,
  host,
  port,
  username,
  password,
  db,
} = require('@/config/mongodb');

let connectionUri = uri;

if (!connectionUri) {
  connectionUri = username && password
    ? `mongodb://${username}:${password}@${host}:${port}/${db}`
    : `mongodb://${host}:${port}/${db}`;
}

/**
 * Connect to MongoDB server
 *
 * @param  {String} connectionUriOverride Override connection URI. (Defaults to env)
 * @param  {Object} optionsOverride       Override options
 */
exports.connect = (connectionUriOverride = null, optionsOverride = {}) => {
  const uriToUse = connectionUriOverride || connectionUri;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    ...optionsOverride,
  };

  return mongoose.connect(uriToUse, options);
};

exports.mongoose = mongoose;
