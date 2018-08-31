//数据
let state = {
    num:1000,
    list:[1,3,5,2,4]
}
// 派生数据
let getters = {
    getNum:state=>state.num*100,
    oddList:state=>state.list.filter(item=>!(item%2))
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
    mutations,
    getters
}