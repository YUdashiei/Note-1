<template>
  <div>
    <!-- 外部的JS -->
  </div>
</template>

<script>
// 此引入写法, 对应 export 导出方式, 变量名固定
import { PI, abs } from './assets/js/api'
// 此引入写法, 对应export default, 名称自定义, API 可以换XYZ之类, 都可以
import API from './assets/js/api'

export default {
  mounted() {
    console.log(PI)
    console.log(API.a, API.b)
    abs()
  },
}
</script>

<style lang="scss" scoped></style>
