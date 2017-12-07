<template lang="html">
  <div class="">
    <div class="">
      <span>
       {{storeCount}}
      </span>
      <button type="button" name="button" @click="add">+5</button>
    </div>
     <p>我是一个动物</p>
     <router-link to="/yijiyi/erji1">二级路由1</router-link>
     <router-link to="/yijiyi/erji2">二级路由2</router-link>
     <router-view/>
  </div>
</template>

<script>
export default {
  computed:{
    storeCount(){
      return this.$store.state.count
    }
  },
  methods:{
    add(){
      this.$store.dispatch('add',5)
    }
  }
}
</script>

<style lang="css">
</style>
