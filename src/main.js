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
// 目标: 路由守卫
// 场景: 当你要对路由权限判断时
// 语法: router.beforeEach((to,from,next)=>{//路由跳转"之前"
// 先执行这里,决定是否跳转})
// 参数1: 要跳转到的路由(路由对象信息) 目标
// 参数2: 从哪里跳转的路由(路由对象信息) 来源
// 参数3: 函数体 - next()才会让路由正常的跳转切换,
// next(false)在原地停留,next("强制修改到另一个路由路径上")
// 注意: 如果不调用next,页面留在原地
// 例子: 判断用户是否登录,是否决定去"我的音乐"/my
const isLogin = false;//登陆状态(未登录)
// const isLogin = true;//登陆状态(已登录)
router.beforeEach((to, from, next) => {
  if (to.path === "/my" && isLogin === false) {
    alert("请登陆")
    next(false)
  } else {
    next()//正常显示
  }
})
// router.beforeEach((to, from, next) => {
//   console.log(to);//去 to 路由信息对象
//   console.log(from);//从根来的 "/" from
//   console.log(next);//函数体
// })
Vue.config.productionTip = false
//6. 路由对象注入到vue实例中,this可以访问$route和$router
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
