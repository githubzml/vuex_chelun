<template>
  <div>
      <button @click="changeNum('+')">+</button>
      <span>{{num}}</span>
      <button @click="changeNum('-')">-</button>
  </div>
</template>
<script>
  //mapState 辅助函数
  // mapMutations 突变函数
  import {mapState,mapMutations} from "vuex";
  export default{
    computed:{
      ...mapState({
          num:state=>state.app.num
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