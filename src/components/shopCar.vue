<template>
  <div class="shopCar">
    <div class="shopCar-header">
      <p><i class="el-icon-arrow-left" @click="black"></i></p>
      <p><span>购物车</span></p>
      <p><i class="el-icon-menu"></i></p>
    </div>
    <foot></foot>
  </div>

</template>
<style>
.shopCar-header{
  width: 100%;
  height:49px;
  background: green;
  color: #fff;
  display: flex;
  align-items: center;
}
.shopCar-header p:nth-child(2){
    width: 80%;
  }
.shopCar-header p:nth-child(1){
  width: 10%;
}
.shopCar-header p:nth-child(3){
  width: 10%;
}
</style>
<script>
  import foot from "./foot"
  export default{
      name:"shopCar" ,
//      data(){
//
//      },
     components:{
      foot
    },
    methods:{
      black(){
        this.$router.go(-1)
      }
    }
    }
</script>
