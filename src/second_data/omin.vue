<template>
    <div>
        <ul>
            <li v-for="(item,index) in data">
                <input type="checkbox" :checked="item.isSelect" @change="changeSelected(index)">
                <span>{{item.name}}</span>
                <span>￥{{item.price}}</span>
                <button @click="changeNum({index,type:'-'})">-</button>
                <span>{{item.num}}</span>
                <button @click="changeNum({index,type:'+'})">+</button>
            </li>
        </ul>
        <div>
            总数量：<span>{{totalNum(data)}}</span>
            总价：<span>{{totalSum(data)}}</span>
        </div>
        <p>{{newNum}}</p>
    </div>
</template>
<script>
    import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
    export default{
        //从store 读取状态的最简单的方法就是 在计算属性 返回某个状态
        computed:{
            //一个组件有多个属性状态时mapState帮助我们生成计算属性
            ...mapState({
                data:state=>state.app.data
            }),
            ...mapGetters({
                // newNum:"app/doFilter"
                newNum:"app/oddList"
            })
        },
        methods:{
            ...mapActions({
                initData:"app/initData"
            }),
            ...mapMutations({
                changeSelected:"app/changeSelected",
                changeNum:"app/changeNum",
            }),
            totalNum(data){
                let num = 0;
                data.forEach((item,key)=>{
                    if(item.isSelect){
                        num+=item.num;
                    }
                })
                return num;
            },
            totalSum(data){
                let sum = 0;
                data.forEach((item,key)=>{
                    if(item.isSelect){
                        sum+=item.num*item.price;
                    }
                })
                return sum;
            }
        },
        mounted(){
            this.initData();
            console.log("this is getters。。。",this.$store.getters);
            
        }
    }
</script>
<style>
</style>