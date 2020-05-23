<template>
<div>
  <router-view/>
  <maintabbar></maintabbar>
</div>

</template>

<script>
import maintabbar from 'components/content/mainTabbar'
export default {
components: {
  maintabbar
}
}
</script>

<style>
  @import "assets/css/base.css";
</style>
