//数据
let state = {
    num:666
}
// 突变区域
let mutations = {
    changeNum:(state,payload)=>{
        console.log("this is app2 触发")
    }
}
export default {
    //命名空间
    namespaced:true,
    state,
    mutations
}