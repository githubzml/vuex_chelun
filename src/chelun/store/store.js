import Vue from "vue"
import Vuex from "vuex"

import app from "./modules/app"
import declear_price from "./modules/declear_price"
import pic from "./modules/pic"

import city from "./modules/city/city"

//获取log
import createLogger from "vuex/dist/logger"
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        app,
        declear_price,
        pic,
        city
    },
    plugins:[createLogger()]
})
