<template>
    <div>
        <input type="username" placeholder="请输入用户名" ref="username">
        <input type="password" placeholder="请输入密码" ref="password">
        <button @click="onLogin">提交</button>
    </div>
</template>
<script>
    export default{
        methods:{
            onLogin:function(){
                let username = this.$refs.username.value,
                    password = this.$refs.password.value
                if(!username){
                    alert("请输入用户名");
                    return;
                }
                if(!password){
                    alert("请输入密码");
                    return;
                }

                this.$store.commit("login/isLogin",{
                    username,
                    password
                })
            }
        }
    }
</script>
<style>
</style>