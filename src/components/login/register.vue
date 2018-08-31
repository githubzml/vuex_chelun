<template>
    <div>
        <div class="wrapper animated flipInY">
            <div class="logo"><a href="#"><i class="fa fa-bolt"></i> <span>Maniac</span></a></div>
            <div class="box">
                <div class="header clearfix">
                    <div class="pull-left"><i class="fa fa-plus"></i> Register an account</div>
                    <div class="pull-right"><a href="#"><i class="fa fa-times"></i></a></div>
                </div>
                <form action="index.html" method="post">
                    <div class="alert alert-warning no-radius no-margin padding-sm"><i class="fa fa-info-circle"></i> Lorem
                        Ipsum Dorem</div>
                    <div class="box-body padding-md">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username" ref="oinput1" />
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email" ref="oinput2" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password" ref="oinput3" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Repeat Password" ref="oinput4" />
                        </div>
                        <div class="box-footer">
                            <p class="btn btn-success btn-block" v-on:click="tjiao">Register</p>
                        </div>
                    </div>
                </form>
            </div>
            <div class="box-extra clearfix">
                <span class="pull-left btn btn-xs" v-on:click="test2">Are you member?</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "register",
        components: {

        },
        data() {
            return {
                tj1: null,
                tj2: null,
                tj3: null,
                tj4: null
            }
        },
        methods: {
            tjiao: function () {
                let uPattern = /^[a-zA-Z0-9_-]{5,19}$/;
                let str2 = "该用户名合法";

                let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                let str3="用户合法";
                
                let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
                let str4="输入正确";

                this.tj1 = this.$refs.oinput1.value;
                this.tj2 = this.$refs.oinput2.value;
                this.tj3 = this.$refs.oinput3.value;
                this.tj4 = this.$refs.oinput4.value;
                console.log(this.tj1, this.tj2, this.tj3, this.tj4);
    
                if (this.tj1 == '') {
                    str2 = "用户名为空";
                    alert(str2);
                } else if ((this.tj1.length < 5) || (this.tj1.length > 20)) {
                    str2 = "用户名必须为5 ~ 20位";
                    alert(str2);
                }
                else if (uPattern.test(this.tj1)) {
                    alert(str2);
                }
                if (this.tj2 == '') {
                    str3 = "用户为空";
                    alert(str3);
                }else if(ePattern.test(this.tj2)){
                    alert(str3);
                }else{
                    str3 = "不合法 请重新输入";
                    alert(str3);
                }
                if (pPattern.test(this.tj3)&&(this.tj3===this.tj4)) {
                    alert(str4);
                }else{
                    str4="两次输入有误";
                    alert(str4);
                }

            },
            test2: function () {
                this.$router.push({ path: "/" })
            }
        }
    }
</script>
<style>
</style>