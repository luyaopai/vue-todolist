import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/all',
        name: 'All',
        component: ()=>import('@/components/All/All.vue')
      }
    ]
  },
  

]

const router = new VueRouter({
  routes
})

export default router
