<template>
  <div>
    <!--`v-if`是vue的一个指令-->
    <!--`$route.path`是当前路由对象的路径，会被解析为绝对路径当-->
    <!--`$route.path !== '/time-entries/log-time'`为`true`是显示，`false`，为不显示。-->
    <!--to 路由跳转地址-->
    <router-link
      v-if="$route.path !== '/time-entries/log-time'"
      to="/time-entries/log-time"
      class="btn btn-primary">
      创建
    </router-link>

    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>创建</h3>
    </div>

    <hr>

    <router-view></router-view>

    <div class="time-entries">
      <p v-if="!plans.length"><strong>还没有任何计划</strong></p>

      <div class="list-group">
        <!--v-for循环，注意参数顺序为(item,index) in items-->
        <a class="list-group-item" v-for="(plan,index) in plans">
          <div class="row">
            <div class="col-sm-3 user-details">

              <!--
              `:src`属性，这个是vue的属性绑定简写`v-bind`可以缩写为`:`
              比如a标签的`href`可以写为`:href`
              并且在vue的指令里就一定不要写插值表达式了(`:src={{xx}}`)，vue自己会去解析
              -->

              <img :src="plan.avatar" class="avatar img-circle img-responsive" />
              <p class="text-center">
                <strong>
                  {{ plan.name }}
                </strong>
              </p>
            </div>

            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ plan.totalTime }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ plan.date }}
              </p>
            </div>

            <div class="col-sm-6 comment-section">
              <p>{{ plan.comment }}</p>
            </div>

            <div class="col-sm-1">
              <button
                class="btn btn-xs btn-danger delete-button"
                @click="deletePlan(index)">
                X
              </button>
            </div>

          </div>
        </a>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'TimeEntries',
    computed : {
      plans () {
        // 从store中取出数据
        return this.$store.state.list
      }
    },
    methods : {
      deletePlan(idx) {
        // 稍后再来说这里的方法
        // 减去总时间
        this.$store.dispatch('decTotalTime',this.plans[idx].totalTime)
        // 删除该计划
        this.$store.dispatch('deletePlan',idx)
      }
    }
  }
</script>

<style>
  .avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>
