<template>
    <div class="xq">
      <div class="header">
        <p><i class="el-icon-arrow-left" @click="black"></i></p>
        <p>商品详情</p>
        <p><i class="el-icon-search"></i></p>
      </div>
        <div class="picShow" ><img :src="one.src" alt=""></div>
        <p class="tit">{{one.title}}</p>
      <p class="price"><span><i>促销价：</i>{{one.nprice}}</span><span>{{one.oprice}}</span></p>
      <p class="btn"><button>加入购物车</button><button>立即购买</button></p>
<foot></foot>
    </div>

</template>
<style>
  .header{
    width: 100%;
    height:50px;
    display: flex;
    align-items: center;
    background: green;
    border-bottom: 1px solid black;
    color: white;
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
.picShow img{
  width: 90%;
}
  .tit{
    font-size: 14px;
  }
 .price{
   width: 100%;
   height: 20px;
   line-height: 20px;
   margin-top: 20px;
   border-bottom: 1px solid grey;
 }
 .price span:first-child{
   color:red;
   font-size: 16px;
   float: left;
   margin-left: 5%;
 }
  .price span:last-child{
    font-size: 14px;
    float: left;
    color: darkgrey;
    text-decoration: line-through;
  }
  .btn{

  }
</style>
<script>
  import axios from "axios"
  import foot from "./foot"
    export default {
        name: "xq",
      components: {
          foot
        },
        data() {
            return {
              title:"",
              index:"",
              content:[],
              one:{}
            }
        },
      mounted(){
        this.one = this.$route.query.id
        console.log(this.one)
      },
        methods: {
          black(){
            this.$router.go(-1)
          },

        },
        created() {

        }
    }
</script>
