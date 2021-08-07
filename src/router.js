import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home.vue');
const Transfer = () => import('./views/Transfer.vue');

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
  ],
});

export default router;
