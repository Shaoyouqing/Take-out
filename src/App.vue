<template class="app">
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>
<script>
import FooterGuide from "./components/FooterGuide/FooterGuide"
export default {
 name:'App',
 components:{
   FooterGuide
 },
 data() {
   return {
     
   }
 },
}
</script>
<style lang="stylus" ref="stylesheet/stylus">
    .app
      width 100%
      height 100%
      background #f5f5f5
</style>