import core from '../../core';

import { CoreArgs } from '../../core/types';
import { TramposDetails } from './types';

const buildUrl = job => `https://trampos.co/oportunidades/${job}`;

const getTramposDetails = async ({ browser, metadata }: CoreArgs): Promise<TramposDetails> => {
  const { job } = metadata;
  
  const page = await browser.newPage();
  await page.goto(buildUrl(job));

  const opportunitySection = await page.$(
    'div.application-container > div.opportunities-view > div#opportunity-outlet > div.opportunity-view > div.opportunity-body > div.container > div.opportunity',
  );

  const [title, company, place, description] = await Promise.all([
    opportunitySection.$eval('h1.name', core.functions.getInnerText),
    opportunitySection.$eval('p.address > a', core.functions.getInnerText),
    opportunitySection.$eval('p.address', core.functions.getInnerText).then(place => String(place).split('|')[1].toString()),
    opportunitySection.$eval('div.description', core.functions.getInnerText),
  ]);

  return { title, company, place, description };
};

export default {
  getTramposDetails: core.wrapper(getTramposDetails),
};
