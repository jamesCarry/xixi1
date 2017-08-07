<template>
   <div class="lunbo">
     <el-carousel trigger="click">
       <el-carousel-item v-for="item in arr" key="item">
           <img :src="item.src">
       </el-carousel-item>
     </el-carousel>
   </div>

</template>

<style>
  .el-carousel__container{
    height:150px;
  }
  .el-carousel__indicator.is-active button{
    background-color: red;
  }
  .el-carousel__button{
    background-color: #42b983;
  }
  .el-carousel__item {
      width: 100%;
      height:150px ;
  }
   img{
    width: 100%;
    height:100%;
     margin-left: 0;
  }
</style>

<script>

    export default {
        name: "lunbo",
      data () {
        return {
          arr:[
            {
              src: require('../../static/img/l1.jpg')
            },
            {
              src: require('../../static/img/l2.jpg')
            }
          ]

        }
      }
    }
</script>
