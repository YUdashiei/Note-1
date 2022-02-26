<template>
  <div>
    <button @click="num--">-</button>
    <span>{{ num }}</span>
    <button @click="num++">+</button>
  </div>
</template>

<script>
export default {
  // 每次复用组件时, 都会触发 data 函数, 获取数据. 由于函数调用后会返回全新的数据对象, 所以 组件不会互相影响数据
  data() {
    // return 数据对象
    return {
      num: 10,
    }
  },
}
</script>

<style lang="scss" scoped></style>
