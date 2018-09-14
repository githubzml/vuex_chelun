<template>
    <div>
        <ul>
            <li v-for="(item,index) in list">
                <input type="checkbox" :checked="item.isSelect" @change="changeSelected(index)">
                <span>{{item.name}}</span>
                <span>￥{{item.price}}</span>
                <button @click="changeNum({index,type:'-'})">-</button>
                <span>{{item.num}}</span>
                <button @click="changeNum({index,type:'+'})">+</button>
            </li>
        </ul>
        <div>
            总量:<span>{{totalNum(list)}}</span>
            总价:<span>{{totalSum(list)}}</span>
        </div>
    </div>
</template>
<script>
    import { mapState ,mapActions ,mapMutations} from "vuex"
    export default {
        computed:{
            //步骤6 再次赋值
            ...mapState({
                list:state=>state.app.list
            })
        },
        methods: {
            //步骤2 赋值
            ...mapActions({
                initData: "app/initData"
            }),
            ...mapMutations({
                changeSelected:"app/changeSelected",
                changeNum:"app/changeNum"
            }),
            totalNum(list){
                let num = 0;
                list.forEach((item,key)=>{
                    if(item.isSelect){
                        num+=item.num;
                    }
                })
                return num
            },
            totalSum(list){
                let sum = 0;
                list.forEach((item,key)=>{
                    if(item.isSelect){
                        sum+=item.num*item.price;
                    }
                })
                return sum;
            }
        }
        ,
        mounted() {
            //步骤3 调用
            this.initData();
            console.log("this...", this)
        }
    }
</script>
<style>
</style>