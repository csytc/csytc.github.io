<template>
  <div>
      <h2 class="title">{{message}}</h2>
      <button @click="btnClick">按钮</button>
    </div>
</template>

<script>
export default {
  name:"App",
  data() {
        return {
            message: "hello webpack",
            name: "csy"
        }
    },
    methods: {
        btnClick() {
            console.log(this.name)
        }
    }
}
</script>

<style scoped>
  .title {
    color:green
  }
</style>



