import showBlogs from './components/showBlog.vue';
import listBlogs from './components/listBlogs.vue';
import addBlog from './components/addBlog.vue';
import singleBlog from './components/singleBlog.vue';


export default[
  { path:'/',component: showBlogs},
  { path:'/list',component: listBlogs},  
  { path:'/add',component:addBlog},
  { path:'/blog/:id',component:singleBlog}
]