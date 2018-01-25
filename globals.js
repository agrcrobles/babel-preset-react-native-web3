// Inject node globals into React Native global scope.
global.Buffer = require('buffer').Buffer;

global.process = require('process');
global.process.env.NODE_ENV = __DEV__ ? 'development' : 'production';
