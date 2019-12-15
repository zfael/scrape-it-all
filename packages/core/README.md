# `core`

Core module that initiate puppeteer and expose the Browser instance so packages can use it to actually scrape stuff.
Also, it provides some common functions that might be used among packages.

## Usage

```
import core, { CoreArgs } from '@scrape-it-all/core';

const scrape = async ({ browser, metadata }: CoreArgs): Promise<ScrapeResult> => {
  ...
}

export default {
  scrape: core.wrapper(scrape),
};
```
