<template>
  <div>
    <!-- 假想: 此处有超多HTML代码, 需要提取到外部书写 -->
    <!-- components: 组件们, 专门存放抽离的组件 -->
    <!-- 组件命名: 要求大驼峰, 即首字母大写 -->
    <!-- vscode会智能辅助, 自动引入+注册 外来的组件 -->
    <!-- 组件提供4种写法 -->
    <my-com />
    <my-com></my-com>
    <MyCom />
    <MyCom></MyCom>
  </div>
</template>

<script>
// 引入组件库中的 组件
import MyCom from './components/MyCom.vue'
export default {
  // components: 此属性负责注册外来引入的组件, 到当前组件中
  components: { MyCom },
}
</script>

<style lang="scss" scoped></style>
