<template>
    <div class="home">
     <header>
       <p class="left"><a @click="a">注册</a><a @click="b">登录</a></p>
       <p class="mid">西西麦诺旗舰店</p>
       <p class="R" @click="cli"></p>
     </header>
      <lunbo></lunbo>
      <fenlei></fenlei>
      <shoplist></shoplist>
      <foot></foot>
    </div>
</template>
<script>
  import lunbo from './lunbo'
  import fenlei from './fenfei'
  import shoplist from './shoplist'
  import foot from './foot'

  export default {
    name: 'home',
    data(){
      return{

      }
    },
    components:{
      lunbo,
      fenlei,
      shoplist,
      foot
    },
    methods:{
      a(){
        this.$router.push("/register")
      },
      b(){
        this.$router.push("../user")
      },

      cli() {
        // push 跳转页面，replace也是，但是replace没有浏览器历史纪录
        this.$router.push('../fication');
      }
    },

  }

</script>
<style>
header{
  width: 100%;
  height:49px;
  background-color:green ;
  display: flex;
  align-items: center;
  overflow: hidden;
}
 .left{
   width: 20%;
 }
 .left a{
   margin-left: 8%;
   font-size: 10px;
   color: #fff;
 }
  .mid{
    width: 60%;
    color: #fff;
  }
  .R{
    width: 10%;
    height:50%;
    background-color: red;
    margin-left: 5%;
    background:url("../../static/img/iconall.png") no-repeat 0px -28px;
    background-size: 600%;
  }
</style>

