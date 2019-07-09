<template>
      <div class="player">
    <div class="left">
      <img class='disc'  active-class='active' src="../assets/img/disc.png" alt="">
      <img class='cover' active-class='active' :src="musicPic" alt="">
    </div>
    <div class="right">
      <div class="title"><img src="../assets/img/tag.png" alt=""><span>{{musicName}}</span> </div>
      <div class="singer">歌手: <span>{{singer}}</span></div>
      <div class="album">所属专辑: <span>{{albumName}}</span></div>
      <audio class='audio' controls :src="musicUrl"></audio>
      <ul class='lyric-container'>
        <li class='lyric' v-for='item in lrcList' :key="">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name:'player',
data(){
    return {
        musicUrl:'',
        musicPic:'',
        musicName:[],
        singer:'',
        // 专辑
        albumName:'',
        lrcList:[]
    }
},
created() {
    // 获取歌曲路径
    this.$axios.get(`/song/url?id=${this.$route.params.id}`).then(backData=>{
    // console.log(backData); 
    this.musicUrl=backData.data.data[0].url
})

    // 获取歌曲详细信息
    // 进入这个页面根据id发送axios 请求 此时将axios  在main.js中导入 导入为 Vue.prototype.$axios=axios 所有这里要用的话就是 this.$axios.请求方式
    this.$axios.get(`/song/detail?ids=${this.$route.params.id}`).then(backData=>{
        // console.log(backData);
        this.musicName=backData.data.songs[0].name
        this.musicPic=backData.data.songs[0].al.picUrl
        this.albumName=backData.data.songs[0].al.name
        this.singer=backData.data.songs[0].ar[0].name
    })

    // 获取歌词 
    this.$axios.get(`/lyric?id=${this.$route.params.id}`).then(backData=>{
        // 得到是是字符串 使用字符串分割的方法 .slice('')得到数组
        this.lrcList=backData.data.lrc.lyric.split('\n')
        // 得到的是字符串组成的数组
        // this.lrcList.splice(11)
         console.log(this.lrcList);
        for(let i=0;i<this.lrcList.length;i++){
            //循环每个字符串, 去除前面11个索引 重新赋值给this.lrcList[i]
           this.lrcList[i] =this.lrcList[i].slice(11)  
        }  
    //  console.log(this.lrcList);
     
    })
},
}
</script>

<style>
  
</style>
