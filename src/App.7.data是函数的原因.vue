<template>
  <div>
    <!-- 重复使用, 为什么数据是独立的? -->
    <my-counter />
    <my-counter />
    <my-counter />
  </div>
</template>

<script>
import MyCounter from './components/MyCounter.vue'
export default {
  components: { MyCounter },
}
</script>

<style lang="scss" scoped></style>
