const path = require('path');
const {babel} = require('@rollup/plugin-babel');
const serve = require('rollup-plugin-serve');

const resolveFile = function (filePath) {
  return path.join(__dirname, filePath);
};

module.exports = {
  input: resolveFile('src/index.js'),
  output: {
    file: resolveFile('dist/index.js'),
    format: 'umd',
    sourcemap: true,
  },
  watch: true,
  plugins: [
    babel({
      presets: ['@babel/preset-env'],
    }),
    serve({
      port: 3001,
      contentBase: [resolveFile('public'), resolveFile('dist')],
    }),
  ],
};
