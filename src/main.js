import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import CompositionApiPlugin from './plugins/composition-api';
import BootstrapVue from 'bootstrap-vue';
import ScrollLoader from 'vue-scroll-loader';

Vue.config.productionTip = false;


require('../src/db/index');

import './assets/styles/css/index.css';

Vue.use(CompositionApiPlugin);
Vue.use(BootstrapVue);
Vue.use(ScrollLoader)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
