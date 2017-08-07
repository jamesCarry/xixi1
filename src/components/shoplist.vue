<template>
    <div class="shoplist">
      <div class="box">
        <h5><span class="left">精品推荐</span><span class="right">更多</span></h5>
        <div class="shopShow">
            <dl v-for="(item,index) in dataArr.items1" @click="detail1(index)">
              <dt><img :src="item.src" alt=""></dt>
              <dd>{{item.title}}</dd>
              <dd>价格：<span class="nprice">{{item.nprice}}</span><span class="oprice">{{item.oprice}}</span></dd>
            </dl>
        </div>
      </div>
      <div class="box">
        <h5><span class="left">热卖推荐</span><span class="right">更多</span></h5>
        <div class="shopShow">
          <dl v-for="(item,index) in dataArr.items2" @click="detail2(index)">
            <dt><img :src="item.src" alt=""></dt>
            <dd>{{item.title}}</dd>
            <dd>价格：<span class="nprice">{{item.nprice}}</span><span class="oprice">{{item.oprice}}</span></dd>
          </dl>
        </div>
      </div>
      <div class="box">
        <h5><span class="left">新品推荐</span><span class="right">更多</span></h5>
        <div class="shopShow">
          <dl v-for="(item,index) in dataArr.items3" @click="detail3(index)">
            <dt><img :src="item.src" alt=""></dt>
            <dd>{{item.title}}</dd>
            <dd>价格：<span class="nprice">{{item.nprice}}</span><span class="oprice">{{item.oprice}}</span></dd>
          </dl>
        </div>
      </div>
      <div class="box">
        <h5><span class="left">浪漫组合</span><span class="right">更多</span></h5>
        <div class="shopShow">
          <dl v-for="(item,index) in dataArr.items4" @click="detail4(index)">
            <dt><img :src="item.src" alt=""></dt>
            <dd>{{item.title}}</dd>
            <dd>价格：<span class="nprice">{{item.nprice}}</span><span class="oprice">{{item.oprice}}</span></dd>
          </dl>
        </div>
      </div>
    </div>

</template>
<style>
.shoplist{
    background-color: white;
  }
.box{
  width: 100%;
  margin-top: 10px;
}
h5{
  width: 100%;
  height:30px;
  line-height: 30px;
  border:1px solid gray;
  }
.left{
  float: left;
  margin-left: 2%;
  color: #348B16;
}
.right{
  float: right;
  margin-right: 2%;
  color: #348B16;
}
.shopShow{
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
    export default {
      name: "shoplist",
      data() {
        return {
          dataArr: [],
        }
      },
      created() {
        let that = this;
        axios.get("static/json/shoplist.json")
          .then((response) => {
//            console.log(response);
            that.dataArr = response.data.data;
          })
          .catch(function (err) {
            console.log(err)
          })
      },
      methods:{
          detail1(index){
            console.log(index)
            this.$router.push({
              path:"../xq",
              query:{
                id:this.index
               },
            })
            console.log()
          },
        detail2(index){
          console.log(index)
          this.$router.push({
//            path:"../shopShow",
            query:{
              id:this.data[index]
            },
          })
        },
        detail3(index){
//          console.log(index)
          this.$router.push({
//            path:"../shopShow",
            query:{
              id:this.data[index]
            },
          })
        },
        detail4(index){
          console.log(index)
          this.$router.push({
//            path:"../shopShow",
            query:{
              id:this.data[index]
            },
          })
        },
      }
    }
</script>


