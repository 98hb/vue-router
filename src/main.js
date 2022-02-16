import Vue from 'vue'
import App from './App.vue'
import { Form, Field } from 'vant';

Vue.use(Form,Field);
Vue.use(Field);
/* // 方式3: 引入所有vant组件
import Vant from "vant"//(方式3)
import 'vant/lib/index.css'//引入vant所有组件样式//(方式3)
Vue.use(Vant)//全局注册vant所有组件 *///(方式3)
// 方式1:全局 - 自动按需引入vant组件
// (1): 下载 babel-plugin-import
// (2): baebel.config.js - 添加官网说的配置 (一定要重启服务器)
// (3): main.js 按需引入某个组件,Vue.use全局注册 - 某个.vue文件中直接使用vant文件
import { Button } from 'vant'//(方式1)
Vue.use(Button)//(方式1)//Button组件全局注册,真正注册的组件名VanButton
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
