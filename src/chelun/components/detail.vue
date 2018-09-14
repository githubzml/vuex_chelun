<template>
    <div>
        <!-- 头部 -->
        <!-- @click="goPic"" -->
        <div class="banner">
            <router-link to="/pic">
            <img :src="info.CoverPhoto" alt="" />
            <p>{{info.pic_group_count}}张照片</p>
            </router-link>
        </div>
        <!-- 询问信息 -->
        <div class="msg">
            <div>
                <p>{{info.market_attribute&&info.market_attribute.dealer_price}}</p>
                <p>指导价{{info.market_attribute&&info.market_attribute.official_refer_price}}</p>
            </div>
            <div>
                <button @click="_price">{{info.bottom_button&&info.bottom_button.right_button.name}}</button>
            </div>
        </div>
        <!-- tab 切换 -->
        <li class="year">
            <span @click="changeYear(item)" v-for="(item, index) in years" :key="index" :class="currentYear==item?'active':''">{{item}}</span>
        </li>
        <!-- 切换内容 -->
        <section>
            <ul v-for="(item, index) in list" :key="index">
                <p>{{index}}</p>
                <li v-for="(value, key) in item" :key="key">
                    <p>{{value.market_attribute.year+'款 '+value.car_name}}</p>
                    <p>{{`${value.max_power}马力${value.gear_num}档${value.trans_type}`}}</p>
                    <p>
                        <span>{{`指导价${value.market_attribute.dealer_price_min}`}}</span>
                        <span>{{value.market_attribute.official_refer_price}}</span>
                    </p>
                    
                    <button @click="_price">{{info.bottom_button&&info.bottom_button.right_button.name}}</button>
                </li>
            </ul>
        </section>
        <footer @click="_price">
            <p>{{info.BottomEntranceSubTitle}}</p>
            <p>{{info.BottomEntranceTitle}}</p>
        </footer>
        <!-- <div>
            <p v-for="oitem in data" @click="oClick(oitem)" :class="current==oitem?'oactive':''">{{oitem}}</p>
        </div> -->
    </div>
</template>
<script>
    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
    export default {
        data() {
            return {
                data: [1, 2, 3],
                current: 1
            }
        },
        computed: {
            ...mapState({
                currentYear: state => state.app.currentYear,
                info: state => {
                   
                    return state.app.info
                }
            }),
            ...mapGetters({
                years: 'app/years',
                list: 'app/list'
            })
        },
        methods: {
            ...mapActions({
                goPic:"pic/goPic"
            }),
            ...mapMutations({
                changeYear: 'app/changeYear',
                detail: 'app/detail'
            }),
            oClick: function (cs) {
                this.current = cs;
            },
            _price:function(){
                this.$router.history.push("/price")
            }
        }
        ,
        mounted(){
            this.goPic(this.$router.currentRoute.query.id)
        }

    }
</script>
<style scoped lang="scss">
    .banner {
        height: 4.29rem;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        p {
            position: absolute;
            bottom: .3rem;
            right: .3rem;
            color: #fff;
            padding: 1px .1rem;
            border-radius: .2rem;
            background: rgba(0, 0, 0, .6);
            font-size: .24rem;
        }
    }

    .msg {
        padding: 0 .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div:first-child {
            p:first-child {
                font-size: .36rem;
                color: red;
                font-weight: 500;
            }
            p:nth-child(2) {
                font-size: .26rem;
                color: silver;
            }
        }
        div:nth-child(2) {
            width: 50%;
            padding-bottom: .6rem;
            button {
                width: 100%;
                border-radius: 6%;
                padding: .3rem 0;
                background: #00afff;
                font-size: .26rem;
                color: #fff;
                border: none;
            }
        }
    }

    li {
        list-style: none;
        span {
            padding-right: .46rem;
        }
    }

    .year {
        border-top: .15rem solid #f4f4f4;
        padding: 0 .3rem;
        font-size: .32rem;
        height: .77rem;
        line-height: .77rem;
        background: #fff;
    }

    .year .active {
        color: #3aacff;
    }

    ul>p {
        padding: 0 .2rem;
        height: .5rem;
        line-height: .5rem;
        font-size: .26rem;
        color: #999;
        background: #f4f4f4;
    }

    ul>li {
        padding: 0 .2rem;
        border-bottom: .18rem solid #f4f4f4;
        overflow: hidden;
        p:nth-child(1) {
            padding: .26rem 0 .18rem;
            font-size: .3rem;
            line-height: 1;
            color: #3d3d3d;
        }
        p:nth-child(2) {
            color: #bdbdbd;
            font-size: .26rem;
        }
        p:nth-child(3) {
            text-align: right;
            padding-bottom: .1rem;
            font-size: .24rem;
            color: #818181;
            span:nth-child(2) {
                font-size: .3rem;
                color: #ff2336;
                margin-left: .1rem
            }
        }
        &>button {
            border: none;
            border-top: 1px solid #eee;
            width: 110%;
            height: .8rem;
            font-size: .32rem;
            color: #00afff;
            background: #fff;
            font-weight: 500;
            margin-left: -.3rem;
        }
    }

    ul>li:last-child {
        border-bottom: 0;
    }

    .oactive {
        color: red;
    }
    section{
        margin-bottom:1.2rem
    }
    footer {
        position: fixed;
        width: 100%;
        bottom: 0;
        z-index: 99;
        background: #3aacff;
        height: 1.2rem;
        color: #fff;
        p {
            text-align:center;
            font-size: .32rem;
            margin-top: .12rem;
            font-weight: 500;
        }
    }
</style>