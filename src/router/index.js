import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vouchercode/:URLVoucherId',
    name: 'HomeWithCode',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    redirect: '/',
    children: [
      {
        path: '/projects/project-one',
        name: 'South Jordan Landfill Gas Capture',
        component: () => import('@/views/projects/ProjectOne.vue'),
      },
      {
        path: '/projects/project-two',
        name: 'Burn Stoves Project in Kenya',
        component: () => import('@/views/projects/ProjectTwo.vue'),
      },
      {
        path: '/projects/project-three',
        name: 'Turkey Duzce Aksu Province',
        component: () => import('@/views/projects/ProjectThree.vue'),
      },
      {
        path: '/projects/project-four',
        name: 'Pacajai REDD+ Forest Protection',
        component: () => import('@/views/projects/ProjectFour.vue'),
      },
    ],
  },
  {
    path: '/thankyou',
    name: 'Thank You',
    component: () => import('@/views/ThankYou.vue'),
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import('@/views/Credits.vue'),
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('@/views/Terms.vue'),
  },
  {
    path: '/credits',
    name: 'Site Credits',
    component: () => import('@/views/Credits.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
