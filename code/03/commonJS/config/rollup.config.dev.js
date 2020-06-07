const configList = require('./rollup.config.base');

configList.map((config, index) => {
  config.output.sourcemap = true;

  return config;
});

module.exports = configList;
