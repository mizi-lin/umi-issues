import * as path from 'path';

export default {
  dynamicImport: {},
  pwa: false,
  hash: true,
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  define: { 'process.env.PROJECT': 'demo', 'process.env.MRI_ENV': 'dev' },
  proxy: {
    '/services': {
      target: 'http://58.215.174.164:16800/',
      changeOrigin: true,
      pathRewrite: { '^/services': '' },
    },
  },
  theme: { 'primary-color': '#1890ff' },
  chainWebpack: (memo, args) => {
    memo.module.rule('images').test(/\.(png|jpe?g|gif|webp|eot|woff|woff2|ttf)(\?.*)?$/);
  },
};
