<template>
    <div class="fenlei">
        <div class="nav">
          <ul v-for="item in capital.first" class="fl-nav">
            <li >
              <router-link :to="item.class">
                <p><img :src="item.src" alt=""></p>
                <p>{{item.title}}</p>
              </router-link>
            </li>
          </ul>
          <ul v-for="(item,index) in detail" class="fl-nav">
              <li @click="cli(index)">
                <router-link :to="{path:'shopshow',query:{id:index}}">
                    <p><img :src="item.src" alt=""></p>
                    <p>{{item.title}}</p>
                </router-link>
              </li>
          </ul>
          <ul v-for="item in capital.last" class="fl-nav">
            <li >
              <router-link :to="item.class">
                <p><img :src="item.src" alt=""></p>
                <p>{{item.title}}</p>
              </router-link>
            </li>
          </ul>
        </div>
    </div>
</template>
<style>
.nav{
   width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background: white;
    }
.fl-nav{
  width: 25%;
  box-sizing: border-box;
  border:1px solid #e3e3e3;
  border-collapse: collapse;
}
.fl-nav li{
    width: 100%;
    margin-top:10px;
  }
.fl-nav  li img{
    width: 60%;
    margin-left: 3%;
  }
.fl-nav li p:last-child{
    font-size: 12px;
   padding-bottom: 10px;
  }
</style>
<script>
  import  axios from "axios"
    export default {
      name: "fenlei",
      data() {
        return{
         detail:[],
          index:"",
          capital:[]
       }
      },
      created(){
        let _this = this;
        axios.get("static/json/fication-1.json").then(function (res) {
          _this.detail = res.data;
//          console.log(_this.detail)
        }).catch(function (err) {
          console.log(err)
        });
        axios.get("static/json/index.json").then(function (res) {
          _this.capital = res.data;
//          console.log(_this.capital)
        }).catch(function (err) {
          console.log(err)
        })

      },
      methods:{
          cli(index){
            this.$router.push({path:"",query:{id:index}})
            this.index = index
          }
        }

      }


</script>
