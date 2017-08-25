import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)   //通过全局方法 Vue.use() 使用插件
Vue.use(VueResource)

const routes = [{
  path:'/',
  component:Home
},{
  path:'/home',
  component:Home
}]

const router = new VueRouter({
  routes
});

var app = new Vue({
  el: '#app',
  router,
  ...App
});
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
