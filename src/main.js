// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from './components/Header/routes'
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)



 
const router=new VueRouter({
      routes,
    mode:'history'
  }
) 



Vue.directive('rainbow',{
  //bingding 可以拿到 例如v-for="这是一个参数"，中的参数
  //使用binding.value获取

  //v-on:click="click"中的:click 可以通过binding.arg获取
  bind(el,binding,vnode){
    // console.log(binding);
    // el.style.color="aqua";
    el.style.color="#"+Math.random().toString(16).slice(2,8);
}});


Vue.directive("theme",{
  bind(el,binding,vnod)
  {
     if(binding.arg=='color')
      {
        if(binding.value=='day')
          {
            el.style.background="yellow";
            el.style.padding="20px";
          }
          if(binding.value=='night')
          {
            el.style.background="black"; el.style.padding="20px";
          }
      }
    }
})



//实现过滤器
// <h5>{{blog.body | snippet}}</h5>
Vue.filter('snippet',function(value){
    return value.slice(0,50)+'...';
})

// 都是全局的
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
