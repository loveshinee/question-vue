import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Item from '@/page/item'
import Score from '@/page/score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/item',
      component: Item
    },
    {
      path: '/score',
      component: Score
    }
  ]
})
