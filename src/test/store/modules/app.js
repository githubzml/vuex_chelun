import axios from "axios"
//存放数据
let state = {
    data:1,
    list:[]
}
// 派生区域
let getters = {

}
// 唯一去改变 state的 
//突变区域
let mutations = {
    initData:(state,payload)=>{
        //步骤5 赋值
        state.list = payload
        // console.log(state.list)
    },
    changeSelected:(state,paload)=>{
        state.list[paload].isSelect = !state.list[paload].isSelect;
    },
    changeNum:(state,paload)=>{
        let {index,type} = paload;
        if(type == "-"){
            state.list[index].num>0?state.list[index].num--:'';
        }else{
            state.list[index].num++;
        }
    }
}
// 异步突变区域
// 提交mutation 
// 可以包含任意异步操作
// 相当于去获取数据吧
// 步骤1
let actions = {
    initData:(context,payload)=>{
        // webpack.dev.conf.js 配置before() 数据请求
        axios('http://localhost:8080/car').then(res=>{
            // console.log("this...",res.data);
            //步骤4 触发
            context.commit("initData",res.data.list)
        })
    }
   
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}