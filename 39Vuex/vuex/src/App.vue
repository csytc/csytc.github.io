<template>
  <div>
    <h2>{{message}}</h2>
    <hellovuex/>
    <h2>------添加state数据相关内容-------</h2>
    <button @click="updated">添加数据</button>
    <h2>{{$store.state.Info}}</h2>
    <button @click="addition">+</button>
    <button @click="subtract">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>---------App内容：getters相关信息---------</h2>
    <h2>{{$store.getters.power}}</h2>
    <h2>{{$store.getters.filters}}</h2>
    <h2>{{$store.getters.more20length}}</h2>
    <h2>{{$store.getters.moreAgestu(18)}}</h2>

    <h2>-----------App内容：modules的测试----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="change">修改module里的name</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
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
      },
      addCount(num){
        //1.普通提交风格
        this.$store.commit("incrementCount",num)
        //2.特殊提交风格
      //  this.$store.commit({
      //    type:"incrementCount",
      //    count:num
      //  })
      },
      updated () {
        //同步的修改方法
        //this.$store.commit("updateInfo")  ;

        //异步的修改方法，要经过actions
        // this.$store.dispatch("aUpdateInfo",{
        //   message:"我是携带的信息",
        //   success:()=>{
        //     console.log("里面已经完成了")
        //   }
        // })
        this.$store.dispatch("aUpdateInfo","我是携带的信息").then((res)=>{
          console.log("里面完成了提交")
          console.log(res);
        })
      },
      change(){
        this.$store.commit("updatename","ccc");
      },
      asyncUpdateName (){
        this.$store.dispatch("updateName")
      }
  }
    
  
}
</script>

<style>

</style>
