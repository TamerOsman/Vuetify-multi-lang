import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/:lang?',
    component: () => import('@/layouts/Default.vue'),
    children: [
      {
      path: '',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      children : [
        {
          path: '',
          name: 'HomeChild1',
          component: () => import('@/views/HomeChild1.vue')},{
            path: '/:lang?/chid2',
            name: 'HomeChild2',
            component: () => import('@/views/HomeChild2.vue')},
      ]
    },
  ],
  },
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// router.beforeEach((to, from, next) => {
//   const lang = to.params.lang || 'en'; // Set 'en' as the default language
//   next();
// })

export default router
