import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

export const EventBus = new Vue();
Vue.use(Buefy, EventBus);

new Vue({
  render: h => h(App),
}).$mount('#app')
