/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react-hooks/rules-of-hooks */
const path = require('path');
const { addWebpackAlias, override, useBabelRc } = require('customize-cra');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = override(
  addWebpackAlias({ '@app': resolve('src') }),

  useBabelRc()
);
