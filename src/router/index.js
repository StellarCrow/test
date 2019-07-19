import Vue from 'vue'
import Router from 'vue-router'
import AppPage from '../components/AppPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppPage',
      component: AppPage
    }
  ],
  mode: 'history'
})
