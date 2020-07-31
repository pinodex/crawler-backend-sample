const Joi = require('@hapi/joi');

exports.createPageSchema = Joi.object({
  url: Joi
    .string()
    .uri()
    .required(),
});
