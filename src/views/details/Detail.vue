<template>
  <div>
    <div class="details">
      <div class="title">
        <div v-if="list.top === true"><span class="top">置顶</span></div>
        <div class="l-title">{{ list.title }}</div>
      </div>
      <div class="des">
        <div class="time" v-if="list.day">
          <span class="dian">·</span>发布于{{ list.day }}天前
        </div>
        <div class="time" v-else-if="list.month">
          <span class="dian">·</span>发布于{{ list.month }}月前
        </div>
        <div class="time" v-else-if="list.hour">
          <span class="dian">·</span>发布于{{ list.hour }}小时前
        </div>
        <div class="time" v-else-if="list.min">
          <span class="dian">·</span>发布于{{ list.min }}分钟前
        </div>
        <div class="time" v-if="list.author">
          <span class="dian">·</span>作者{{ list.author.loginname }}
        </div>
        <!--          判断时间-->

        <div class="time">
          <span class="dian">·</span>{{ list.visit_count }}次浏览
        </div>
        <div class="time" v-if="list.tab === 'share'">
          <span class="dian">·</span>来自分享
        </div>
        <div class="time" v-else-if="list.tab === 'ask'">
          <span class="dian">·</span>来自问答
        </div>
      </div>

      <!--      盒子装顶部-->

      <div id="content" v-html="list.content">
        {{ list.content }}
      </div>

      <!--      中间内容-->
    </div>
    <div id="finally">
      <div class="rep">
        <span>{{ list.reply_count }}回复</span>
      </div>
      <div v-for="(item, index) in list.replies" :key="index" class="content">
        <div class="box">
          <div class="box1">
            <div class="h-photo">
              <img :src="item.author.avatar_url" />
            </div>
            <div class="box2">
              <div>
                {{ item.author.loginname }}
              </div>
              <div class="r-writer">{{ index + 1 }}楼</div>
              <div class="r-writer" v-if="item.day"><span class="teshu">·</span>{{ item.day }}天前</div>
              <div class="r-writer" v-else-if="item.month"><span class="teshu">·</span>{{ item.month }}月前</div>
              <div class="r-writer" v-else-if="item.hour"><span class="teshu">·</span>{{ item.hour }}小时前</div>
              <div class="r-writer" v-else-if="item.min"><span class="teshu">·</span>{{ item.min }}分钟前</div>
              <div v-if="item.author.loginname === list.author.loginname" class="writer">
                作者
              </div>
            </div>
          </div>
          <div class="r-content"><span v-html="item.content"></span></div>
        </div>
        <div>
          <div>
            <img class="dz" src="../../images/dz.svg" alt="">
            {{ item.ups.length }}
          </div>
        </div>
      </div>
    </div>

    <!--    下方评论区-->
  </div>
</template>

<script>
 export default {
   data () {
     return {
       id:'',
       list:[]
     }
   },
   components: {

   },
   methods: {
     getData () {
      this.$axios
      .req(`/topic/${this.id}`)
      .then(res => {
        this.list = res.data
        console.log(this.list);
        let nowtime = Date.now(); //取得现在的时间戳
          // this.detail.replies.map(item => {
          let differ = nowtime - this.$dayjs(this.list.create_at).valueOf(); //获取创建文件的时间戳
          let times = differ / 1000 / 60 / 60; //时间转换成小时
          if (times < 1) {
            let mins = Math.floor(times * 60);
            this.$set(this.list, "min", mins);
          } else if (times > 24 && times < 720) {
            let days = Math.ceil(times / 24);
            this.$set(this.list, "day", days);
          } else if (times > 720) {
            let month = Math.ceil(times / 720);
            this.$set(this.list, "month", month);
          } else {
            let hours = Math.floor(times);
            this.$set(this.list, "hour", hours);
          }
           this.list.replies.map(item => {
            let difference = nowtime - this.$dayjs(item.create_at).valueOf();
            let time = difference / 1000 / 60 / 60;
            if (time < 1) {
              let min = Math.floor(time * 60);
              this.$set(item, "min", min);
            } else if (time > 24 && time < 720) {
              let day = Math.ceil(time / 24);
              this.$set(item, "day", day);
            } else if (time > 720) {
              let month = Math.ceil(time / 720);
              this.$set(item, "month", month);
            } else {
              let hour = Math.floor(time);
              this.$set(item, "hour", hour);
            }
          });
      }).catch(err => {
        console.log(err)
      })
     }
   },
   mounted() {
     this.id = this.$route.query.id
     this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.r-content{
  margin-left: 30px;
}
.dz{
  width: 14px;
  height: 14px;
}
.r-writer{
  color: #0088CC;
  font-size: 13px;
}
.teshu{
  color: #0088CC;
  font-weight: 800;
}
.dian{
  font-weight: 800;
  color: #B4B4B4 ；
}
.time{
  margin-top: 10px;
  font-size: 12px;
  color: #B4B4B4
}
.details{
  margin-top: 10px;
  background: white;
  padding: 20px;
  .title{
    display: flex;
    div{
      margin-right:20px;
      line-height: 30px;
      .top{
        background: #80D81B;
        color: white;
        padding: 2px 4px;
      }
    }
    .l-title{
      font-size: 30px;
      font-weight: 800;
    }
  }
  .des{
    display: flex;
  }
}
#finally{
  margin-top: 20px;
  background:white;
  .rep{
    padding: 10px;
  }
  .content{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    border-bottom: 1px solid gray; 
    .box{
      
      .h-photo{
        img{
          width: 30px;
          height: 30px;
        }
      }
      .box1{
        display: flex;
        .box2{
          display: flex;
        }
      }
    }
  }
}
</style>