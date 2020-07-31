const Joi = require('@hapi/joi');
const { createValidator } = require('express-joi-validation');
const { Router } = require('express');

const pageService = require('@/services/page');

const router = Router();
const validator = createValidator({});

const createCrawlSchema = Joi.object({
  url: Joi
    .string()
    .uri()
    .required(),
});

router.post('/', validator.body(createCrawlSchema), async (req, res) => {
  const { url } = req.body;

  const page = await pageService.create(url);

  res.json(page);
});

module.exports = router;
