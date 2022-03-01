<template>
  <div>
    <!-- 路由守卫: 配置文件中添加 -->
    <router-link to="/">Home</router-link> |
    <router-link to="/login">登录</router-link> |
    <router-link to="/register">注册</router-link> |
    <router-link to="/contact">联系我们</router-link> |
    <router-link to="/teams">喜欢的队伍</router-link> |
    <hr />
    <!-- 路由切换组件时: 默认会销毁不用的组件, 来节省内存 -->
    <!-- keep-alive: 保持-活动  简称 保活 -->

    <!-- 个性化设定: 哪些需要保持活动, 哪些不需要 -->
    <!-- 做法: 两个 router-view -->
    <!-- 为需要保活的组件: 添加元数据meta -->
    <keep-alive>
      <!-- 如果 当前路由中, 元数据里, keepAlive 属性为true, 则加载这个路由元素 -->
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <!-- ! :逻辑非,  keepAlive 为假,  非假为真.  则显示这里的 路由元素 -->
    <router-view v-if="!$route.meta.keepAlive" />
    <button @click="num++">{{ num }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    }
  },
  // 监听器: 监听任意属性的变化
  watch: {
    // 要监听的属性名: 变化时触发的方法
    // num: function (newValue, oldValue) {
    // 语法糖简化:  省略 : function
    num(newValue, oldValue) {
      console.log('新值newValue:', newValue)
      console.log('旧值oldValue:', oldValue)
    },
    // 监听 路由的变化 $route
    $route(to, from) {
      // 形参名可以随便起, 有含义即可,  to: 代表到哪里去, 即新的值
      // console.log('to:', to)
      console.log('keepAlive:', to.meta.keepAlive)
    },
  },
}
</script>

<style lang="scss" scoped></style>
