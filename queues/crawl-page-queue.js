const queueService = require('@/services/queue');
const pageService = require('@/services/page');
const logger = require('@/services/logger');
const { evaluateElements } = require('@/services/crawler');

const crawlPageQueue = queueService.create('crawl-page');

crawlPageQueue.process(async (job) => {
  const { page } = job.data;

  pageService.setStatus(page.id, 'processing');
  logger.info(`Processing crawl page queue: ${page.id}`);

  try {
    const { title, elements } = await evaluateElements(page.url);

    pageService.addElements(page.id, elements);
    pageService.setTitle(page.id, title);

    pageService.setStatus(page.id, 'finished');

    logger.info(`Finished crawl page queue: ${page.id}`);
  } catch (err) {
    pageService.setStatus(page.id, 'failed');

    logger.info(`Failed crawl page queue: ${page.id}`);

    throw err;
  }
});

module.exports = crawlPageQueue;
