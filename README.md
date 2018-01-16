# babel-preset-react-native-web3

> It's working on web3 version 0.x

## Overview

* A preset for babel to make [react-native](https://github.com/facebook/react-native
) work with [web3](https://github.com/ethereum/web3.js).

## Getting started

```bash
# Install dependencies
yarn add --dev babel-preset-react-native-web3
yarn add web3@^0.20.2
```

Add the following in your `.babelrc`

```json
{
  "presets": [
    "babel-preset-expo",
    "babel-preset-react-native-web3"
  ]
}
```
## Internal Dependencies

```
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
```
## See sample

* https://gitlab.com/dapps/react-native-web3-sample

## License

MIT @ zetta