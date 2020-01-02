<template>
 <div>
   <slot></slot>
   <div class="block">
          <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10,20,30,40]"
          :page-size="40"
          layout="total,sizes,prev,pager,next,jumper"
          :total="40"
      ></el-pagination>
    </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      currentPage: 1,
      allPages: 40,
      nowPages: 1
     }
   },
   components: {

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