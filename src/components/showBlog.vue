 <!--Custom directives-->
<!--
<template>
  <div v-theme:cloumn="'narrow'" id="show-blog">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" :key="blog.id" class="single-blog">
    <h2 v-rainbow>{{blog.title}}</h2>
    <article>{{blog.body}}</article>
    </div>
  </div>
</template>
-->
<!--Filters-->

<template>
  <div id="show-blog">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
    <router-link v-bind:to="'/blog/' + blog.id"><h2>{{blog.title | to-uppercase}}</h2></router-link>
    <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  
  data () {
    return {
      blogs : [],
      search:''
    }
  },
  // //從線上服務取資料
  // created(){
  //   this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
  //     this.blogs = data.body.slice(0,10);
  //   })
  // },
  //從自製的資料庫 firebase 取資料
  created(){
    this.$http.get('https://vue-playlist-da189.firebaseio.com/post.json').then(function(data){
      return data.json();
      }).then(function(data){
        var blogsArray = [];
        for(let key in data){
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        console.log(blogsArray); 
        this.blogs = blogsArray;
      })
  },
  computed:{
    // filteredBlogs:function(){
    //   return this.blogs.filter((blog)=>{
    //     return blog.title.match(this.search);
    //   })
    // }
  },
  filters:{
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  directives:{
    'rainbow':{
        bind(el,binding,vnode){
      el.style.color = '#' + Math.random().toString(16).slice(2,8);
      }
    }
  },
  mixins:[searchMixin]
}
</script>

<style>
#show-blogs{
  max-width:800px;
  margin:0 auto;
}
.single-blog{
  padding:20px;
  margin:20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
