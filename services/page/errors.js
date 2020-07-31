/**
 * Errors
 */
class PageNotFoundError extends Error {
  constructor() {
    super('Page not found.');
  }
}

module.exports = {
  PageNotFoundError,
};
