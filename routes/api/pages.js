const { createValidator } = require('express-joi-validation');
const { Router } = require('express');

const pageService = require('@/services/page');
const { crawlPageQueue } = require('@/queues');

const {
  createPageSchema,
} = require('@/services/page/schemas');

const router = Router();
const validator = createValidator({});

router.get('/', async (req, res) => {
  const pages = await pageService.all();

  res.json(pages);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const page = await pageService.get(id);

  res.json(page);
});

router.post('/', validator.body(createPageSchema), async (req, res) => {
  const { url } = req.body;

  const page = await pageService.create(url);

  crawlPageQueue.add({ page });

  res.json(page);
});

module.exports = router;
