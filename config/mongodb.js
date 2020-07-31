module.exports = {
  uri: process.env.MONGODB_URI,
  host: process.env.MONGODB_HOST,
  port: process.env.MONGODB_PORT,
  username: process.env.MONGODB_USER || null,
  password: process.env.MONGODB_PASS || null,
  db: process.env.MONGODB_DB,
};
