import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/my-lib-umd.js',
      format: 'umd',
      name: 'myLib',
    },
    {
      file: './dist/my-lib-es.js',
      format: 'es',
    },
    {
      file: './dist/my-lib-cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
  ],
  external: [
    //外部库， 使用'umd'文件时需要先引入这个外部库
    'vue',
    'react',
  ],
};
