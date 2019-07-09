<template>
    <div id="player">
        <h2 class="title">黑马 云音乐</h2>
      <div class="search">
        <input type="text" v-model.trim='search' @keyup.enter='searchMusic' />
        <button>
          <span class="iconfont icon-search" @click='searchMusic' ></span>
        </button>
      </div>
    </div>
</template>

<script>
export default {
    name:'searchBar',
    data(){
       return{
           search:''
       } 
    },
methods: {
    searchMusic(){
        if(this.search==''){
            // 使用饿了么UI 的一个插件来提示  按照文档复制过来
        this.$message({
          message: '搜索不能为空哦',
          type: 'warning'
        });
        }else{
            this.$router.push(`/result/${this.search}`)
        }
    }
},
}
</script>

<style>

</style>
