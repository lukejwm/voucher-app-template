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
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
