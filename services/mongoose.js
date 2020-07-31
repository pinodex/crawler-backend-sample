const mongoose = require('mongoose');

const {
  url,
  host,
  port,
  username,
  password,
  db,
} = require('@/config/mongodb');

let connectionUrl = url;

if (!connectionUrl) {
  connectionUrl = username && password
    ? `mongodb://${username}:${password}@${host}:${port}/${db}`
    : `mongodb://${host}:${port}/${db}`;
}

/**
 * Connect to MongoDB server
 *
 * @param  {String} connectionUrlOverride Override connection URI. (Defaults to env)
 * @param  {Object} optionsOverride       Override options
 */
exports.connect = (connectionUrlOverride = null, optionsOverride = {}) => {
  const urlToUse = connectionUrlOverride || connectionUrl;

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    ...optionsOverride,
  };

  return mongoose.connect(urlToUse, options);
};

exports.mongoose = mongoose;
