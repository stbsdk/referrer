Determine application referrer
==============================

[![build status](https://img.shields.io/travis/stbsdk/referrer.svg?style=flat-square)](https://travis-ci.org/stbsdk/referrer)
[![npm version](https://img.shields.io/npm/v/stb-referrer.svg?style=flat-square)](https://www.npmjs.com/package/stb-referrer)
[![dependencies status](https://img.shields.io/david/stbsdk/referrer.svg?style=flat-square)](https://david-dm.org/stbsdk/referrer)
[![devDependencies status](https://img.shields.io/david/dev/stbsdk/referrer.svg?style=flat-square)](https://david-dm.org/stbsdk/referrer?type=dev)
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

If you have any problems or suggestions please open an [issue](https://github.com/stbsdk/referrer/issues)
according to the contribution [rules](.github/contributing.md).


## License ##

`stb-referrer` is released under the [MIT License](license.md).
