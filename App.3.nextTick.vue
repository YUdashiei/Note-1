<template>
  <div>
    <!-- nextTick: 下一个渲染周期 -->
    <my-tick v-if="show" />
    <button @click="reset">重置</button>
  </div>
</template>

<script>
import MyTick from './components/MyTick.vue'
export default {
  components: { MyTick },
  data() {
    return {
      show: true,
    }
  },
  methods: {
    reset() {
      // 刷新: 先移除 再添加
      // vue的设计: 方法执行到结尾, 把最终的效果更新DOM, 所以false没执行
      // 原生DOM: 每行代码的执行都会刷新DOM
      this.show = false
      // 在本次渲染完毕后, 立刻执行下一个任务:  nextTick
      this.$nextTick(() => (this.show = true))

      //$nextTick: 在本次渲染结束后的下一次渲染中, 例如执行 true 的操作
    },
  },
}
</script>

<style lang="scss" scoped></style>
