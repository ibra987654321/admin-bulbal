import Vue from 'vue'
import VueRouter from 'vue-router'
import {getToken, Role} from '@/helpers/helpers'
// import {decodeJWT} from "@/use/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/pages/login',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { layout: 'main'},
    component: () => import('../views/dashboard/Dashboard'),
  },
  {
    path: '/approve/:id',
    name: 'approve',
    meta: {
      layout: 'main',
    },
    component: () => import('../views/dashboard/Approve/ApproveDetail'),
  },
  {
    path: '/config',
    name: 'config',
    meta: { layout: 'main'},
    component: () => import('../views/Configs/Configs'),
  },
  {
    path: '/config-advantage',
    name: 'config-advantage',
    meta: { layout: 'main'},
    component: () => import('../views/Configs/pages/AdvantageController/AdvantageController'),
  },
  {
    path: '/config-notification',
    name: 'config-notification',
    meta: { layout: 'main'},
    component: () => import('../views/Configs/pages/NotificationController/NotificationController'),
  },
  {
    path: '/config-bed',
    name: 'config-bed',
    meta: { layout: 'main'},
    component: () => import('../views/Configs/pages/TypeOfBedController/TypeOfBedController'),
  },
  {
    path: '/config-room',
    name: 'config-room',
    meta: { layout: 'main'},
    component: () => import('../views/Configs/pages/TypeOfRoomController/TypeOfRoomController'),
  },
  {
    path: '/config-house',
    name: 'config-house',
    meta: { layout: 'main'},
    component: () => import('../views/Configs/pages/TypeOfHouseController/TypeOfHouseController'),
  },
  {
    path: '/config-region',
    name: 'config-region',
    meta: { layout: 'main'},
    component: () => import('../views/Configs/pages/RegionController/RegionController'),
  },
  {
    path: '/config-locality',
    name: 'config-locality',
    meta: { layout: 'main'},
    component: () => import('../views/Configs/pages/LocalityController/LocalityController'),
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('../views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('../views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('../views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.auth)
  // const role = to.matched[0].meta.authorize[0]
  const currentUser = getToken()
  // to.matched.some(r => {
  //   r.meta.authorize.map(i => {
  //       console.log(decodeJWT().roled[0] === i)
  //   })
  // })
  if (requireAuth && !currentUser) {
    next('/pages/login')
  }
  // else if(decodeJWT().roles[0] !== role) {
  //   next('/dashboard')
  // }
  else {
    next()
  }
})

export default router
