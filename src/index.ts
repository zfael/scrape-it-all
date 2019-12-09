import coinMarketCap from './scrapers/coin-market-cap';

(async () => {
  const result = await coinMarketCap.getCryptoDetails({
    launch: { headless: false, defaultViewport: null },
    metadata: { crypto: 'bitcoin' },
  });

  console.log(result);
})();

// import puppeteer from 'puppeteer';

// const coinMarketCapBTC = 'https://coinmarketcap.com/currencies/bitcoin/';

// const getInnerText = node => node.innerText;
// const getSourceFromImg = img => img.getAttribute('src');

// (async () => {
//   const browser = await puppeteer.launch({ headless: false, defaultViewport: null });

//   const page = await browser.newPage();
//   await page.goto(coinMarketCapBTC);

//   const upperSection = await page.$(
//     '#__next > div > div.container.cmc-main-section > div.cmc-main-section__content > div.cmc-currencies.aiq2zi-0.eXmmQp > div.cmc-currencies__details-panel > div',
//   );

//   const [name, icon, currentValue] = await Promise.all([
//     upperSection.$eval('div > h1', getInnerText),
//     upperSection.$eval('div > h1 > img', getSourceFromImg),
//     upperSection.$eval('div > div.cmc-details-panel-price.jta9t4-0.fcilTk > span:nth-child(1)', getInnerText),
//   ]);

//   await browser.close();
// })();
