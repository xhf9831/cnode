<template>
 <div>
   <zd>
     <router-view></router-view>
   </zd>
 </div>
</template>

<script>
import zd from './components/zd/Zd'
 export default {
   data () {
     return {

     }
   },
   components: {
     zd
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
body{
  margin: 0;
  padding: 0;
  background: #E1E1E1;
}
 @import "style/common";

</style>