<template>
    <div class="shopShow">
        <div class="shopShow-header">
          <p><i class="el-icon-arrow-left" @click="black"></i></p>
          <p><span>列表展示</span></p>
          <p>类目</p>
        </div>
        <div class="shop-pic">
            <dl v-for="(item,index) in arr[d].details">
              <router-link :to="{path:'/xq',query:{id:item}}">
                <dt><img :src="item.src" alt=""></dt>
                <dd>{{item.title}}</dd>
                <dd>价格：<span class="nprice">{{item.nprice}}</span><span class="oprice">{{item.oprice}}</span></dd>
              </router-link>
            </dl>
        </div>
    </div>

</template>
<style>
  .shopShow-header{
    width: 100%;
    height:49px;
    background: green;
    color: #fff;
    display: flex;
    align-items: center;
  }
  .shopShow-header p:nth-child(2){
    width: 80%;
  }
  .shopShow-header p:nth-child(1){
    width: 10%;
  }
  .shopShow-header p:nth-child(3){
    width: 10%;
    font-size: 10px;
  }
  .shop-pic{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  .shopShow dl{
    width:50%;
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
  import axios from "axios"

  export default{
    name: "shopshow",
    data () {
        return {
          d:"",
          arr:[]
        }
      },
    mounted(){
      this.d = this.$route.query.id
//      console.log(this.d)
    },
    created(){
      let that = this;
      axios.get("static/json/fication-1.json").then(function (res) {
//        console.log(res);
        that.arr = res.data;
//        console.log(that.arr)
      })
    },

      methods:{
        black(){
          this.$router.go(-1)
        }
      },

    }
</script>
