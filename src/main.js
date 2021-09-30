/*
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-08-24 01:08:05
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-09-09 23:28:15
 */
// import Vue from "/node_modules/vue/dist/vue.esm.js";
import Vue from "_vue";
import App from "./App.vue";
var mixin = {
  mounted() {
    console.log(1)
  }
}
var mixin2 = {
  mounted() {
    console.log(5)
  }
}
new Vue({mixins: [mixin, mixin2], render: h => h(App), mounted() {console.log(4)}}).$mount("#app");
// Vue.component("hello-world", {template: "#hello-world-template"});
// var res = Vue.compile("#hello-world-template");
// var res = Vue.compile('<div><span>123</span></div>');
// new Vue({}).$mount("#app");
// new Vue({render: h => h(App)}).$mount("#app");
// const div = document.createElement("div");
// div.innerHTML = "<div>132</div>";
// new Vue({ template: div }).$mount("#app");

