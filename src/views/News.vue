<template>
  <div>
    <!-- 希望: /news  能够切换到当前组件 -->
    <!-- 到路由的配置文件中,添加 路径和组件的 对应关系即可 -->
    <!-- 位置: router/index.js  -->
    <h1>这里是新闻页面</h1>
    <!-- 作者知道 大家都用 计算属性进行简化读取, 所以直接提供了更快捷的方式 -->
    <p>
      震惊! {{ $route.params.name }}今年竟然已经{{ $route.params.age }}岁了!
    </p>
    <p>{{ name }}...{{ age }}</p>
  </div>
</template>

<script>
export default {
  // props: 用于接收组件的属性传参
  // 还可以接收路由传参: 此功能为可选功能, 默认关闭. 需要在 路由配置中开启
  props: ['name', 'age'],
  mounted() {
    console.log('$route:', this.$route)
    // 新式传参语法: 参数在 params 属性里
  },
}
</script>

<style lang="scss" scoped></style>
