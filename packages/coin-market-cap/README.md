# `coin-market-cap`

This module basically gets information from coin-market-cap website for a given crypto-coin

## Usage

### Get information for given crypto-coin
```
import coinMarketCap, { CryptoCoinDetails } from '@scrape-it-all/coin-market-cap';

const metadata = {
  crypto: 'bitcoin'
};

const result: CryptoCoinDetails = await coinMarketCap.cryptoDetails({ metadata, launch: {} });
```
