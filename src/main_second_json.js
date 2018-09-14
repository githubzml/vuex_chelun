import Vue from "vue"
import Omin from "./second_data/omin"
import store from "./second_data/store/store"
Vue.config.productionTip=false;

new Vue({
    el:"#app",
    store,
    components:{Omin},
    template:"<Omin/>"
})
