<template>
  <div class="register">
    <div class="register-header">
      <p><i class="el-icon-arrow-left" @click="black"></i></p>
      <p><span>注册</span></p>
      <p><i class="el-icon-menu"></i></p>
    </div>
    <ul class="input-list">
      <li>
        <input type="text" placeholder="请输入用户名" id="userName"><br>
        <span></span>
      </li>
      <li>
        <input type="password" placeholder="请输入密码" id="passWord"><br>
        <span></span>
      </li>
      <li>
        <input type="email" placeholder="请输入邮箱" id="email"><br>
        <span></span>
      </li>
      <li class="lastLi">
        <input type="tel" placeholder="请输入手机号" id="Telephone"><br>
        <span></span>
      </li>
      <p class="xy"><input type="checkbox" id="checked" checked="checked"><span>我已看过并接受<i>《用户协议》</i></span></p>
      <p class="next"><el-button plain @click="next">下一步</el-button></p>
    </ul>
    <foot></foot>
  </div>
</template>
<style>
  .register-header{
    width: 100%;
    height:49px;
    background: green;
    color: #fff;
    display: flex;
    align-items: center;
  }
  .register-header p:nth-child(2){
    width: 80%;
  }
  .register-header p:nth-child(1){
    width: 10%;
  }
  .register-header p:nth-child(3){
    width: 10%;
  }
  .input-list{
    width: 100%;
    margin-top: 10px;
  }
  .lastLi{
    border-bottom: 1px solid grey;
  }
  .input-list li{
    width: 100%;
    height:50px;
    padding-top: 10px;
    border-top:1px solid grey;
  }
  .input-list li input{
    height: 20px;
    width: 90%;
  }
  .input-list li span{
    margin-left: 5%;
  }
  .xy{
    width: 100%;
    height:30px;
    line-height: 30px;
  }
  #checked{
    float: left;
    margin-top: 10px;
    margin-left: 5%;
  }
  .xy span{
    float: left;
    margin-left: 2%;
    font-size: 10px;
  }
  .xy i{
    color:blue;
  }
  .next{
    width: 100%;
  }
  #btn{
    width: 90%;
    height: 30px;
    background-color: red;
    color: #fff;
    border:none;
    outline: none;
  }
</style>
<script>
  import foot from "./foot"
  import axios from "axios"
  export default {
    name: "user",
    components: {
      foot
    },
    data() {
      return {
        username:true,
        password: true,
        email: true,
        phone: true,
        spans: true,
        bol1: true,
        bol2: true,
        bol3: true,
        bol4: true,
        obj:true
      }
    },
    methods: {
      next() {
        let that = this
        let spans = document.querySelectorAll("span");
//          console.log(spans)
        let username = document.querySelector("#userName").value;
        let useReg = /^[\u4e00-\u9fa5]{2,5}$/;
        if (useReg.test(username)) {
          spans[1].innerHTML = "";
          that.bol=true;
        } else {
          spans[1].innerHTML = "用户名输入错误";
          spans[1].style.color = "red";
          that.bol = false;
        }
//        console.log(username)
          let password = document.querySelector("#passWord").value;
          let passReg = /^\w{6,18}$/;
          if (passReg.test(password)) {
            spans[2].innerHTML = "";
            that.bol2 = true;
          } else {
            spans[2].innerHTML = "密码输入错误";
            spans[2].style.color = "red";
            that.bol2 = false;
          }
//        console.log(password)
          let email = document.querySelector("#email").value;
          let emReg = /^\w+@[a-z]{2,4}\.[a-z]{2,4}$/;
          if (emReg.test(email)) {
            spans[3].innerHTML = "";
            that.bol3 = true;
          } else {
            spans[3].innerHTML = "邮箱输入错误";
            spans[3].style.color = "red";
            that.bol3 = false;
          }
//        console.log(email)
          let phone = document.querySelector("#Telephone").value;
          let phReg = /^1[34578]\d{9}$/;
          if (phReg.test(phone)) {
            spans[4].innerHTML = "";
            that.bol4 = true;
          } else {
            spans[4].innerHTML = "手机号输入错误";
            spans[4].style.color = "red";
            that.bol4 = false;
          }
//        console.log(phone)
        if (that.bol1&&that.bol2&&that.bol3&&that.bol4) {
            console.log(username)
            axios.post("http://localhost:6500/kobe",{
              username: username,
              password: password,
              email: email,
              tel: phone
              }
            ).then((response) => {
//              console.log(response)
              that.$router.push("/user")
            })
              .catch(function (err) {
                console.log(err)
              })
        }

      },
      black(){
        this.$router.go(-1)
      }
    }
  }


</script>
