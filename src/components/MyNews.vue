<template>
  <div>
    <div>{{ title }}-{{ date }}</div>
  </div>
</template>

<script>
export default {
  // 多属性的声明方式:
  props: ['title', 'date'],
}
</script>

<style lang="scss" scoped></style>
