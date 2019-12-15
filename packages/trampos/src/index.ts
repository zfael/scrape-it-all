import core, { CoreArgs } from '@scrape-it-all/core';

export interface JobDetails {
  title: string;
  company: string;
  place: string;
  description: string;
}

const buildUrl = job => `https://trampos.co/oportunidades/${job}`;

const jobDetails = async ({ browser, metadata }: CoreArgs): Promise<JobDetails> => {
  const { jobId } = metadata;

  const page = await browser.newPage();
  await page.goto(buildUrl(jobId));

  const opportunitySection = await page.$(
    'div.application-container > div.opportunities-view > div#opportunity-outlet > div.opportunity-view > div.opportunity-body > div.container > div.opportunity',
  );

  const [title, company, place, description] = await Promise.all([
    opportunitySection.$eval('h1.name', core.functions.getInnerText),
    opportunitySection.$eval('p.address > a', core.functions.getInnerText),
    opportunitySection.$eval('p.address', core.functions.getInnerText).then(p =>
      String(p)
        .split('|')[1]
        .toString(),
    ),
    opportunitySection.$eval('div.description', core.functions.getInnerText),
  ]);

  return { title, company, place, description };
};

export default {
  jobDetails: core.wrapper(jobDetails),
};
