const { uglify } = require('rollup-plugin-uglify');
const config = require ('./rollup.config.base');

config.output.sourcemap = false;
config.plugins = [
    ...config.plugins,
    uglify()
];

module.exports = config;
