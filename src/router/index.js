import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/flight',
      name: 'flight',
      component: () => import('../views/Flight.vue')
    },
    {
      path: '/passenger',
      name: 'passenger',
      component: () => import('../views/Passenger.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('../views/Booking.vue')
    }
  ]
})

export default router
