<template>
  <div>
    <com-six />
    <p>num:{{ $store.state.num }}, {{ num }}</p>
    <p>num:{{ $store.state.gname }}, {{ gname }}</p>
    <p>num:{{ $store.state.price }}, {{ price }}</p>
  </div>
</template>

<script>
// 辅助函数: mapState, 可以把 数组快速转换成 计算属性中的方法
import { mapState } from 'vuex'

import ComSix from './components/ComSix.vue'
export default {
  components: { ComSix },
  mounted() {
    // $store:  Vuex模块自动在 vue对象中注入的属性
    console.log(this) // 找到其中的 $store.state

    var res = mapState(['num', 'gname', 'price'])
    console.log(res)
  },
  computed: {
    // ...: 对象的展开语法, 去掉对象的 {} 包围
    ...mapState(['num', 'gname', 'price']),

    // num: function () {
    //   return this.$store.state.num
    // },
    // gname() {
    //   return this.$store.state.gname
    // },
    // price() {
    //   return this.$store.state.price
    // },
  },
}
</script>

<style lang="scss" scoped></style>
