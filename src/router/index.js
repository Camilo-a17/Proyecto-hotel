import { createRouter, createWebHistory } from 'vue-router'
import HomePrinView from '../views/HomePrinView.vue'
// import ListarHoteles from '../views/ListHoteles.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePrinView
    },
    {
      path: '/prin',
      name: 'principal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomePrinView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/list',
      name: 'listar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListHoteles.vue')
    },
    {
      path: '/edit',
      name: 'editar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HotelesView.vue')
    },
    {
      path: '/detalle',
      name: 'hoteles',
      component: () => import('../views/DetalleHotelView.vue')
    },
    {
      path: '/habitaciones',
      name: 'habitaciones',
      component: () => import('../views/HomeHabitacionesView.vue')
    },
    {
      path: '/detalle-habitaciones',
      name: 'detalle-habitaciones',
      component: () => import('../views/DetalleHabitacionView.vue')
    },
    {
      path: '/edit-habitacion',
      name: 'edit-habitacion',
      component: () => import('../views/EditHabitacion.vue')
    },
    
    {
      path: '/reportes',
      name: 'reportes',
      component: () => import('../views/RportesVista.vue')
    },
    {
      path: '/crear',
      name: 'crear',
      component: () => import('../views/CrearHabitacion.vue')
    } 
  ]
})

export default router
