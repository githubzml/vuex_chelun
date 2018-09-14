<template>
    <div>
        <Login v-if="isLogin"/>
        <Cart v-else/>
    </div>
</template>
<script>
    import Cart from "./components/shopcar/cart"
    import Login from "./components/shopcar/login"
    import { mapState } from "vuex"
    export default {
        computed: mapState({
            isLogin: state => state.login.isLogin
        }),
        components: {
            Cart,
            Login
        }
    }
</script>
<style>
</style>