const path = require('path');
const { babel } = require('@rollup/plugin-babel');

const resolveFile = function(filePath) {
  return path.join(__dirname, filePath)
}

console.log('babel=', babel);

module.exports = {
  input: resolveFile('src/index.js'),
  output: {
    file: resolveFile('dist/index.js'),
    format: 'umd',
  },
  plugins: [
    babel({
      presets: ['@babel/preset-env']
    }),
  ],
}