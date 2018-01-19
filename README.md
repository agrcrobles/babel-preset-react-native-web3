# babel-preset-react-native-web3

> It is experimental but looks like it's working on web3 version 0.x

## Overview

* A preset for babel to make [react-native](https://github.com/facebook/react-native
) work with [web3](https://github.com/ethereum/web3.js).

## Getting started


```bash
# Install dependencies
yarn add --dev babel-preset-react-native-web3
yarn add web3@^0.20.2
```

1. Add the following in your `.babelrc`

```json
{
  "presets": [
    // "babel-preset-react-native" or "babel-preset-expo",
    "babel-preset-react-native-web3"
  ]
}
```

2. Create the following file `globals.js` and import it in your `App.js` as described below:

App.js
```js
import './globals';
```

globals.js
```js
// Inject node globals into React Native global scope.
global.Buffer = require('buffer').Buffer;
global.process = require('process');
global.process.env.NODE_ENV = __DEV__ ? 'development' : 'production';

// Needed so that 'stream-http' chooses the right default protocol.
global.location = {
  protocol: 'file:',
};
```

## Working internal dependencies

* browserify-zlib
* constants-browserify
* domain-browser
* https-browserify
* node-libs-browser
* os-browserify
* path-browserify
* querystring-es3
* react-native-crypto
* react-native-randombytes
* readable-stream
* stream-browserify
* stream-http
* react-native-pbkdf2-shim
* timers-browserify
* tty-browserify
* util
* vm-browserify

## See sample

* https://gitlab.com/dapps/react-native-web3-sample

## More info

https://github.com/philikon/ReactNativify/blob/8278b9dc436a575653e5226c9cec24192a80fac0/global.js

## License

MIT @ zetta