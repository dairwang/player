<template>
  <div id="app">
    <!-- 入口 -->
    <!-- 出口 -->
    <!-- <router-view></router-view> -->
    <searchBar></searchBar>
  </div>
</template>


<script>

import searchBar from './components/01-searchbar'
export default {
  name: 'app',
components:{
  searchBar,
}
}
</script>

<style>

</style>
