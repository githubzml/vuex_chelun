import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Denglu from '@/components/denglu'
import Register from '@/components/register'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: Denglu
    },
    {
      
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})


