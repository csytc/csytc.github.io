<template>
  <div>
    <h2>{{message}}</h2>
    <hellovuex/>
    <button @click="addition">+</button>
    <button @click="subtract">-</button>
  </div>
</template>

<script>
import hellovuex from "./components/hellovuex"
export default {
  data () {
    return {
      message:"我是app组件"
    }
  },components: {
    hellovuex
  },methods: {
      addition(){
        this.$store.commit("increment")
      },
      subtract(){
        this.$store.commit("decrement")
      }
  }
    
  
}
</script>

<style>

</style>
