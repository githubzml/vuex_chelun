// 定义数据
let state = {
    data:[],
    newArr:[1,2,3,4,5,6],
    newNum:1
}
//派生区域
let getters = {
    // doFilter:(state,payload)=>{
    //     return state.newNum * 10;
    // },
    oddList:(state,payload)=>{
        return state.newArr.filter((item)=>{
            if(item%2==0){
                return item;
            }
        });
    }
    // oddList: state=>state.newArr.filter(item=>!(item%2))
    // oLength:

}
//突变区域
let mutations={
    iniData:(state,payload)=>{
        state.data = payload
    },
    changeSelected:(state,payload)=>{
        state.data[payload].isSelect = !state.data[payload].isSelect
    },
    changeNum:(state,payload)=>{
        let {index,type} = payload;
       if(type=='-'){
        state.data[index].num>0?state.data[index].num--:'';
       }else{
        state.data[index].num++;
       }
    }
}
//异步突变区域
let actions = {
    initData:(context,payload)=>{
        // 脚手架请求本地数据的固定写法
        fetch("../static/data/data.json")
        .then(res=>res.json())
        .then(body=>{
            // 显示的去commit 提交mutations
            context.commit("iniData",body.list)
            // console.log("this body...",body);
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