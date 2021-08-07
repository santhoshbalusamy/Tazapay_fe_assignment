import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import Toasted from 'vue-toasted';
import './styles/style.scss'

Vue.config.productionTip = false;
const FLASH_TIMEOUT = 4000;

Vue.use(Toasted, {
  position: 'top-center',
  duration: FLASH_TIMEOUT,
  singleton: true,
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
