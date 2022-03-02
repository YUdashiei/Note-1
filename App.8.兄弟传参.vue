<template>
  <div>
    <!-- 兄弟传参: 依赖共同的父元素 实现中转 -->
    <com-one />
    <com-two :num="num" />
    <p>num:{{ num }}</p>
  </div>
</template>

<script>
import ComOne from './components/ComOne.vue'
import ComTwo from './components/ComTwo.vue'
export default {
  components: { ComOne, ComTwo },
  data() {
    return {
      num: null,
    }
  },
}
</script>

<style lang="scss" scoped></style>
