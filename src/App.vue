<template>
  <div>
    <!-- <show-blog></show-blog>
    <list-blogs></list-blogs> -->
    <add-header></add-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlogs from './components/listBlogs.vue';
import header from './components/header.vue';



export default {
  components:{
    'add-blog':addBlog,
    'show-blog':showBlog,
    'list-blogs':listBlogs,
    'add-header':header
  },
  data () {
    return {

    }
  },
  methods:{

    
  }
}
</script>

<style>

</style>
