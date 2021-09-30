<!--
 * @Descripttion: 
 * @version: 
 * @Author: 鹿角兔子
 * @Date: 2021-08-24 01:07:37
 * @LastEditors: 鹿角兔子
 * @LastEditTime: 2021-09-09 23:23:43
-->
<template>
  <div>
    Hello Vite Vue2
    <div id="app2"></div>
  </div>
</template>

<script>
var mixins = {
  mounted() {
    console.log(2);
  }
}
export default {
  name: "App",
  mixins:[mixins],
  mounted() {
    console.log(3);
  }
};
</script>