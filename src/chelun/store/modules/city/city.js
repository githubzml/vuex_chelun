import { getCityList } from "../../../api/index"

let state = {
    previces: [],
    ocity: [],
    detailCity: [],
    isFlag: false
}
let mutations = {
    getPrevience: (state, payload) => {

    },
    getOcity: (state, payload) => {
        state.ocity = payload;
    },
    mcity: (state, payload) => {

        state.isFlag = true;
        state.detailCity = payload;

    },
    odel:state=>{
        state.isFlag = false;
    }
}
let actions = {
    getCity: ({ commit }, payload) => {
        if (payload) {
            getCityList(payload)
                .then(body => {
                    console.log(body.data)
                })
        } else {
            getCityList()
                .then(body => {
                    commit("getOcity", body.data)
                })
        }
    },
    goCity: ({ commit }, payload) => {  
        getCityList(payload)
            .then(body => {
                commit('mcity', body.data)
            })
    },
    del:({ commit }) => {
        commit('odel')
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}