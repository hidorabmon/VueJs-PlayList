import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);         //告知Vue使用VueResource模組，支援後續$http的關鍵字
Vue.use(VueRouter);           //告知Vue使用VueRouter模組，支援後續 Router 物件

const router = new VueRouter({      //宣告 VueRouter 物件，設定 URL 屬性
  routes:Routes,
  mode:'history'        //採取 URL 無須加 # 字的要求
});


//Custom directives
// Vue.directive('rainbow',{
//   bind(el,binding,vnode){
//     el.style.color = '#' + Math.random().toString().slice(2,8);
//   }
// })

//Filters
// Vue.filter('to-uppercase',function(value){
//   return value.toUpperCase();
// });
Vue.filter('snippet', function(value){          //在 main.js 宣告定義可以在所有 Vue 裡使用的 Filter
  return value.slice(0,100) + '...';
})

//Cutsom directives
Vue.directive('theme',{                         //在 main.js 宣告定義可以在所有 Vue 裡使用的 directives
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth='1200px';
    }else if(binding.value =='narrow'){
      el.style.maxWidth = '560px';
    }
    if(binding.arg == 'cloumn'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
