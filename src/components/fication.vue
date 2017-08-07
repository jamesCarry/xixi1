<template>
  <div class="fication">
    <div class="header">
      <p><i class="el-icon-arrow-left" @click="black"></i></p>
      <p>所有分类</p>
      <p><i class="el-icon-search" @click="tiao"></i></p>
    </div>
    <ul  class="fication-list">
      <li>
        <img src="../../static/img/fication1.png" alt="">
        <span>各式蛋糕</span>
        <i class="el-icon-arrow-down" v-on:click="cli1"></i>
      </li>
    </ul>
    <div v-show="isShow1" class="shopShow">
          <dl v-for="item in detail[0].details" @click="handercli(item)">
            <dt><img :src="item.src" alt=""></dt>
            <dd>{{item.title}}</dd>
            <dd>价格：<span class="nprice">{{item.nprice}}</span><span class="oprice">{{item.oprice}}</span></dd>
          </dl>
    </div>
    <ul  class="fication-list">
      <li>
        <img src="../../static/img/fication2.png" alt="">
       <span>美丽-鲜花</span>
        <i class="el-icon-arrow-down" v-on:click="cli2"></i>
      </li>
    </ul>
    <div v-show="isShow2" class="shopShow">
      <dl v-for="item in detail[5].details">
        <dt><img :src="item.src" alt=""></dt>
        <dd>{{item.title}}</dd>
        <dd>价格：<span class="nprice">{{item.nprice}}</span><span class="oprice">{{item.oprice}}</span></dd>
      </dl>
    </div>
    <ul  class="fication-list" style="border-bottom: 1px solid grey">
      <li>
        <img src="../../static/img/fication3.png" alt="">
        <span>烂漫组合</span>
        <i class="el-icon-arrow-down" v-on:click="cli3"></i>
      </li>
    </ul>
    <div v-show="isShow3" class="shopShow">
      <dl v-for="item in detail[4].details">
        <dt><img :src="item.src" alt=""></dt>
        <dd>{{item.title}}</dd>
        <dd>价格：<span class="nprice">{{item.nprice}}</span><span class="oprice">{{item.oprice}}</span></dd>
      </dl>
    </div>
    <foot></foot>
  </div>
</template>
<style>
.header{
  width: 100%;
  height:50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
}
.header p:nth-child(1){
  flex: 10%;
  margin-top: 2px;
}
.header p:nth-child(2){
  flex: 80%;
}
.header p:nth-child(3){
  flex: 10%;
 margin-top:5px ;
}
.fication-list {
  width: 100%;
  height:90px;
  border-top: 1px solid grey;
  background: white;
}
.fication-list li{
  width: 90%;
height:100%;
  margin: auto;
  box-sizing: border-box;
}
.fication-list li img{
  width: 25%;
  height:80%;
  display: inline-block;
  float: left;
  margin-top: 8px;
}
.fication-list li span{
  font-size: 16px;
  color: blueviolet;
  display: inline-block;
  margin-top: 30px;
}
.fication-list li i{
  float: right;
  margin-top: 10%;
}
.shopShow{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
}
.shopShow dl{
  width:50%;
  margin-top: 10px;
  padding-bottom: 5px;
}
.shopShow dl img{
  width: 70%;
}
.shopShow dl dd{
  font-size: 12px;
}
.nprice{
  color:#ea4b35;
}
.oprice{
  color: darkgrey;
  text-decoration: line-through;
  }
</style>
<script>
  import axios from  "axios"
  import foot from "./foot"

  export default{
      name:"fication",
    data(){
        return{
          detail:[],
          isShow1:false,
          isShow2:false,
          isShow3:false,
          arr:[]
        }
    },
    components:{
        foot
    },
    methods:{
      cli1(){
        this.isShow1=!this.isShow1;
      },
      cli2(){
        this.isShow2=!this.isShow2;
      },
      cli3(){
        this.isShow3=!this.isShow3;
      },
      black(){
        this.$router.go(-1)
      },
      tiao(){
        this.$router.push({path:'../search'})
      },
      handercli(item){
        this.$router.push({path:'../xq',query:{id:item}});
        console.log(item)
      }
        },
    created(){
      let _this = this;
      axios.get('static/json/fication-1.json')
        .then((response)=>{
        _this.detail = response.data;
        console.log(_this.detail[0].details)
      })
        .catch(function (err) {
          console.log(err)
        });
      axios.get('static/json/index.json')
        .then((response)=>{
          _this.arr = response.data;
          console.log(_this.arr.first)
        })
        .catch(function (err) {
          console.log(err)
        });
    },
    }
</script>
