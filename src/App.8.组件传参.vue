<template>
  <div>
    <!-- 组件的传参写法:  称为父子传参  -->
    <!-- App.vue 中, 使用了 my-count, 就称 App 是 my-count 的父元素 -->

    <!-- 关于后台的报错 : vue为了数据安全制定了一个原则, 谁的数据谁自己修改 -->
    <!-- 目前报错: 在当前App.vue中把 10传给子元素, 子元素修改了这个10; 违背了 父元素的10 只能父元素自己改, 子元素不允许修改 -->
    <!-- 以后讲解决方式 -->
    <my-count num="10" />
    <my-count num="1" />
    <my-count num="100" />
  </div>
</template>

<script>
import MyCount from './components/MyCount.vue'
export default {
  components: { MyCount },
}
</script>

<style lang="scss" scoped></style>
