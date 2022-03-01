<template>
  <div>
    <h1>关于{{ $route.query.name }}</h1>
    <p>今年{{ $route.query.age }}岁</p>
    <!-- 利用计算属性, 简化使用时的读取 -->
    <p>{{ name }}...{{ age }}</p>
  </div>
</template>

<script>
export default {
  // 页面显示时打印路由参数
  mounted() {
    console.log(this) // 后台查看 其中的 $route 属性
    // $route: 是路由模块注入到 vue 对象中的 外来属性, 所以是浅色的
    // 包含了 当前路由的相关信息
    // 其中的 query 属性, 存储了通过 ? 方式传递的参数
  },
  computed: {
    name() {
      return this.$route.query.name
    },
    age() {
      return this.$route.query.age
    },
  },
}
</script>

<style lang="scss" scoped></style>
