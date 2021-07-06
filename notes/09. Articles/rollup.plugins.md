# 常用插件汇总

- @rollup/plugin-buble：rollup 的 ES6 编译插件，简化版的 babel
- @rollup/plugin-babel: 提供 babel 能力
- rollup-plugin-serve: 类比 webpack-dev-server, 提供静态服务器能力
- rollup-plugin-livereload：用于文件变化时，实时刷新页面
- @rollup/plugin-alias: 提供 modules 名称的 alias 和 reslove 功能
- @rollup/plugin-commonjs 支持 CommonJS 的模块引用
- @rollup/plugin-node-resolve 支持 npm 模块引用
- rollup-plugin-postcss：支持 css 引用
- @rollup/plugin-json：引用 json 文件
- @rollup/plugin-typescript typescript：Typescript 编译
- rollup-plugin-typescript2：Typescript 编译
- rollup-plugin-filesize: 显示 bundle 文件大小
- rollup-plugin-uglify: 压缩 bundle 文件
- rollup-plugin-terser：压缩 bundle 文件
- rollup-plugin-eslint: 提供 eslint 能力
- rollup-plugin-replace: 类比 Webpack 的 DefinePlugin , 可在源码中通过 process.env.NODE_ENV 用于构建区分 Development 与 Production 环境.
- @rollup/plugin-auto-install：自动安装依赖
