/*
 * @Author: qinsensen
 * @Date: 2020-06-23 15:38:33
 * @LastEditors: qinsensen
 * @LastEditTime: 2020-06-23 15:45:06
 * @Description: 
 */
const { override, addLessLoader } = require('customize-cra');
module.exports = override(
  addLessLoader(),
);
