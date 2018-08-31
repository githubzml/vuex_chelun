// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import "es6-promise/auto"
import Vuex from "vuex"

import "../static/common/css/bootstrap.min.css"
import "../static/common/css/font-awesome.min.css"
import "../static/common/css/animate.min.css"
import "../static/common/css/bootstrapValidator.min.css"
import "../static/common/css/style.css"
import App from './App'
import router from './router'

Vue.config.productionTip = false


// Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template:"<App/>"
})

// 创建这个商店
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })
// store.commit('increment')

// // console.log(store.state.count)

// //创建一个组件
// const Counter = {
//   template: `<div>{{ count }}</div>`,
//   computed: {
//     count () {
//       return this.$store.state.count
//     }
//   }
// }

// const app = new Vue({
//   el: '#app',
//   // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
//   store,
//   components: { Counter },
//   template: `
//     <div class="app">
//       <counter></counter>
//     </div>
//   `
// })

// const store = new Vuex.Store({
//   state: {
//     todos: [
//       { id: 1, text: '...', done: true },
//       { id: 2, text: '...', done: false }
//     ]
//   },
//   getters: {
//     doneTodos: state => {
//       return state.todos.filter(todo => todo.done)
//     },
//     doneTodosCount: (state, getters) => {
//       return getters.doneTodos.length
//     },
//     getTodoById: (state) => (id) => {
//       return state.todos.find(todo => todo.id === id)
//     }
//   }
// })
// console.log(store.getters.doneTodos,store.getters.doneTodosCount)

// console.log(store.getters.getTodoById(2));

// const store = new Vuex.Store({
//   state: {
//     count: 1
//   },
//   mutations: {
//     // increment (state) {
//     //   // 变更状态
//     //   state.count++
//     // }
//     //额外参数 作为载荷
//     // increment (state, n) {
//     //   state.count += n
//     // }
//     // 对象更易读
//     increment (state, payload) {
//       state.count += payload.amount
//     }
//   }
// })
//当触发一个类型为  increment mutation时 调用 increment函数 
//唤醒一个mutation handler你需要使用相对应的store.commit 方法
// store.commit('increment',{
//   amount:20
// });

//对象提交的风格方式

// store.commit({
//   type:'increment',
//   amount:30
// })
// console.log(store.state.count);