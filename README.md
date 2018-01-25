# babel-preset-react-native-web3

It is experimental but looks like it's working on web3 version 0.x

This makes `crypto` work on JavascriptCore using  `crypto-browserify` and a pure javascript tiny implementation of `randombytes`.

Can be considered as a workaround, buffer and process global variable.

## Overview

* A preset for babel to make [react-native](https://github.com/facebook/react-native) work with [web3](https://github.com/ethereum/web3.js) out of the box.

## Getting started

```bash
# Install dependencies
yarn add --dev babel-preset-react-native-web3
yarn add web3@^0.20.2
```

1. Add the following in your `.babelrc`

```
{
  "presets": [
    // "babel-preset-react-native" or "babel-preset-expo",
    "babel-preset-react-native-web3"
  ]
}
```

2. Import `globals` in your `App.js` as described below:

App.js

```js
import 'babel-preset-react-native-web3/globals';
```

## See sample

* https://gitlab.com/dapps/react-native-web3-sample

## License

MIT @ zetta