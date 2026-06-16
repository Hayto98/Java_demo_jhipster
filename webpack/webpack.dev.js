
const { merge } = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = (options) => ({
  devServer: {
    port: 4200
  }
});
