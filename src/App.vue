<template>
  <div>
      <button @click="changeNum('+')">+</button>
      <span>{{num}}</span>
      <button @click="changeNum('-')">-</button>
      <span v-for="(item,key) in oddList" :key="key">{{item}}</span>
      <span>{{num3}}</span>
  </div>
</template>
<script>
  //mapState 辅助函数
  // mapMutations 突变函数
  import {mapState,mapMutations,mapGetters} from "vuex";
  export default{
    computed:{
      ...mapState({
          num:state=>state.app.num
      }),
      ...mapGetters({
        num3:"getNum",
        oddList:"oddList"
      })
    },
    methods:{
      //第一种
      // ...mapMutations({
      //   changeNum:'changeNum'
      // })
      //第二种
      changeNum(type){
        this.$store.commit("changeNum",type)
      }
    },
    mounted(){
      console.log("this.$store...",this.$store.state.app.num)
    }
  }
</script>
<style>
</style>