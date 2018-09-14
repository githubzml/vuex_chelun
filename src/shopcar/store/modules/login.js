let state = {
    isLogin:false
}
let mutations = {
    isLogin(state,payload){
        if(payload.username == "zml" && payload.password == "123"){
            state.isLogin = !state.isLogin
        }
    }
}
export default{
    namespaced:true,
    state,
    mutations
}
