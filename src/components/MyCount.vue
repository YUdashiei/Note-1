<template>
  <div>
    <button @click="num--">-</button>
    <span>{{ num }}</span>
    <button @click="num++">+</button>
  </div>
</template>

<script>
export default {
  // property: 属性,  props:属性们
  // 用于声明 组件的属性, 接收传递进来的值
  props: ['num'],
}
</script>

<style lang="scss" scoped></style>
