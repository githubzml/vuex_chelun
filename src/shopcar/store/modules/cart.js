let state = {
    list:[],
    isCheckAll:false
}
//mutation
let mutations = {
    //接受数据
    initData:(state,payload)=>{
        state.list = payload
    },
    //单选 反选
    changeSelect:(state,payload)=>{
        state.list[payload].isisSelect = !state.list[payload].isisSelect;
    },
    //进行计算
    changeNum:(state,payload)=>{
        // payload 接受传参
        let {key,type} = payload;
        if(type == "+"){
            state.list[key].num++;
        }else{
            state.list[key].num--;
        }
    },
}
let actions = {
    //context 上下文    
    initData:(context,payload)=>{
        // console.log("this...",context,payload);
        fetch("https://www.easy-mock.com/mock/5b8903631c397746a0f0e2b2/example/fruits")
        .then(res=>res.json())
        .then(body=>{
            // console.log("this data...",body)
            //触发 一个方法
            context.commit("initData",body.list)
        })
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}