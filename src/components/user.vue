<template>
  <div class="user">
    <div class="user-header">
      <p><i class="el-icon-arrow-left" @click="black"></i></p>
      <p><span>登录</span></p>
      <p><i class="el-icon-menu"></i></p>
    </div>
    <ul class="user-input">
      <li>用户名：<el-input placeholder="用户名/手机号/电子邮箱" id="user"></el-input></li>
      <li>密&nbsp;&nbsp;&nbsp;&nbsp;码：<el-input type="password" placeholder="请输入密码" id="pass"></el-input></li>
       <p class="checked"><el-checkbox></el-checkbox><span>记住本次登录</span></p><br>
      <p class="btn"><el-button @click="dl">立即登录</el-button></p>
      <p class="btns">
        <input type="button" class="btn1" value="忘记密码">
        <input type="button" class="btn2" value="免费注册" @click="register">
      </p>
    </ul>
    <foot></foot>
  </div>
</template>
<style>
  .user-header{
    width: 100%;
    height:49px;
    background: green;
    color: #fff;
    display: flex;
    align-items: center;
  }
  .user-header p:nth-child(2){
    width: 80%;
  }
  .user-header p:nth-child(1){
    width: 10%;
  }
  .user-header p:nth-child(3){
    width: 10%;
  }
 .user-input{
   width: 100%;
   margin-top: 20px;
   background: white;
 }
  .user-input li{
    width: 100%;
    height:50px;
    line-height: 50px;
    border-bottom:1px solid grey;
  }
.user-input li:first-child{
  border-top: 1px solid grey;
}
  .el-input{
    display: inline-block;
    width: 60%;

  }
  .checked{
    width: 100%;
    font-size: 14px;
    padding-top: 10px;
  }
  .checked span{
    float: left;
  }
.el-checkbox{
  float: left;
  margin-left: 10%;
}
.el-button{
  width: 90%;
  height:30px;
  margin-top: 10px;
  background: red;
  color: white;
}
.el-button:hover{
    color: white;
  }
.btn{
  margin-bottom: 10px;
}
.btns{
  width: 100%;
  height:30px;
}
.btn1{
  width: 20%;
  height:30px;
  margin-left: 5%;
  float: left;
  border:none;
  color:white;
}
.btn2{
  width: 20%;
  height:30px;
  float: right;
  margin-right: 5%;
  background-color: #E4A061!important;
  outline: none;
  border:none;
  color:white;
}
</style>
<script>
  import foot from "./foot"
  import axios from "axios"
    export default{
      name: "user",
      components:{
        foot
      },
    methods:{
      register(){
          this.$router.push("register")
        },
      black(){
        this.$router.go(-1)
      },
      dl(){
        let _this = this
        let user = document.querySelector("#user input").value;
        let pass = document.querySelector("#pass input").value;
        console.log(user)
        console.log(pass)
        axios.post("http://localhost:6500/kobe/login",{
            username:user,
            password:pass
        }).then(function (res) {
          _this.$router.push("/home")
          console.log(res)
        }).catch(function(err){
          console.log(err)
        });
      },
      created(){

      },
    }
    }
</script>
