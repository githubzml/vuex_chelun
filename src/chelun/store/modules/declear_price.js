import { submit } from "../../api/index"

let state = {
    data:{}
}
let mutations = {
    declear_price:(state,payload)=>{
        console.log(payload);
        return state.data = payload;
    }
}
let actions = {
    // _price: ({ commit }, payload) => {
    //     submit(payload)
    //     .then(body => {
            
    //         commit("declear_price", body.data)
    //     })
    // }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}