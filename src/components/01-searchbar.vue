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
        // this.$router.push(`/search/${this.search}`)
    }
},
}
</script>

<style>

</style>
