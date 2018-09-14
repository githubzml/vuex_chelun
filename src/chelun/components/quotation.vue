<template>
    <div>
        haha
        <p>
            <img :src="data.see_button_status" alt=""/>
        </p>
    </div>
</template>
<script>
    import {mapState} from "vuex"
    export default{
        computed:{
            ...mapState({
                data:state=>state.declear_price.data
            })
        }
    }
</script>
<style>
</style>