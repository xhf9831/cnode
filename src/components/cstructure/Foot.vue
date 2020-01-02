<template>
 <div class="finally">
    <div class="top">
      <span>
        RSS <span>|</span> 源码地址
      </span>
    </div>
    <div class="zc">
      CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
    </div>
    <div class="picture zc">
      <span>
        服务器赞助商为
          <img class="pic1" src="../../images/b1.png" alt=""/>存储赞助商为
          <img class="pic2" src="../../images/b2.png" alt="" />由
          <img class="pic3" src="../../images/b3.png" alt="" />提供应用性能服务。
      </span>
    </div>
    <div class="zc">
      <span>
        新手搭建 Node.js 服务器，推荐使用无需备案的
        <span class="teshu">
          DigitalOcean(https://www.digitalocean.com)
        </span>
      </span>
    </div>
  </div>
</template>

<script>
 export default {
   data () {
     return {

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
.teshu{
  color: #00A5E2;
}
.zc{
  color:#ABABAB
}
.finally{
  margin-top: 30px; 
  background: white;
  padding: 20px 60px;
  font-size: 13px;
  .top{
    margin-bottom: 10px;
  }
  .picture{
    margin-top: 30px;
    .pic1{
      width: 100px;
    }
    .pic2{
      width: 150px;
    }
  }
}
</style>