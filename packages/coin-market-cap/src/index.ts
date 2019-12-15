import core, { CoreArgs } from '@scrape-it-all/core';

const buildUrl = crypto => `https://coinmarketcap.com/currencies/${crypto}/`;

export interface CryptoCoinDetails {
  name: string;
  icon: string;
  currentValue: string;
}

const cryptoDetails = async ({ browser, metadata }: CoreArgs): Promise<CryptoCoinDetails> => {
  const { crypto } = metadata;

  const page = await browser.newPage();
  await page.goto(buildUrl(crypto));

  const upperSection = await page.$(
    '#__next > div > div.container.cmc-main-section > div.cmc-main-section__content > div.cmc-currencies.aiq2zi-0.eXmmQp > div.cmc-currencies__details-panel > div',
  );

  const [name, icon, currentValue] = await Promise.all([
    upperSection.$eval('div > h1', core.functions.getInnerText),
    upperSection.$eval('div > h1 > img', core.functions.getSourceFromImg),
    upperSection.$eval(
      'div > div.cmc-details-panel-price.jta9t4-0.fcilTk > span:nth-child(1)',
      core.functions.getInnerText,
    ),
  ]);

  return { name, icon, currentValue };
};

export default {
  cryptoDetails: core.wrapper(cryptoDetails),
};
