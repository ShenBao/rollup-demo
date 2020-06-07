const path = require('path');
const buble = require('@rollup/plugin-buble');
import filesize from 'rollup-plugin-filesize';

const resolve = function (filePath) {
  return path.join(__dirname, filePath);
};

module.exports = {
  input: resolve('src/index.js'),
  output: {
    file: resolve('dist/index.js'),
    format: 'iife',
  },
  plugins: [
    buble(),
    filesize({
      showMinifiedSize: true,
      showGzippedSize: true,
      theme: 'dark',
    }),
  ],
};
