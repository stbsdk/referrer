Determine application referrer
==============================

[![Build Status](https://img.shields.io/travis/stbsdk/referrer.svg?style=flat-square)](https://travis-ci.org/stbsdk/referrer)
[![NPM version](https://img.shields.io/npm/v/stb-referrer.svg?style=flat-square)](https://www.npmjs.com/package/stb-referrer)
[![Dependencies Status](https://img.shields.io/david/stbsdk/referrer.svg?style=flat-square)](https://david-dm.org/stbsdk/referrer)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/stbsdk)


Module to make a correct exit from the current application.
It can use `document.referrer` or URL GET parameter `referrer` to extract a link to the previous application.


## Installation ##

```bash
npm install stb-referrer
```


## Usage ##

Add to the scope:

```js
var referrer = require('stb-referrer');
```

Go back to the previous application:

```js
location.href = referrer() || 'http://google.com/';
```


## Development mode ##

> There is a global var `DEVELOP` which activates additional consistency checks and protection logic not available in release mode.


## Contribution ##

If you have any problem or suggestion please open an issue [here](https://github.com/stbsdk/referrer/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License ##

`stb-referrer` is released under the [MIT License](license.md).
