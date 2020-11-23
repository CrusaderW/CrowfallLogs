import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/campaign_overview',
    name: 'CampaignOverviewRoute',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CampaignOverviewRoute.vue')
  },
  {
    path: '/leader_board',
    name: 'LeaderBoardRoute',
    component: () => import('../views/LeaderBoardRoute.vue')
  },
  {
    path: '/personal_logs',
    name: 'PersonalLogsRoute',
    component: () => import('../views/PersonalLogsRoute.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
