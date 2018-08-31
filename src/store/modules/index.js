//数据
let state = {
    num:1000
}
// 派生数据
let getters = {

}
//突变区域
let mutations = {
    changeNum:(state,payload)=>{
        if(payload === "+"){
            state.num++;
        }else{
            state.num--;
        }
    }
}
//异步突变区域
let actons = {

}
export default {
    state,
    mutations
}