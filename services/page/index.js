const Page = require('@/models/Page');
const { PageNotFoundError } = require('./errors');

/**
 * Get page record by ID
 *
 * @param  {String} id Page ID
 * @return {Page}
 */
exports.get = async (id) => {
  const page = await Page.findById(id);

  if (page) {
    return page;
  }

  throw new PageNotFoundError();
};

/**
 * Create empty page record
 *
 * @param  {String} url Page URL
 * @return {Page}
 */
exports.create = async (url) => Page.create({ url });

/**
 * Set page record status
 *
 * @param  {String} id     Page ID
 * @param  {String} status Page status
 * @return {Page}
 */
exports.setStatus = async (id, status) => {
  const page = await this.get(id);

  page.status = status;

  await page.save();

  return page;
};

/**
 * Add elements to page record
 *
 * @param  {String} id       Page ID
 * @param  {Array}  elements Array of elements
 * @return {Page}
 */
exports.addElements = async (id, elements) => {
  const page = await this.get(id);

  page.elements.push(...elements);

  await page.save();

  return page;
};
