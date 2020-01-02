<template>
  <div>
    <div v-if="$route.path==='/home'" class="first bg">
      <div>      
        <div>Node.js专业中文社区</div>
        <span>您可以 <a href="">登录</a> 或 注册 , 也可以 </span><br /><br />
        <el-button type="primary" @click="go('/login')">通过git登录</el-button>
      </div>
      <!-- <div v-if="user">
        <div>欢迎{{user.name}}来到cnode社区</div>
        <div>当前积分：0</div>
        <div>“这个人很懒，什么都没留下”</div>
      </div> -->
    </div>
    <div v-else-if="$route.path==='/detail'" class="first bg">
      <div>作者</div>
      <div>
        <div><img src="list.author.avatar_url" alt=""></div>
        <div></div>
      </div>
    </div>
    
    <div class="second bg">
      <div><img class="each" src="../../images/a1.jpg" alt="" /></div>
      <div><img src="../../images/a2.jpg" alt="" /></div>
      <div><img src="../../images/a3.jpg" alt="" /></div>
    </div>
    <div class="third bg">
      <div class="title">
        无人回复的话题
      </div>
      <div class="zc">如何学习js</div>
      <div class="zc">发现一个用node.js做的后台权...</div>
      <div class="zc">请问有谁了解 VuePress JAMSt...</div>
      <div class="zc">RabbitMQ 消费端服务限流实践</div>
      <div class="zc">Alfred 4 Workflow Open in VSCode</div>
    </div>
    <div v-if="$route.path==='/home'" class="forth bg">
      <div class="title">
        积分榜 TOP 100 >>
      </div>
      <div class="zc">21725&nbsp;&nbsp;i5ting</div>
      <div class="zc">15650&nbsp;&nbsp;alsotang</div>
      <div class="zc">9350&nbsp;&nbsp;leapon</div>
      <div class="zc">9030&nbsp;&nbsp;atian25</div>
      <div class="zc">8780&nbsp;&nbsp;jiyinyiyong</div>
      <div class="zc">7305&nbsp;&nbsp;yakczh</div>
      <div class="zc">6815&nbsp;&nbsp;im-here</div>
      <div class="zc">6095&nbsp;&nbsp;DevinXian</div>
      <div class="zc">5815&nbsp;&nbsp;chapgaga</div>
      <div class="zc">5350&nbsp;&nbsp;magicdawn</div>
    </div>
    <div v-if="$route.path==='/home'" class="fixth bg">
      <div class="title">
        友情社区
      </div>
      <div><img class="each" src="../../images/h1.png" alt="" /></div>
      <div><img src="../../images/h2.png" alt="" /></div>
      <div><img src="../../images/h3.png" alt="" /></div>
      <div><img src="../../images/h4.png" alt="" /></div>
    </div>
    <div v-if="$route.path==='/home'" class="sixth bg">
      <div class="title">
        客户端二维码
      </div>
      <div class="ma">
        <img src="../../images/e.png" alt="" />
      </div>
      <div class="zc" style="text-align: center">客户端源码地址</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user:''
    };
  },
  components: {

  },
  methods: {
    go(data){
      this.$router.push(data)
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'))
    console.log(this.user);
  },
  created() {

  },
  filters: {
    
  },
  computed: {

  }
};
</script>

<style scoped lang="scss">
.zc{
  color:#ababab;
  font-size: 14px;
}
.ma{
  text-align: center;
}
.title{
  margin-bottom: 20px
}
.bg{
  background: white;
  margin-top:20px;
  padding: 10px;
}
  .first{
    margin-top: 30px;
  }
  .second{
    img{
      margin-top: 10px;
      width:100%
    }
    .each{
      margin: 0;
    }
  }
  .third{
    overflow: hidden;
  }
  .fixth{
    img{
      margin-top: 10px;
      width:50%
    }
    .each{
      margin: 0;
    }
  }
  .sixth{
    img{
      width: 50%;
    }
  }
</style>
