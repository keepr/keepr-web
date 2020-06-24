/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const config = require('./config');

const port = process.env.PORT || 3000;

module.exports = Object.assign(
  {
    mode: 'development',
    devServer: {
      host: '0.0.0.0',
      port,
      stats: 'minimal',
      hot: true,
      proxy: {
        '/api': {
          target: process.env.API_URL || 'http://localhost:5000',
          secure: false,
          changeOrigin: true
        }
      },
      writeToDisk: true,
      overlay: true,
      historyApiFallback: true
    }
  },
  config
);
