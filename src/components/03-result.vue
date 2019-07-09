<template>
     <div class="result-wrapper">
      <div class="song" v-for='(item) in songList' :key='item.id'>
        <div class="name">
          <span class="iconfont icon-play" @click='toPlay(item.id)'></span>
          {{item.name}}
          <span class="iconfont icon-editmedia"></span>
        </div>
        <div class="singer">{{item.artists[0].name}}</div>
        <div class="album">《{{item.album.name}}》</div>
        <div class="time">{{item.duration}}</div>
      </div>
    </div> 
</template>

<script>
import axios from 'axios';
export default {
 name:'result',
data(){
    // 定义一个歌曲数组来接收返回的数据
  return{
      songList:[]
  }  
},
methods: {
    getSongs(){
        axios.get(`https://autumnfish.cn/search?keywords=${this.$route.params.search}`).then(backData=>{
        // console.log(backData);
        this.songList=backData.data.result.songs
    })
    },
    // 当当点击播放歌曲时  跳转到播放组件 根据歌曲id播放歌曲 现在去做播放组件
    toPlay(id){
                    // 使用模板字符串传值  因为id不确定
        this.$router.push(`/play/${id}`)
    }
},
//设置侦听器 watch 侦听search 值的变化 变化了 就法送 axiox 请求  所以把请求数据抽取为方法 
watch: {
    // 强制变为字符串 因为对象中不支持  .   要监听哪个数据就将那个数据作为函数=名称即可 ,不是在使用这个数据就不用加this 
    // 在数据改变时调用这方法
    '$route.params.search'(){ 
       this.getSongs()  
    }
},
created() {
// 在数据初始化完成时调用这个方法 
   this.getSongs()
},
}

</script>

<style>

</style>
