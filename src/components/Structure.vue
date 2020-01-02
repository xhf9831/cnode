<template>
 <div>
   <el-container class="el__head">
    <el-header><top></top></el-header>
    <el-container style="min-wideth:1080px">
      <el-main style="flex:3"><router-view></router-view></el-main>
      <el-aside style="flex:0.7;margin-right:5%"><right></right></el-aside>
    </el-container>
    <el-footer class="el__head"><foot></foot></el-footer>
   </el-container> 
 </div>
</template>

<script>
import top from './cstructure/Top'
import right from './cstructure/Right'
import foot from './cstructure/Foot'
 export default {
   data () {
     return {

     }
   },
   components: {
     top,
     right,
     foot
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

</style>