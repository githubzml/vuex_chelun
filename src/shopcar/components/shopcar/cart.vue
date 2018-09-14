<template>
    <div>
        this is cart
        <ul>
            <li v-for="(item,key) in list" :key="key">
                <input type="checkbox" :checked="item.isSelect" @change="changeSelect(key)">
                <span>{{item.name}}</span>
                <span>￥{{item.price}}</span>
                <button @click="changeNum({key,type:'-'})">-</button>
                <span>{{item.num}}</span>
                <button @click="changeNum({key,type:'+'})">+</button>
            </li>
        </ul>
        <div>
          
            总价:<span>{{totalPrice(list)}}</span>
            数量:<span>{{totalNum(list)}}</span>
        </div>
    </div>
</template>
<script>
    import {mapState,mapActions,mapMutations} from "vuex"
    export default{
        computed:{
            ...mapState({
                list:state=>state.cart.list
            })
        },
        methods:{
            ...mapActions({
                iniData:"cart/initData"
            }),
            ...mapMutations({
                changeSelect:"cart/changeSelect",
                changeNum:"cart/changeNum",
            }),
            totalPrice:(list)=>{
                let price = 0;
                // console.log("this...",this,list);
                list.forEach((item,key)=>{
                    if(item.isSelect){
                        price+=item.num*item.price;
                    }
                })
                return price;
            },
            totalNum:(list)=>{
                let num = 0;
                // console.log("this...",this,list);
                list.forEach((item,key)=>{
                    if(item.isSelect){
                        num+=item.num;
                    }
                })
                return num;
            }
        },
        mounted(){
            //第一种
            this.iniData(123);
            //第二种
            // this.$store.dispatch("cart/initData",345)
        }
    }
</script>
<style>
</style>