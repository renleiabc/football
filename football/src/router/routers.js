/*
 * @Author: renlei
 * @Date: 2018-10-29 17:27:33
 * @LastEditors: renlei
 * @LastEditTime: 2019-10-22 17:27:22
 * @Description: 
 */
/**
 * Created by renleilei on 18-3-1.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//引入创建的四个页面
import Main from '@/components/Main'
import Home from '@/components/Home'
import Match from '@/components/Match'
import Me from '@/components/Me'
import Star from '@/components/Star'
import MatchDetails from '@/config/MatchDetails'

Vue.use(VueRouter)//使用路由插件
Vue.use(VueResource)

export default new VueRouter({
 // mode: 'history',
  base: __dirname,
  linkActiveClass: "active",
  routes: [
    {name: 'Home', path: '/', component: Home, redirect: '/home'},//默认定向
    {
      name: 'Main',
      path: '/',
      component: Main,
      children: [
        //页面组件与path指定的路由相关联
        {name: 'Home', path: 'home', component: Home},
        {name: 'Match', path: 'match', component: Match},
        {name: 'Star', path: 'star', component: Star},
        {name: 'Me', path: 'me', component: Me},
      ]
    },
    {
      name:'MatchDetails',
      path:'/match/:id',
      component:MatchDetails,
    }

  ],

})
