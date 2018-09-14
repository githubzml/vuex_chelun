import Vue from "vue"
import VueRouter from "vue-router"

// import Index from "../components/index"

// 打包构建过程中js包会的变得非常大,影响整个页面的加载速度 
//我们把不同路由对应的组件分割成不同的代码块然后当路由被访问时才会加载对应的组件 实现懒加载
const Index = () => import('../components/index')
const Detail = () => import('../components/detail')

const Quotation = () => import('../components/quotation')

const Pic = () => import('../components/pic')
//颜色
const Color = () => import('../components/color')
//类型
const Type = () => import('../components/type')

//询问低价
const Price = () => import('../components/price')
Vue.use(VueRouter)

export default new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            name: "Index",
            component: Index
        }
        ,
        {
            path: "/car",
            component: Detail
        },
        {
            path: "/quotation",
            component: Quotation
        },
        {
            path: "/pic",
            component: Pic
        },
        {
            path: "/color",
            component: Color
        },
        {
            path: "/type",
            component: Type
        },
        {
            path:"/price",
            component:Price
        }
    ]
})