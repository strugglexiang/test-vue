import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)


new Vue({
  el:'#app',
  router,
  store,
  template:'<app/>',
  components:{
    App
  },
  created(){
    this.$http.get('http://h6.duchengjiu.top/shop/api_goods.php?page=5&pagesize=10&cat_id=45')
    .then(res=>{
      console.log(res)
    })
  }

})
