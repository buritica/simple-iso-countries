## Simple Iso Countries

A simple map of ISO 3166-2 common country names (in english) and alpha-2 codes

#Note about missing duplicate iso codes
This module was originally an e-commerce site and for this reason some territories with duplicate codes have been removed. You can see the list in [removed.md](removed.md) and if you want something more robust I recommend you look at [iso-3166](https://www.npmjs.org/package/iso-3166-2)

### Usage

`npm install simple-iso-countries`

```javascript
var countries = require('simple-iso-countries');

function countryName(code) {
  return countries[code].name;
}
```

### Dev

- run tests with `npm test`

