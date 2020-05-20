<template>
  <div id="app">
    <router-view></router-view>
   <tabbar>
     <tabbaritem path="/home" activeColor="blue">
       <img src="./assets/img/tabbar/首页.svg" alt=""  slot="img">
       <img src="./assets/img/tabbar/首页1.svg" alt=""  slot="active">
       <div slot="text">首页</div>
     </tabbaritem>
     <tabbaritem path="/classify" activeColor="blue">
       <img src="./assets/img/tabbar/列表.svg" alt="" slot="img">
       <img src="./assets/img/tabbar/列表1.svg" alt=""  slot="active">
       <div slot="text">分类</div>
     </tabbaritem>
     <tabbaritem path="/cart" activeColor="blue">
       <img src="./assets/img/tabbar/购物车.svg" alt="" slot="img">
       <img src="./assets/img/tabbar/购物车1.svg" alt=""  slot="active">
       <div slot="text">购物车</div>
     </tabbaritem>
     <tabbaritem path="/user" activeColor="blue">
       <img src="./assets/img/tabbar/用户.svg" alt="" slot="img">
       <img src="./assets/img/tabbar/用户1.svg" alt=""  slot="active">
       <div slot="text">用户</div>
     </tabbaritem>
   </tabbar>
  </div>
</template>
<script>
import tabbar from "./components/tabbar/TabBar"
import tabbaritem from "./components/tabbar/TabBarItem"
export default {
  components: {
    tabbar,tabbaritem
  }
}
</script>
<style>
@import url("./assets/css/base.css");

</style>
