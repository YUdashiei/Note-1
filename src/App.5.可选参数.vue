<template>
  <div>
    <router-link to="/">Home</router-link> |
    <!-- 需要在配置文件中, 利用 ? 对参数进行标识 -->
    <router-link to="/login">登录页</router-link> |
    <router-link to="/login/doudou">登录页带参</router-link>
    <!-- 可选路由参数 -->
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
