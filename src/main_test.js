import Vue from "vue"

import App from "./test/oTest"
import store from "./test/store/store"
Vue.config.productionTip=false

new Vue({
    el:"#app",
    store,
    render:h=>h(App)
})