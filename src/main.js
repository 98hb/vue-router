import Vue from 'vue'
import App from './App.vue'
// 方式3: 引入所有vant组件
import Vant from "vant"
import 'vant/lib/index.css'//引入vant所有组件样式
Vue.use(Vant)//全局注册vant所有组件
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
