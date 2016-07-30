const {webpackConfig} = require('katulong');
const path = require('path');

console.log(__dirname);

webpackConfig.entry = [
    './demo/index.js'
];

module.exports = webpackConfig;
