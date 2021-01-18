import VueComposition from '@vue/composition-api';
import hooks from '@u3u/vue-hooks';

export default {
  install(Vue){
    Vue.use(VueComposition);
    Vue.use(hooks);
  }
};