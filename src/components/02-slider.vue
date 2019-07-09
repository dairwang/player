
// 使用饿了么UI 制作走马灯 在uve创建的文件中安装elmui 在main.js 导包用包这里写模板 
<template>
  <el-carousel :interval="4000" arrow="always" class='mySlider' >
    <el-carousel-item v-for="(item,index) in banners" :key="index" >
      <img :src="item.pic" alt="">
    </el-carousel-item>
  </el-carousel>
</template>


<script>
// axios 可以随用随导 
import axios from 'axios'
export default {
    data(){
        return {
        // 定义一个数组,接受数据返回的封面
        banners:[]
        }
    },
  created() {
    //   下axios 包 使用axios请求数据
    axios.get("https://autumnfish.cn/banner?type=2").then(backData=>{
    this.banners=backData.data.banners
    })
  },
}
</script>

<style>

  .mySlider{
      width: 1080px;
      height: 420px;
        left: 25%;
        margin-top: 25px ;
  }
  .mySlider .el-carousel__container{
      height: 420px;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
