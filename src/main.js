import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find'//@是src的绝对地址
import My from '@/views/My'//@是src的绝对地址
import Part from '@/views/Part'//@是src的绝对地址
// 目标: vue-router基础使用
// 1. 下载vue-router (yarn add vue-router)
// 2. 引入
import VueRouter from "vue-router"
// 3. 注册全局组件
Vue.use(VueRouter)
// 4. 规则数组
const routes = [
  {
    path: "/find",
    component: Find
  },
  {
    path: "/my",
    component: My
  },
  {
    path: "/part",
    component: Part
  }
]

// 5.生成路由对象
const router = new VueRouter({
    // routes: routes 
    routes//routes是固定的key(传入规则数组)
  })
Vue.config.productionTip = false
//6. 路由对象注入到vue实例中,this可以访问$route和$router
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
