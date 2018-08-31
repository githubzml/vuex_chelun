<template>
    <div>
        <!-- haha -->
        <p>{{msg}}</p>
        <Child :odata="oarr"/>
    </div>
</template>
<script>
    // 引入 
    import Child from "./child"
    export default{
        name:"test",
        components:{
            Child
        },
        data(){
            return{
                msg:"你好",
                oarr:[
                    {
                        name:'zml',
                        age:25
                    }
                ]
            }
        }
    }
</script>
<style>
</style>