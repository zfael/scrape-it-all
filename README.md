# Scrape-it-all 🕷️🕸️
> Modular web scraper for Node.JS

Have you ever wanted to be aware of when something changes in a webpage and thought about build a scraper to keep posted about it? yeah? so scrape-it-all project aims to solve the initial setup overhead for ya!<br />
Basically, it wraps the whole logic of a given scraper so you just need to call a function and get the result you wanted!

For instance
```ts
import coinMarketCap from '@scrape-it-all/coin-market-cap';
const result = await coinMarketCap.cryptoDetails({ metadata: { crypto: 'bitcoin' } });

// result
{
  "name": " Bitcoin (BTC)",
  "icon": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png?_=b4ab82b",
  "currentValue": "$9,897.98 USD"
}
```

## How is the repo structured?

The scrape-it-all project is a monorepo that is built on top of [Lerna](https://github.com/lerna/lerna) so we can leverage individual package based on each scraper available.<br />
In addition, there might be some core functionality that will be used among scrapers which makes sense to expose that as an individual package as well.

## Wanna help?

Want to report a bug, ask for a feature/scraper (or be the one to implement it), or improve something you feel might be worth? Alright, we get you covered! Read up on the [contributing](https://github.com/zfael/scrape-it-all/blob/master/CONTRIBUTING.md) file to be in sync with our guidelines!
