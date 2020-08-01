const puppeteer = require('puppeteer');

/**
 * Evaluate elements contents and link
 *
 * @param  {String}   url       Page URL to evaluate
 * @param  {String[]} selectors List of selectors to include
 * @return {Object}
 */
exports.evaluateElements = async (url, selectors = ['h1', 'h2', 'h3', 'a']) => {
  const browser = await puppeteer.launch({
    args: [
      '--disable-dev-shm-usage',
      '--no-sandbox',
    ],
  });

  const page = await browser.newPage();

  await page.goto(url);

  const evalFunction = (selectorString) => {
    const results = document.querySelectorAll(selectorString);

    const { title } = document;
    const elements = [];

    results.forEach((element) => {
      elements.push({
        innerText: element.innerText,
        tagName: element.tagName,
        href: element.getAttribute('href'),
      });
    });

    return { title, elements };
  };

  const output = await page.evaluate(
    evalFunction,
    selectors.join(','),
  );

  await browser.close();

  return output;
};
