<template>
  <div>
    <!-- 路径传参的语法:  路径?参数=值&参数=值 -->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- 传统参数传递, 利用 ?  繁琐,不常用 -->
    <router-link to="/about?name=亮亮&age=37">关于亮亮</router-link> |
    <router-link to="/about?name=涛涛&age=30">关于涛涛</router-link> |
    <!-- 新式传参:  通过 / 间隔, 需要在配置文件中进行配置 -->
    <router-link to="/news/亮亮/37">新闻1</router-link> |
    <router-link to="/news/涛涛/30">新闻2</router-link> |
    <hr />
    <!-- 路由占位符组件: 根据路径自动切换成对应组件  -->
    <router-view />
    <hr />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
