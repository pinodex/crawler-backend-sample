const puppeteer = require('puppeteer');

/**
 * Evaluate elements contents and link
 *
 * @param  {String}   url       Page URL to evaluate
 * @param  {String[]} selectors List of selectors to include
 * @return {Object[]}
 */
exports.evaluateElements = async (url, selectors = []) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const evalFunction = (selectorString) => {
    const elements = document.querySelectorAll(selectorString);
    const output = [];

    elements.forEach((element) => {
      output.push({
        innerText: element.innerText,
        tagName: element.tagName,
        href: element.getAttribute('href'),
      });
    });

    return output;
  };

  const crawledElements = await page.evaluate(
    evalFunction,
    selectors.join(','),
  );

  await browser.close();

  return crawledElements;
};
