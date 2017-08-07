<template>
  <div class="search">
    <ul class="top">
      <li>搜索</li>
      <li><i class="el-icon-close"></i></li>
    </ul>
    <el-input placeholder="搜索商品" icon="search" v-model="input2" :on-icon-click="handleIconClick" class="ww" >
    </el-input>
    <div class="c123">
      <div v-for="item in sea " v-show="isH" @click="changes">
        {{myfilter(item.title)}}
      </div>
    </div>
    <p class="hot">热门搜索</p>
    <ul class="title-list">
      <li v-for="item in items">{{item.title}}</li>
    </ul>
    <foot></foot>
  </div>
</template>

<script>
  import axios from"axios"
  import foot  from "./foot"
  export default {
    name: 'search',
    data(){
      return {
        input2: '',
        sea:true,
        isH:false,
        items:true
      }
    },
    components:{
      foot
    },
    created(){
      let that=this;
      axios.get("static/json/fenLei.json").then(function (response) {
        console.log(response)
        that.sea=response.data.items
//        console.log(that.sea)
      }).catch(function (err) {
        console.log(err)
      });
      axios.get("static/json/search.json").then(function (response) {
        that.items = response.data.items1
//        console.log(that.items)
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {
      handleIconClick:function(ev) {
        console.log(ev);
      },
      myfilter:function(value){
        if(value.indexOf(this.input2)>-1){
          return value
        }
        this.isH=true
      },
      changes:function(e){
        if(e.target){
          let ww=document.querySelector(".ww");
          let inp=ww.getElementsByTagName("input");
          console.log(inp.value);
          inp.value=e.target.innerHTML;
          this.input2=inp.value;
          console.log(this.input2)
        }
        this.isH=false;
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .top{
    width: 100%;
    background: green;
    height:49px;
    display: flex;
    align-items: center;
  }
  .top li:first-child{
    flex: 85%;
    color: white;
  }
  .top li:last-child{
    flex: 15%;
    color: white;
  }
  .el-input{
    width: 90%;
    margin-top: 10px;
  }
  .search{
    margin-top: 10px;
  }
  .c123 div{
    width: 90%;
    margin: auto;
    text-align: left;
    text-indent: 10px;
    font-size: 14px;
    color: #333333;
    background: white;
  }
  .hot{
    margin-top: 20px;
  }
  .title-list{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .title-list li{

    height: 30px;
    line-height: 30px;
    font-size: 12px;
    background: white;
    margin-top: 10px;
  }
</style>

