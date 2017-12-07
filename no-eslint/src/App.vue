<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/yijiyi">去看一个动物</router-link>
    <router-link to="/yijier">去看一个人</router-link>
    <router-link to="/err">错误</router-link>
    <router-view/>
    <test></test>
  </div>
</template>

<script>
import Public from './public'
console.log(Public)
export default {
  mixins: [Public],
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
