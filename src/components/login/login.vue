<template>
    <div>
        <div class="logo"><a href="#"><i class="fa fa-bolt"></i> <span>Maniac</span></a></div>
        <div class="box">
            <div class="header clearfix">
                <div class="pull-left"><i class="fa fa-sign-in"></i> Sign In</div>
                <div class="pull-right"><a href="#"><i class="fa fa-times"></i></a></div>
            </div>
            <form id="loginform" method="post" action="index.html">
                <div class="alert alert-warning no-radius no-margin padding-sm"><i class="fa fa-info-circle"></i> Please
                    sign in to maniac dashboard</div>
                <div class="box-body padding-md">
                    <div class="form-group">
                        <input type="text" name="username" class="form-control" placeholder="Username" ref="input1" />
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" class="form-control" placeholder="Password" ref="input2" />
                    </div>
                    <div class="form-group">
                        <input type="checkbox" /> <small>Remember me</small>
                    </div>
                    <div class="box-footer">
                        <p class="btn btn-success btn-block" v-on:click="test">Sign in</p>
                    </div>
                </div>
            </form>
        </div>
        <div class="box-extra clearfix">
				<span class="pull-left btn btn-xs">Forgotten Password?</span>
				<span class="pull-right btn  btn-xs" v-on:click="test1">Register an account</span>
		</div>
    </div>
</template>
<script>
    // 获取到输入的值 值相等 则进行跳转
    export default {
        name: "Login",
        data() {
            return {
                result1: null,
                result2: null,
            }
        },
        methods: {
            test: function () {
                this.result1 = this.$refs.input1.value;
                this.result2 = this.$refs.input2.value;
                if (this.result1 === "zml") {
                    if (this.result2 === "123") {
                        this.$router.push({ path:"denglu"})
                    } else {
                        this.$refs.input1.value = "";
                        alert("密码错误");
                    }
                } else {
                    this.$refs.input1.value = "";
                    alert("账户错误");
                }
                
            },
            test1:function(){
                this.$router.push({ path:"Register"})
            }
        }
    }
</script>
<style>
</style>