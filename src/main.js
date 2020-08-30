import Vue from 'vue'
import App from './App.vue'
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import router from '@/routes';
import store from '@/store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

//testando commit com comentario
