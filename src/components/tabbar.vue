<template>
  <div class="tabbar">
    <router-view></router-view>
    <ul class="tab-nav">
      <li v-for="item in items" class="item.cla">
        <router-link  :to="item.url" :class="item.active">
          <p class="pic"><img :src="item.src" alt="" class="item.num"></p>
          <p class="name">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>

  export default {
    name: 'tabbar',
    data(){
      return{
        items:[
          {
            src: require("../../static/img/iconall.png"),
            url:"/",
            name:"首页",
            cla:"home",
            num:"pic1",
            active:"cla1"
          },
          {
            src: require("../../static/img/iconall.png"),
            url:"/fication",
            name:"分类",
            cla:"fication",
            num:"pic2",
            active:"cla2"
          },
          {
            src: require("../../static/img/iconall.png"),
            url:"/search",
            name:"搜索",
            cla:"search",
            num:"pic3",
            active:"cla3"
          },
          {
            src: require("../../static/img/iconall.png"),
            url:"/shopCar",
            name:"购物车",
            cla:"shopCar",
            num:"pic4",
            active:"cla4"
          },
          {
            src: require("../../static/img/iconall.png"),
            url:"/user",
            name:"我的",
            cla:"user",
            num:"pic5",
            active:"cla5"
          }
        ]
      }

    }
  }
</script>
<style>
  body{
    background-color: #f7f7f7;
  }
  .tab-nav{
    width: 100%;
    height:49px;
    border-top: 1px solid gray;
    display: flex;
    background-color: snow;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
  }
  .tab-nav li{
    width: 20%;
    line-height: 49px;
    /*text-align: center;*/
    font-size: 15px;
    list-style: none;
  }
.name{
  color:darkgrey;
  height:50%;
  line-height: 50%;
  margin-top: 10px;
  }
.pic{
  width: 50%;
  height:50%;
  position: relative;
  margin-left:25%;
  overflow: hidden;

}
.pic1{
  width: 700%;
  position: absolute;
  left: 70%;
  top:20%;
}
.pic2{
   width: 400%;
    height:50px;
    top:2px;
    left:2px;
  }
.pic3{
  width: 400%;
    height:50px;
    top:2px;
    left:-135px;
  }
.pic4{
  width: 50%;
      height:50px;
      top:2px;
      left:-30px;
    }
.pic5{
  width: 50%;
    height:50px;
    position: absolute;
    top:2px;
    left:-160px;
  }
</style>
