<template>
    <div class="tab-bar-item" @click="btnClick()">
      <div v-if="!isActive">
        <slot  name='img'></slot>
      </div>
     <div  v-else>
       <slot name="active"></slot>
     </div>
     <div :style="color">
        <slot name="text"></slot>
     </div>
     
    </div>
</template>

<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  data () {
    return {
     // isActive:false
    }
  },methods: {
    btnClick(){
     this.$router.replace(this.path).catch(err=>{err});
     
    }
  },computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },
    color(){
      return this.isActive?{color:this.activeColor}:{}
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  height: 49px;/*tabbar高度一般为49 */
  font-size: 5px;
  
}
.tab-bar-item img{
  margin-top: 10px;
  margin-bottom: 3px;
  
}

</style>