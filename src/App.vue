<template>
  <div>
    <!-- 组件的生命周期: 准备创建->创建出来->准备显示->显示到页面-> 更新自身 -> 准备销毁 -> 销毁 -->
    <!-- 组件的每个周期都会触发对应的方法 -> 称为  钩子方法 -->

    <!-- 人的生命周期：备孕->怀孕->待产->出生->更新自身->快死了->死了 -->
    <button @click="show = true">添加</button>
    <button @click="show = false">删除</button>
    <my-life v-if="show" />
  </div>
</template>

<script>
import MyLife from './components/MyLife.vue'

export default {
  components: { MyLife },
  data() {
    return {
      show: false, //用于切换组件的添加/删除
    }
  },
}
</script>

<style lang="scss" scoped></style>
