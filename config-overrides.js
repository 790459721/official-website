/*
 * @Author: qinsensen
 * @Date: 2020-06-23 15:38:33
 * @LastEditors: qinsensen
 * @LastEditTime: 2020-06-23 15:45:06
 * @Description: 
 */
const { override, addLessLoader, fixBabelImports } = require('customize-cra');
module.exports = override(
  addLessLoader(),
  fixBabelImports('import', { 
    libraryName: 'antd-mobile', 
    libraryDirectory: 'es', 
    style: true 
  }),
);
