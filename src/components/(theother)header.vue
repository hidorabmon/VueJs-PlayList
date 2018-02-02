<template>
  <header>
    <h1 v-on:click="changeTitle()">{{title}}</h1>
  </header>
</template>

<script>
import { bus } from '../main';
export default {
  props:{
    title:{
      type:String
    }
  },
  data () {
    return {
     
    }
  },
  methods:{
    changeTitle:function(){
      //this.$emit('changeTitle','Vue Wizards');
        this.title = 'Vue Wizards';
        bus.$emit('titleChange','Vue Wizards');
    }
  }
}
</script>

<style scoped>
header{
  background: lightgreen;
  padding: 3px;
}
h1{
  color: #222;
  text-align: center;
}
</style>
