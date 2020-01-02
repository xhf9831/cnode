<template>
 <div class="main">
    <top></top>
    <div v-for="(item,index) in list.slice(allPages * (nowPages - 1), nowPages * allPages)" :key="index" class="content">
      <!-- 头像 -->
      <div>
        <img :src="item.author.avatar_url" :alt="item.author.loginname">
      </div>
      <!-- 回复和浏览 -->
      <div class="revi">
        <span class="re">{{ item.reply_count }}/</span>
        <span class="vi">{{ item.visit_count }}</span>
      </div>
      <!--置顶，问答-->
      <div class="tag">
        <span class="top" v-if="item.top === true">置顶</span>
        <span class="together" v-else-if="item.tab === 'share'">分享</span>
        <span class="together" v-else-if="item.tab === 'ask'">问答</span>
      </div>
      <!-- 标题 -->
      <div class="title" @click="go(item)">
        <span class="t-content">{{ item.title }}</span>
      </div>
      <!-- 时间 -->
      <div class="shijian">
        <div v-if="item.day">{{ item.day }}天前</div>
        <div v-else-if="item.hour">{{ item.hour }}小时前</div>
        <div v-else-if="item.min">{{ item.min }}分钟前</div>
      </div>
    </div>
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
import top from '../../components/hstructure/Top'
 export default {
   data () {
     return {
      list:[],
      currentPage: 1,
      allPages: 40,
      nowPages: 1
     }
   },
   components: {
     top
   },
   methods: {
     getData () {
      this.$axios
      .req("/topics")
      .then(res => {
        this.list=res.data
        console.log(this.list);
        let nowtime = Date.now(); //获取当前时间戳
          this.list.map(item => {
            let different = nowtime - this.$dayjs(item.last_reply_at).valueOf();
            let time = different / 1000 / 60 / 60;
            if (time < 1) {
              let min = Math.floor(time * 60);
              this.$set(item, "min", min); //创建属性
            } else if (time > 24) {
              let day = Math.ceil(time / 24);
              this.$set(item, "day", day);
            } else {
              let hour = Math.ceil(time);
              this.$set(item, "hour", hour);
            }
          })
      }).catch(err => {
        console.log(err)
      })
    },
    handleSizeChange(val) {
      this.allPages = val 
    },
    handleCurrentChange(val) {
      this.nowPages = val;
      console.log(this.nowPages);
    },
    go(item){
      this.$router.push({name:"detail",query:{id:item.id}})
    }
   },
   mounted() {
      this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
img{
  width: 30px;
  height: 30px;
}
.main{
  background: white;
  .content{
    margin-left: 20px;
    display: flex;
    margin-bottom: 20px;
    .revi{
      width: 10%;
      text-align: center;
      .re{
        color:#C58DC0;
        font-size: 15px;
      }
      .vi{
        color: #B4B4B4;
        font-size: 15px;
      }
    }
    .tag{
      width: 40px;
      margin-left: 4px;
      .top{
        padding: 2px;
        border-radius: 4px;
        background: #80D81B;
        color: white;
      }
      .together{
        padding: 2px;
        border-radius: 4px;
        background: #E5E5E5;
        color: #999999;
      }
    }
    .title{
      width: 70%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .t-content{
        cursor: pointer;
        &:hover{
          text-decoration: underline;
        }
      }
    }
  }
}

</style>