const path = require('path');
const serve = require('rollup-plugin-serve');
const config = require('./rollup.config.base');

const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath);
};
const PORT = 3000;

const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.join('public', 'index.html');
const devUrl = `${devSite}/${devPath}`;

setTimeout(() => {
  console.log(`[dev]: ${devUrl}`);
}, 1000);

config.output.sourcemap = true;

config.plugins = [
  ...config.plugins,
  serve({
    port: PORT,
    contentBase: [resolveFile('public'), resolveFile('dist')],
  }),
];

module.exports = config;
