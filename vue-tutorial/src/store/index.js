import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  totalTime: 0,
  list: []
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})





// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex);
//
// // 先写个假数据
// const state = {
//   totalTime: 0,
//   list: [{
//     name : '二哲',
//     avatar : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
//     date : '2016-12-25',
//     totalTime : '6',
//     comment : '12月25日晚上，陪女朋友一起过圣诞节需要6个小时'
//   },{
//     name : '茉莉花开',
//     avatar : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
//     date : '2017-08-28',
//     totalTime : '6',
//     comment : '9月28日晚上，去上海南站坐车回家'
//   }]
// };
//
// export default new Vuex.Store({
//   state,
// })
