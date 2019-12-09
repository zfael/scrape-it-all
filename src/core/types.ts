import { Browser } from 'puppeteer';

export interface CoreArgs {
  browser: Browser;
  metadata: any; // TODO: build metadata for every scraper
}
