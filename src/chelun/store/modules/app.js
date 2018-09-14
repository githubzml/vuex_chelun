import { getBrandList } from "../../api/index"
import { sendBrandList } from "../../api/index"

import { goDetail } from "../../api/index"

let state = {
    litters: [],
    brands: {},

    brandId: '',//品牌ID
    makeList: '', //车系列表

    isCarShow: false,//是否显示侧边栏

    cdetail: "",

    info: {},   // 所有详情数据
    currentYear: '全部', // 当前选中的年份

    title:""
}
let getters = {
    //获取年份数组
    years(state) {
        if (!state.info.list) {
            return [];
        }
        let arr = state.info.list.map(item => {
            return item.market_attribute.year;
        })
        //使用es6 Set去除重复年份
        let set = new Set(arr);
        return ['全部', ...set];
    },
    list(state) {
        if (!state.info.list) {
            return [];
        }
        // 把排量和吸气类型相同的数据做个合并
        function merge(arr) {
            let types = [];
            let obj = {};
            // console.log('arr..', arr);
            arr.forEach(item => {
                // console.log(item);
                let type = item.exhaust_str + '/' + item.max_power_str + ' ' + item.inhale_type;
                if (types.indexOf(type) == -1) {
                    types.push(type);
                    obj[type] = [item];
                } else {
                    obj[type].push(item);
                }
            })
            return obj;
        }

        if (state.currentYear == '全部') {
            return merge(state.info.list)
        } else {
            return merge(state.info.list.filter(item => {
                return item.market_attribute.year == state.currentYear;
            }))
        }
    }
    // ,
    // title(state){
    //     state.title = state.info;
    // }
}

// []

// {
//     "A":[{},{}],
//     "B":[{},{}]
// }

// []
// {
//     "a":[{},{}]
// }
let mutations = {
    initState: (state, payload) => {
        let litters = [];
        let brands = {};
        payload.forEach((value, key) => {
            let spell = value.Spelling[0];
            if (litters.indexOf(spell) != -1) {
                brands[spell].push(value);
            } else {
                //字母数组
                litters.push(spell);
                //对象的Key：value；
                brands[spell] = [value];
            }
        })
        state.litters = litters;
        state.brands = brands;
        // console.log(state.brands);
    },
    //获取车系列表
    changeMakeList: (state, payload) => {
        state.brandId = payload.id;
       
        state.makeList = payload.list;
        state.isCarShow = true;
    },
    //隐藏 请求
    hideCarList: state => {
        return state.isCarShow = false;
    },
    //改变年份
    changeYear(state, payload) {
        state.currentYear = payload;
    },
    //去详情
    detail: (state, payload) => {
        //降序
        payload.list.sort((a, b) => {
            // 先按照年份排序 降序,
            if (b.market_attribute.year != a.market_attribute.year) {
                return b.market_attribute.year - a.market_attribute.year;
            } else {
                // 按照排量排序 升序
                if (b.exhaust_str > a.exhaust_str) {
                    return -1;
                } else if (b.exhaust_str < a.exhaust_str) {
                    return 1;
                } else {
                    // 按照功率排序 升序
                    if (b.max_power_str > a.max_power_str) {
                        return -1;
                    } else if (b.max_power_str < a.max_power_str) {
                        return 1;
                    } else {
                        // 按照指导价格排序 升序
                        if (b.market_attribute.dealer_price_min > a.market_attribute.dealer_price_min) {
                            return -1;
                        } else {
                            return 1
                        }
                    }
                }
            }
        })
        
        state.info = payload;
    }
}
let actions = {
    initState: ({ commit }, payload) => {
        getBrandList()
            .then(body => {
              
                commit("initState", body.data)
            })
    },
    brandList: ({ commit, state }, payload) => {
        //传过来它的品牌ID
        if (payload != state.brandId) {

            sendBrandList(payload)
                .then(body => {
                    // console.log(body);
                    commit("changeMakeList", {
                        id: payload,
                        list: body.data
                    })
                })
        }else{
            //*** 修复bug 第一次点击出现 第二次在点击 弹出框不出现
            state.isCarShow = true;
        }
    },
    mgoDetail: ({ commit }, payload) => {
        goDetail(payload)
            .then(body => {
                commit("detail", body.data)
            })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}