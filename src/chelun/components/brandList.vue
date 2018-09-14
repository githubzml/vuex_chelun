<template>
    <div @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="section" :class="isCarShow?'active':''">
        <ul v-for="(item,index) in makeList" :key="index">
            <p>{{item.GroupName}}</p>
            <li v-for="(value,key) in item.GroupList" :key="key" @click="mgoDetail(value.SerialID)">
                <dl>
                    <!-- <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link> -->
                    <router-link :to="{ path: 'car', query: { id: `${value.SerialID}` }}">
                        <dt><img :src="value.Picture" alt="CAR" /></dt>
                        <dd>
                            <p>{{value.DealerPrice}}</p>
                            <p>{{value.AliasName}}</p>
                        </dd>
                    </router-link>
                </dl>
            </li>
        </ul>
        <!-- https://h5.chelun.com/2017/official/index.html#/
        https://h5.chelun.com/2017/official/index.html#/car?id=2593
        https://h5.chelun.com/2017/official/index.html#/car?id=2573 -->
    </div>
</template>
<script>
    import { mapState, mapActions, mapMutations } from "vuex"
    export default {
        computed: {
            ...mapState({
                makeList: state => state.app.makeList,
                isCarShow: state => {
                    return state.app.isCarShow;
                }
            })
        },
        methods: {
            ...mapMutations({
                hideCarList: "app/hideCarList"
               
            }),
            ...mapActions({
                mgoDetail:"app/mgoDetail"
            }),
            touchStart(e) {
                //***如果没有详情的话 它会自己跳走 给他一个最初位置 不让它跳走
                this.pageX=0;
                this.touch = e.touches[0];
            },
            touchMove(e) {
                let touch = e.touches[0];
                //最终-初始
                this.pageX = touch.pageX - this.touch.pageX;
                // console.log(this.pageX);
                //只要求向右滑动
                if (this.pageX > 0) {
                    this.$refs.section.style = `transform:translate3d(${this.pageX}px,0,0)`
                }
            },
            touchEnd() {
                this.$refs.section.style = ``;
                if (this.pageX > 100) {
                    this.hideCarList();
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    div {
        position: fixed;
        top: 0px;
        right: 0;
        width: 75%;
        transition: all .2s ease;
        background: #fff;
        z-index: 100;
        height: 100%;
        box-shadow: 0 0 0.5rem #eee;
        /* 初始默认在屏幕右边隐藏 */
        transform: translate3d(100%, 0, 0);
        overflow-y: scroll;
        ul {
            &>p {
                margin-left: 1px;
                font-size: .28rem;
                line-height: .48rem;
                background: #f2f2f2;
                padding-left: .3rem;
                color: #717171;
            }
            li {
                height: 1.4rem;
                box-sizing: border-box;
                border-bottom: 1px solid #ddd;
                dl {
                    a {
                        display: inline-block;
                        text-decoration:none;
                        width: 100%;
                        display: flex;
                        dt {
                            width: 40%;
                            img {
                                margin: 0 .1rem 0 .2rem;
                                width: 1.8rem;
                                height: 1.2rem;
                            }
                        }
                        dd {
                            width: 60%;
                            p {
                                font-size: .34rem;
                                color: #5f687a;
                            }
                            &>p:nth-child(2) {
                                margin-top: .1rem;
                                font-size: .28rem;
                                color: red;
                            }
                        }
                    }
                }
            }
        }
    }

    div .active {
        transform: translate3d(0, 0, 0);
        transition: transform .3s linear;
    }
</style>