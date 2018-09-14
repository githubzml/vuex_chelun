
import Vue from "vue"
import App from "./chelun/Chelun"
import store from "./chelun/store/store"
import router from "./chelun/router/index"

new Vue({
    el:"#app",
    store,
    router,
    components:{App},
    template:"<App/>"
})