import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home.vue');
const Transfer = () => import('./views/Transfer.vue');
const seatBooking = () => import('./views/seatBooking.vue');
const Vechicles = () => import('./views/vechicles.vue');
const VechicleDetails = () => import('./views/vechicleDetails.vue');

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: Transfer,
    },
    {
      path: '/account',
      name: 'account',
      component: Home,
    },
    {
      path: '/documents',
      name: 'documents',
      component: Home,
    },
    {
      path: '/reports',
      name: 'reports',
      component: Home,
    },
    {
      path: '/seat-booking',
      name: 'seatBooking',
      component: seatBooking,
    },
    {
      path: '/vechicles',
      name: 'Vechicles',
      component: Vechicles,
    },
    {
      path: '/vechicles/:name/:id',
      name: 'VechicleDetails',
      component: VechicleDetails,
    },
  ],
});

export default router;
