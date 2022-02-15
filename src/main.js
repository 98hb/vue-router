import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find'//@是src的绝对地址
import My from '@/views/My'//@是src的绝对地址
import Part from '@/views/Part'//@是src的绝对地址
import NotFound from '@/views/NotFound'//@是src的绝对地址
import Recommend from '@/views/Second/Recommend'//@是src的绝对地址
import Ranking from '@/views/Second/Ranking'//@是src的绝对地址
import SongList from "@/views/Second/SongList"
// 目标: vue-router基础使用
// 1. 下载vue-router (yarn add vue-router)
// 2. 引入
import VueRouter from "vue-router"

// 3. 注册全局组件
Vue.use(VueRouter)
// 4. 规则数组
const routes = [
  {
    path: "/",//默认hash值   是 /路径
    redirect: "/my"//redirect 是设置要重定向到哪个路径
  },
  {
    path: "/find",
    name: "Find",
    component: Find,
    children: [
      {
        path: "recommend",
        component: Recommend
      },
      {
        path: "ranking",
        component: Ranking
      },
      {
        path: "songlist",
        component: SongList
      },
    ]
  },
  {
    path: "/my",
    name: "My",
    component: My
  },
  {
    path: "/part",
    name: "Part",
    component: Part
  },
  {
    path: "/part/:username",//有 : 的路径  代表要接受具体的值
    component: Part
  },
  {//路由404页面必须放在最后 path:"*"
    path: "*",
    component: NotFound
  }
]

// 5.生成路由对象
const router = new VueRouter({
  // routes: routes 
  routes,//routes是固定的key(传入规则数组)
  // mode:""  默认不写是"hash"
  // mode: "history"//配合服务器端支持，否则找的是文件夹
})
Vue.config.productionTip = false
//6. 路由对象注入到vue实例中,this可以访问$route和$router
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
