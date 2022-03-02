<template>
  <div>
    <!-- 事件总线: eventBus  :事件车  -->
    <!-- 实现任意关系的组件传参 -->
    <com-three />
    <com-four />
  </div>
</template>

<script>
import ComFour from './components/ComFour.vue'
import ComThree from './components/ComThree.vue'
export default {
  components: { ComThree, ComFour },
}
</script>

<style lang ComOne="scss" scoped></style>
