<template>
    <div>
        <ul @click="e=>goCity(e.target.dataset.id)">
            <li v-for="(item,index) in ocity" :data-id="item.CityID">
                {{item.CityName}}
            </li>
        </ul>
        <div :class="isFlag?'active city':'city'">
            <div class="left" @click="del"></div>
            <ol>
                <li v-for="(value,key) in detailCity">
                    {{value.CityName}}
                </li>
            </ol>
        </div>

    </div>
</template>
<script>
    import { mapState, mapActions, mapMutations } from "vuex"
    export default {
        computed: {
            ...mapState({
                ocity: state => state.city.ocity,
                isFlag: state => {
                    return state.city.isFlag;
                },
                detailCity: state => state.city.detailCity
            })
        },
        methods: {
            ...mapMutations({
                mcity: "city/mcity"
            }),
            ...mapActions({
                getCity: "city/getCity",
                goCity: "city/goCity",
                del:"city/del"
            })
        },
        mounted() {
            this.getCity();
        }
    }
</script>
<style scoped lang="scss">
    ul {
        z-index: 1;
        li {
            padding-left: .3rem;
            font-size: .28rem;
            height: .8rem;
            line-height: .8rem;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            margin-left: .1rem;
            position: relative;
        }
        li:after {
            content: "";
            display: inline-block;
            padding-top: .16rem;
            padding-right: .16rem;
            border-top: 1px solid #999;
            border-right: 1px solid #999;
            transform: rotate(45deg);
            position: absolute;
            right: .35rem;
            top: .3rem;
        }
    }

    .city {
        z-index: 2;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: scroll;
        transition: all .3s ease;
        transform: translate3d(100%, 0, 0);
        background: rgba(0, 0, 0, .6);
        display: flex;
        .left {
            width: 30%;
        }
        ol {
            width: 70%;
            background: #fff;
            overflow: scroll;
            li {
                padding-left: .3rem;
                font-size: .28rem;
                height: .8rem;
                line-height: .8rem;
                border-bottom: 1px solid #eee;
                box-sizing: border-box;
                margin-left: .1rem;
                position: relative;
            }
        }
    }

    .active {
        transform: translate3d(0, 0, 0);
    }
</style>