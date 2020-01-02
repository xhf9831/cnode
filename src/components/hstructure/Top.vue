<template>
 <div class="top">
    <div class="title">
      <div class="name" v-for="(item, index) in list" :key="index">
        <div :class="{bg:num !== index}" @click="clickItem(index)" >{{ item.name }}</div>
      </div>
    </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       list: [
        {
          name: "全部"
        },
        {
          name: "精华"
        },
        {
          name: "分享"
        },
        {
          name: "问答"
        },
        {
          name: "招聘"
        },
        {
          name: "客户端测试"
        }
      ],
      num:0
     }
   },
   components: {

   },
   methods: {
    clickItem(index){
      this.num = index
    }
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
.top{
  margin-top: 10px;
}
.bg{
  background: white;
  color:#80D81B;
}
.title{
  display: flex;
  background: white;
  .name{
    background: #80D81B !important;
    margin:10px 20px 10px 20px;
    color: white !important;
    cursor: pointer;
    &:hover{
      color: #5BC0DE;
    }
  }
}
</style>