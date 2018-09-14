<template>
    <div class="index">
        <div class="wrap">
            <section>
                <div v-for="(item, index) in brands" :key="index">
                    <ul>
                        <p :id="index">{{index}}</p>
                        <li v-for="(value, key) in item" :key="key" @click="brandList(value.MasterID)" ref="oDetail">
                            <div><img :data-src="value.CoverPhoto" src="../../assets/logo.png"/></div>
                            
                            <span>{{value.Name}}</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <aside @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <span v-for="(item, index) in litters" :key="index">{{item}}</span>
        </aside>
        <p v-show="isflag" id="Tip" ref="Tip"></p>
        <BrandList id="brandList"></BrandList>
    </div>
</template>

<script>
    import BrandList from "./brandList"
    //样式问题 当前客户端看见的应该是 100% 的所示大小
    import { mapState, mapActions } from 'vuex';
    import lazyLoad from "../untils/lazyLoad.js"
    export default {
        data() {
            return {
                isflag: false,
                obrands: false
            }
        },
        components: {
            BrandList
        },
        computed: {
            ...mapState({
                litters: state => state.app.litters,
                brands: state => state.app.brands,
                isShow: state => state.app.isShow
            })
        },
        methods: {
            ...mapActions({
                initState: 'app/initState',
                brandList: 'app/brandList'
            }),

            touchStartD() {
                // console.log(this.$router);
            },
            touchMoveD() {
                this.obrands = false;
            },
            touchEndD() {

            },
            touchStart() {
                _hmt.push(['_trackEvent', env.env + ' 车轮', 'tap', '朱明路的']);
                this.isflag = true;
            },
            touchMove(e) {
                // 获取手指的位置
                let pageY = e.touches[0].pageY;
                // 计算当前在拿一个字母
                let index = Math.floor((pageY - this.marginTop) / this.height);
                // 字母边界处理
                if (index < 0) {
                    index = 0;
                } else if (index > this.litters.length - 1) {
                    index = this.litters.length - 1;
                }
                // 查询id为当前字母的元素
                let ele = document.getElementById(this.litters[index]);
                //显示中心文字
                this.$refs.Tip.innerText = this.litters[index];
                let top = ele.offsetTop;
                // console.log(top)
                // 当该元素距离顶部的高度赋给滚动元素的scorllTop实现滚动
                document.querySelector('.wrap').scrollTop = top;
            },
            touchEnd() {
                this.isflag = false;
            }
        },
        mounted() {
            this.initState();
        },
        updated() {
            // 获取每个字母的高度
            this.height = 0.4 * window.innerWidth / 750 * 100;
            // 获取字母列表距离顶部的高度
            this.marginTop = (window.innerHeight - (this.litters.length) * this.height) / 2;
            lazyLoad(".wrap");
        }
    }
</script>
<style scoped lang="scss">
    .index {
        height: 100%;
    }

    .wrap {
        height: 100%;
        overflow: scroll;
    }

    aside {
        position: fixed;
        top: 50%;
        right: .1rem;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
            font-size: .24rem;
            color: #666;
            font-weight: 500;
            padding: .02rem .1rem;
            height: 0.4rem;
            box-sizing: border-box;
        }
    }

    ul {
        p {
            font-size: .28rem;
            line-height: .4rem;
            background: #f4f4f4;
            padding-left: .3rem;
            color: #aaa;
        }
        li {
            margin: 0 .3rem;
            height: 1.2rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
            &>div {
                width: 1rem;
                height: 1rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            span {
                font-size: .32rem;
                margin-left: .4rem;
            }
        }
    }

    #Tip {
        position: absolute;
        left: 45%;
        top: 40%;
        width: 1rem;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        background: #ccc;
    }

</style>