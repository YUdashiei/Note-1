<template>
  <div>
    <!-- 外部 css js 图片的使用 -->
    <my-com />
    <hr />
    <span>MIKE</span>
    <span>LUCY</span>
    <div>xxxxxxxxxxxxxxxxxxxxxxxx</div>
    <div>yyyyyyyyyyyyyyyyyyyyyyy</div>
  </div>
</template>

<script>
// 引入方式: 利用JS的 import 引入 -- 会影响到其他组件
// import './assets/css/my.scss'

import MyCom from './components/MyCom.vue'
export default {
  components: { MyCom },
}
</script>

<style lang="scss" scoped src="./assets/css/my.scss">
// 利用src单独引入方式: 被 scoped 影响, 属于局部引入
// lang: 要根据你引入文件的 具体类型决定
</style>

<style lang="scss" scoped>
// scoped: 作用域, 如果不书写,则会影响到子组件的样式

// 引入方式2: 全局引入, 不受 scoped 影响
// @import url('./assets/css/my.scss');

span {
  border: 2px solid purple;
  box-shadow: 0 0 2px black;
}
</style>
