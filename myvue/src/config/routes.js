/* eslint-disable*/
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入创建的四个页面

import Home from '@/view/Home.vue'
import Explorer from '@/view/Explorer.vue'
import Cart from '@/view/Cart.vue'
import Me from '@/view/Me.vue'
//使用路由实例插件
Vue.use(VueRouter)

export default new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
	//将页面组件与path指定的路由相关联
	{path:'/home',component:Home},
	{path:'/explorer',component:Explorer},
	{path:'/cart',component:Cart},
	{path:'/me',component:Me}
	]
})