import Vue from "vue"
import Vuex from "vuex"

import cart from "../store/modules/cart"
import login from "../store/modules/login"

Vue.use(Vuex);
// 注入商店
export default new Vuex.Store({
    modules:{
        cart,
        login
    }
})