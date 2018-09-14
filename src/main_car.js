import Vue from 'vue'

import Car from "./car/compnents/main"
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { Car },
  template:"<Car/>"
})