# `trampos`

TODO

## Usage

### Get details of a given job id
```
import trampos, { JobDetails } from '@scrape-it-all/coin-market-cap';

const metadata = {
  jobId: 'some-job-id-here'
};

const result: JobDetails = await JobDetails.jobDetails({ metadata, launch: {} });
```
