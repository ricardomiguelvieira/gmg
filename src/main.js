import Vue from 'vue';
import App from './app.vue';
import router from '../router';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
