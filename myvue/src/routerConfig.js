export default [
  {
    path: '/',
    component: resolve => require(['./components/index.vue'], resolve)
  },
  {
    path: '/register',
    component: resolve => require(['./components/register.vue'], resolve)
  },
  {
    path: '/login',
    component: resolve => require(['./components/login.vue'], resolve)
  }
]