import Vue from 'vue';
import App from './app.vue';
import router from '../router';
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(axios)

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
