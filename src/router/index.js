import { createRouter, createWebHistory } from 'vue-router'
import { trackRouter } from "vue-gtag-next";

const routes = [
  {
    path: '/', // redirect: '/character_planner',
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
  },
  {
    path: "/fights",
    name: "fightsPage",
    component: () => import('../views/Fights.vue')
  },
  {
    path: "/character_planner",
    name: "CharacterPlannerRoute",
    component: () => import('../views/CharacterPlannerRoute.vue')
  },
  {
    path: "/resource_calculator",
    name: "ResourceCalculatorRoute",
    component: () => import('../views/ResourceCalculatorRoute.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

trackRouter(router);

export default router
