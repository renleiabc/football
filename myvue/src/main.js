/* eslint-disable*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
//import router from './config/routes'
Vue.config.productionTip = false
// 导入路由组件
import VueRouter from 'vue-router'

// 导入UI组件
import ElementUI from 'element-ui'
import 'node_modules/_element-ui@2.0.11@element-ui/lib/theme-chalk/index.css'

// 导入路由配置文件
import routerConfig from './routerConfig.js'

// 注册插件
Vue.use(VueRouter)
Vue.use(ElementUI)

// 创建路由
const router = new VueRouter({
  routes: routerConfig
})

// 初始化 leancloud-storage
import AV from 'leancloud-storage'
const APP_ID = 'tAvJucJiPN9h2Jsa4dqUB23x-gzGzoHsz'
const APP_KEY = 'DSlKWiaPIY42HNQYNkSI0mDJ'
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})
Vue.prototype.$AV = AV
/* eslint-disable no-new */
new Vue({
  el: '#app',
  //将路由实例添加到Vue事例中
  router,
  template: '<App/>',
  components: { App }
})
