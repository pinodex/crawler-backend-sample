const moduleAlias = require('module-alias');
const logger = require('./services/logger');

moduleAlias.addAliases({
  '@': __dirname,
});

require('dotenv').config();

logger.init();
