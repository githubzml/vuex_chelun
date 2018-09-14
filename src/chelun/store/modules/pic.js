import {getImgList} from "../../api/index"
let state = {
    olist:[]
}
let getters = {
    Mpic(state){
       return state.data;
    }
}
let mutations = {
    list: (state, payload) => {
        let reg = /(\{)([\d])(\})/g;
        payload.map(item => {
            item.List.map(val => {
                val.Url = val.Url.replace(reg, (a, b, c) => {
                    return val.LowSize
                })
            })
        })
        console.log(payload);
        state.olist = payload;
    }
}
let actions = {
    goPic:({commit},payload)=>{
        getImgList(payload)
        .then(body=>{
            commit("list",body.data)
        })
        
    }
}
export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}