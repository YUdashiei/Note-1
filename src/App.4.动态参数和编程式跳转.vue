<template>
  <div>
    <router-link to="/">Home</router-link> |
    <!-- 方式1: 通过 :to 转换为JS代码, 利用模板字符串进行拼接 -->
    <router-link :to="`/news/${name}/${age}`">新闻1</router-link> |
    <!-- 其他方式: 命名跳转, 支持语法糖,  age:age 简化成age -->
    <router-link :to="{ name: 'news', params: { name: name, age } }"
      >新闻1</router-link
    >

    <!-- 编程式跳转 和 参数动态拼接 -->
    <hr />
    <button @click="goHome">前往首页</button>
    <button @click="goNews">前往新闻页</button>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '凯凯',
      age: 32,
    }
  },
  methods: {
    goHome() {
      // $route: 存储当前路由的相关信息, 例如参数
      // $router: 当前路由对象, 包含所有路由操作, $route仅仅是此对象中的一个属性
      console.log(this) //查看 $router 属性

      // $router 的 push 属性, 用于切换当前路径
      // 关注: 编程式跳转 如果重复跳转 -- 当前路径 跳转 当前路径, 会报错: 重复跳转
      if (this.$route.path != '/') this.$router.push('/')
    },
    goNews() {
      let path = `/news/${this.name}/${this.age}`

      if (this.$route.path != path) this.$router.push(path)
    },
  },
}
</script>

<style lang="scss" scoped></style>
