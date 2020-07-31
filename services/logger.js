const { createLogger, transports, format } = require('winston');

let instance = null;

exports.init = () => {
  instance = createLogger({
    format: format.simple(),

    transports: [new transports.Console()],
  });

  return this;
};

exports.log = (message) => instance.log(message);

exports.info = (message) => instance.info(message);

exports.error = (message) => instance.error(message);

exports.warn = (message) => instance.warn(message);
