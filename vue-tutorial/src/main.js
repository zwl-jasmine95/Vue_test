import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import store from './store'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)   //通过全局方法 Vue.use() 使用插件
Vue.use(VueResource)

const routes = [{
  path:'/',
  component:Home
},{
  path:'/home',
  component:Home
},{
  path : '/time-entries',
  component : TimeEntries,
  children : [{
    path : 'log-time',
    // 懒加载
    component : resolve => require(['./components/LogTime.vue'],resolve),
  }]
}]
  
const router = new VueRouter({
  routes
});

var app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
