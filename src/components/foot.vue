<template>
    <div class="foot">
        <div class="foot-top">
          <p>
            <a @click="Sign">登录</a><i>|</i><a @click="register
">注册</a>
          </p>
          <p><a>关于我们</a><i>|</i><a>帮助中心</a></p>
        </div>
      <div class="footer">
        <p>全国免费专线400-800-2000</p>
        <p class="fond">ICP备案号 ：粤ICP备12012571号-1</p>
        <p class="fond">&copy;2006-2015 西西麦诺版权所有</p>
      </div>
      <div id="di"></div>
    </div>
</template>
<style>
  .foot{
    margin-top: 10px;
    background-color: white;
  }
.foot-top{
  width: 100%;
  height:60px;
  line-height: 60px;
  display: flex;
}
.foot-top p:first-child{
  width: 35%;
}
  .foot-top p:last-child{
    width: 65%;
    margin-left: 25%;
  }
.foot-top p i{
  margin:0 5%;
}
.foot-top p a{
  font-size: 14px;
}
#di{
    width: 100%;
    height:50px;
  }
  .fond{
    font-size:14px;
    color: #94989B;
  }
</style>
<script>
    export default {
        name: "foot",
      data(){
          return{

          }
      },
      methods:{
        Sign(){
          this.$router.push("/user")
        },
        register(){
          this.$router.push("/register")
        }
      }
    }

</script>
