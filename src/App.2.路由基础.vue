<template>
  <div>
    <!-- 路由的作用: 根据路径来切换组件;  搭配路由使用的组件要求存储在 views 里-->
    <h1>路由练习</h1>
    <!-- 类似超链接的a标签,用于修改当前路径 -->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/news">新闻</router-link> |
    <router-link to="/contact">联系我们</router-link> |
    <router-link to="/login">登录</router-link> |
    <router-link to="/register">注册</router-link>
    <hr />
    <!-- router-view: 由路由模块提供的组件, 属于一种占位符  -->
    <!-- 作用: 根据路径的变化, 切换成对应的组件 -->
    <router-view />
    <hr />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// 组件如何添加样式?
// 大多数组件需要用 class 方式, 即 给组件绑定一个 class 属性
// router-link 特殊: 经过处理后 最终会以 a 标签的形式显示
a {
  display: inline-block;
  padding: 5px 10px;
  background-color: #36d;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
}

// router-link 自带两个样式: 根据当前的路径进行切换, 代表当前项
// router-link-exact-active: 精确匹配后添加.  例如 /a/b/c, 精确匹配 /a/b/c
// router-link-active: 模糊匹配后添加  /a/b/c  匹配到 / /a /a/b /a/b/c

// 例如: 当前路径是 /about  匹配到 /  和 /about
// .router-link-active {
//   background-color: orange;
// }

.router-link-exact-active {
  background-color: orange;
}
</style>
