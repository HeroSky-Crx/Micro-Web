import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from 'views/home'

// 挑战
import ChallangeLayout from 'views/challange'
import ChallangeVideo from 'views/challange/video'

// 社区
import Communities from 'views/communities'

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/challange',
      component: ChallangeLayout,
      children: [
        {
          path: 'video',
          component: ChallangeVideo
        }
      ]
    },
    {
      path: '/communities',
      component: Communities
    }
  ]
})
