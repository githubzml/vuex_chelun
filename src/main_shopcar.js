import Vue from 'vue'

import App from "./shopcar/Oapp"

import store from "./shopcar/store/store"
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  // components: { App },
  // template:"<App/>"
  render:h=>h(App)
})