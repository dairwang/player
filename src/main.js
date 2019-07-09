import Vue from 'vue'
import App from './App.vue'

import './assets/css/index.css'
import './assets/css/iconfont.css'

// 饿了么UI相关  根据文档 复制粘贴
import ElementUI from 'element-ui';
// 导入饿了么 UI的样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// axios  相关 
import axios from 'axios';
// 设置默认基础地址
axios.defaults.baseURL='https://autumnfish.cn'
// 设置给原型
Vue.prototype.$axios=axios
// 路由相关   
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import slider from './components/02-slider.vue'
import result from './components/03-result.vue'
import play from './components/04-play.vue'
// 定义路由规则
const routes=[
  // 路由重定向  时展现跟标签时,出现的是走马灯效果  自定义的是路径 
  {path:'/',redicret:'/slider'},
  {path:'/slider',component:slider},
  {path:'/result/:search',component:result},
  {path:'/play/:id',component:play},

]

const router =new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
