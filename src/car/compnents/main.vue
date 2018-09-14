<template>
    <div>
        <ul>
            <li v-for="(item,key) in data" :key="key">
                <dl>
                    <dt><img :src="item.CoverPhoto" alt="" /></dt>
                    <dd>{{item.Name}}</dd>
                </dl>
            </li>
        </ul>
       
        <!-- <ul>
            <li v-for="item in tit">{{item}}</li>
        </ul> -->
    </div>

</template>
<script>
    export default {
        //         CoverPhoto
        //             :
        //             "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_9_100.png"
        // MasterID
        //             :
        //             "9"
        // Name
        //             :
        //             "奥迪"
        // Spelling
        //             :
        //             "Aodi"
        // tagurl
        //             :
        //             "http://picture.eclicks.cn/g1/l/2017/09/22/c3c70104705ff62e_86_32.png"
        data() {
            return {
                data:null,
                // tit: [],
                // Obj: {
                //     content: []
                // }
            }
        },
        components: {
            // Child
        },
        mounted() {
            // fetch("https://baojia.chelun.com/v2-car-getMasterBrandList.html?_1535698551812").then(
            //     function(res){
            //         return res.json()
            //     }
            // ).then(function(myjson){
            //     console.log(myjson);
            // })
            this._getData();
        },
        methods: {
            _getData() {
                fetch("https://baojia.chelun.com/v2-car-getMasterBrandList.html?_1535698551812")
                    .then(res => res.json())
                    .then(
                        myjson =>
                            // console.log(myjson.data)
                            this.data = myjson.data
                            // myjson.data.forEach((item, key) => {
                            //     let tit = item.Spelling.slice(0, 1);

                            //     if(this.tit.indexOf(tit)>-1){

                            //     }else{
                            //         this.tit.push(tit);
                            //         // if(this.Obj.tit[key]===tit){
                            //         //     this.Obj.content.push(item)
                            //         // }
                            //     }
                            // })
                    )
            }

        }
    }
</script>
<style scoped>
    ul,
    dl {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    dl {
        display: flex;
    }

    dl dt {
        width: 30px;
        height: 30px;
        padding-top: 10px;
    }

    dl dt img {
        width: 100%;
        height: 100%;
    }

    ul li {
        height: 45px;
        line-height: 45px;
        border-bottom: 1px solid #ccc;
    }
</style>