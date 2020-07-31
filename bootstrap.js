const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@': __dirname,
});

require('dotenv').config();
