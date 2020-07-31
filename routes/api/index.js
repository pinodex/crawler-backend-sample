const { Router } = require('express');

const router = Router();

const pagesRouter = require('./pages');

router.get('/', (req, res) => {
  res.send('Crawler API');
});

router.use('/pages', pagesRouter);

module.exports = router;
