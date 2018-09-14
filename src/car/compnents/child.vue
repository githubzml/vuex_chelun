<template>
    <div>
        <!-- {{data}} -->
    </div>
</template>
<script>
    export default{
        data(){
            arr:[]
        },
        props:["data"]
        ,
        mounted(){
            console.log(this.data);
        }
    }
</script>
<style>
</style>