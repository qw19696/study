<template>
  <div id="app">
    <test :name='msg'></test>
    <input type="text" v-model="msg">
    <button @click="test">测试按钮</button>

  </div>
</template>

<script>

import test from "@/components/test";

export default {
  name: 'App',
  components: {
    test
  },
  data(){
    return{
      msg:'李四'
    }
  },
  methods:{
    test(){
      this.$children[0].ceshi()
    }
  }
}
</script>

<style>

</style>
