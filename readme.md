Determine application referrer
==============================

[![NPM version](https://img.shields.io/npm/v/stb-util-referrer.svg?style=flat-square)](https://www.npmjs.com/package/stb-util-referrer)
[![Dependencies Status](https://img.shields.io/david/stbsdk/util-referrer.svg?style=flat-square)](https://david-dm.org/stbsdk/util-referrer)
[![Gitter](https://img.shields.io/badge/gitter-join%20chat-blue.svg?style=flat-square)](https://gitter.im/DarkPark/stb)


`util-referrer` is a function to receive a link to the previous application.
It's necessary to make a correct exit from the current application to go back.


## Installation

```bash
npm install stb-util-referrer
```


## Usage

Add to the scope:

```js
var referrer = require('stb-util-referrer');
```

Go back to the previous application:

```js
location.href = referrer() || 'http://google.com/';
```


## Debug mode

> There is a global var `DEBUG` which activates additional consistency checks and protection logic not available in release mode.

In debug mode the util method is exposed to the global namespace as `window.utilReferrer`.


## Contribution

If you have any problem or suggestion please open an issue [here](https://github.com/stbsdk/util-referrer/issues).
Pull requests are welcomed with respect to the [JavaScript Code Style](https://github.com/DarkPark/jscs).


## License

`stb-util-referrer` is released under the [GPL-3.0 License](http://opensource.org/licenses/GPL-3.0).
