/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-08-24 01:03:47
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-08-24 04:40:31
 */
const { createVuePlugin } = require('vite-plugin-vue2')
import alias from "@rollup/plugin-alias";
import path from "path";

// alias({ 'vue': require.resolve('vue/dist/vue.esm.js') }),
module.exports = {
  plugins: [createVuePlugin(),
  alias({
    entries: {
      vue: path.join(__dirname, "node_modules/vue/dist/vue.esm.js"),
      _vue: path.join(__dirname, "node_modules/vue/dist/vue.esm.js")
    }
  })],
}