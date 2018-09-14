<template>
    <div class="opic">
        <div class="title">
            <router-link to="color">颜色</router-link>
            <router-link to="type">车款</router-link>
        </div>
        <section>
            <ul>
                <li v-for="(item,index) in olist">
                    <p v-for="(value,key) in item.List">
                        <img :src="value.Url" alt="" />
                    </p>
                </li>
            </ul>
        </section>

    </div>
</template>
<script>
    import { mapState, mapActions, mapMutations } from "vuex"
    export default {
        computed: {
            ...mapState({
                olist: state => state.pic.olist
            })
        },
        methods: {
            ...mapActions({
                list: "pic/list"
            })
        }
    }
</script>
<style scoped lang="scss">
    .opic {
        background: #ccc;
    }

    section {
        height: auto;
        margin-top: .1rem;
    }

    .title {
        display: flex;
        background: #ffffff;
        font-size: .28rem;
        line-height: .8rem;
        padding: 5px;
        align-items: center;
        a{
            flex: 1;
            text-align: center;
            text-decoration : none ;
            color:black;
        }
        a:first-child {
            border-right: 1px solid #ccc;
        }
    }

    ul {
        margin-top: .1rem;
        width: 100%;
        height: 100%;
        li {
            width: 100%;
            height: 100%;
            p {
                position: relative;
                float: left;
                margin-right: .06rem;
                margin-bottom: .06rem;
                width: 2.36rem;
                height: 2.46rem;
                padding: 0;
                img {
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                }
            }
        }
    }
</style>