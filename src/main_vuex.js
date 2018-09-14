import Vue from 'vue'

// import "es6-promise/auto"
// import Vuex from "vuex"
import App from "./App"
import store from "./store/index"

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  components: { App },
  template:"<App/>"
})