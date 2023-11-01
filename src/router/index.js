import { createRouter, createWebHistory } from 'vue-router'
import HomePrinView from '../views/HomePrinView.vue'
// import ListarHoteles from '../views/ListHoteles.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: '/list',
          name: 'listar',
          component: () => import('../views/ListHoteles.vue')
        },
        {
          path: '/inidas',
          name: 'inicio-dashboard',
          component: () => import('../views/InicioDasboardView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/editarHotel/:hotelId',
          name: 'editarHotel',
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
          component: () => import('../views/ListarHabitacionesView.vue')
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
    },
  
    
    {
      path: '/',
      name: 'home',
      component: HomePrinView,
     
    },     
    {
    path: '/prin',
    name: 'principal',
    component: () => import('../views/HomePrinView.vue')
  },
  {
    path: '/prin',
    name: 'principal',
    component: () => import('../views/HomePrinView.vue')
  },
 
   
   
   
  ]
 })

export default router
