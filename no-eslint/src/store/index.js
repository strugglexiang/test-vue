import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0
  },
  getters:{

  },
  actions:{
     add({commit},canshu ){
       commit('addCount',canshu)
     }
  },
  mutations:{
    addCount(state,canshu ){
        // console.log(this.state===state)
        console.log(canshu);
        state.count+=canshu 
    }
  }
}
)
