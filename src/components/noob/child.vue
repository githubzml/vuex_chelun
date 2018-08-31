<template>
    <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>
                <label for="oinput">
                    姓名：
                    <input type="checkbox" id="oinput" v-model="isflasg">
                </label>
            </li>
            <li v-bind:class="{'class1':isflasg}"></li>
            <li v-if="seen">看不见我</li>
            <li>
                <!-- <form action="" v-on:submit.prevent="onSubmit">
                        <button type="submit">提交</button>
                    </form> -->
            </li>
            <li>
                <p>{{msg}}</p>
                <p v-on:click="reverseString">点击</p>
            </li>
            <li>
                <input type="text" v-model="msg">
            </li>
            <li>
                <span v-for="item in odata">{{item.name}}</span>
            </li>
            <li>
               {{now}}
            </li>
            <li>
                {{fullname}}
            </li>
            <li :style="styleObj">
                <p>heihei</p>
            </li>
            <li>
                <button @click="del">-</button>
                <span>{{count}}</span>
                <button @click="add">+</button>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "Child",
        props: ['odata'],
        // props:{
        //     type:"",
        //     default:""
        // },
        data() {
            return {
                isflasg: false,
                seen: false,
                msg: "message",
                firstname:"zhu",
                lastname:"ml",
                styleObj:{
                    color:'red',
                    fontSize:'20px'
                },
                count:0
            }
        },
        //实例被创建后执行代码
        created() {
            console.log(222);
        },
        //mounted updated destoryed 声明周期钩子this 指向调用它的实例
        computed: {
            now: function () {
                return new Date().toLocaleTimeString();
            },
            fullname:function(){
                return this.firstname + this.lastname
            }
        },
        methods: {
            reverseString: function () {
                this.msg = this.msg.split('').reverse().join('');
            },
            del:function(){
                this.count--;
            },
            add:function(){
                this.count++;
            }
        },
        watch:{
            count:function(val){
                console.log(val)
            }
        }
    }
</script>
<style scoped>
    .class1 {
        width: 100%;
        height: 20px;
        background: orange;
    }
</style>
<!-- 实例生命周期 不同阶段添加代码机会-->