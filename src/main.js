import Vue from 'vue'
import App from './App.vue'

import './assets/css/index.css'
import './assets/css/iconfont.css'
// 路由相关   
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// 定义路由规则
const routes=[
  // 路由重定向
  // {path:'/search/:search',comments:searchbar}
]

const router =new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
