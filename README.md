# test-vue
vue技术点测试

# node 淘宝镜像安装
## 淘宝镜像源设置
npm config set registry "https://registry.npm.taobao.org"

## http下载进度显示
npm config set loglevel http

## cnpm 配置
npm install -g cnpm --registry=https://registry.npm.taobao.org
安装 cnpm i

## 安装vuex
npm i -S vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({})

## 安装axios
npm i -S vue-axios
npm i -S  axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
