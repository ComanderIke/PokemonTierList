import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import List from './components/List'
import PokemonDetail from './components/PokemonDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:name',
      name: 'detail',
      component: PokemonDetail
    }
  ]
})
