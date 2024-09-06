/*
 * @Author: yingzi
 * @Date: 2024-08-19 14:23:18
 * @LastEditors: yingzi
 * @LastEditTime: 2024-08-21 11:50:32
 * @Description: 请填写简介
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
