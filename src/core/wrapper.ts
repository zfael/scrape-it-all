import puppeteer from 'puppeteer';

export default scraperFn => async args => {
  const { launch, metadata } = args;

  const browser = await puppeteer.launch({ ...launch });

  const result = await scraperFn({ browser, metadata });

  await browser.close();

  return result;
};
