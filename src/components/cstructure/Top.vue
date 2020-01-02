<template>
 <div class="head">
     <img class="logo" src="../../images/cnode.svg" alt="">
     <div class="search">
      <i class="el-icon-search  icon"></i>
      <input class="inp" type="text">
     </div>
   <div class="function">
      <div class="content home">首页</div>
      <div class="content">新手入门</div>
      <div class="content">API</div>
      <div class="content">关于</div>
      <div class="content">注册</div>
      <div v-if="user" class="content" @click="go('/login')">登录</div>
      <div v-else class="content" @click="exit()">退出</div>
   </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       user:''
     }
   },
   components: {

   },
   methods: {
     go(data){
      this.$router.push(data)
    },
     exit(){
      localStorage.clear()
    }
   },
   mounted() {
     this.user = JSON.parse(localStorage.getItem('user'))
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.home{
  margin-left: 80px;
}
.head{
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  min-width: 1080px;
  .logo{
    width: 8%;
    padding-left: 110px;
  }
  .search{
    line-height: 50px;
    .icon{
      position: relative;
      left: 20px;
    }
    .inp{
      border: 1px solid black;
      border-radius: 13px;
      padding: 5px;
      background: gray;
      transition: all 0.5s;
      &:hover{
        background: white;
      }
    }
  }
  .function{
    width: 35%;
    position: relative;
    left: 30%;
    line-height: 50px;
    display: flex;
    text-align: center;
    .content{
      margin-right: 4%;
      color:white;
      cursor: pointer;
    }
  }
}
</style>