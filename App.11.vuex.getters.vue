<template>
  <div>
    <!-- 计算属性的使用 -->
    <p>num: {{ $store.state.num }}</p>
    <p>num x2: {{ $store.getters.num2 }}, {{ num2 }}</p>

    <p>price: {{ $store.state.price }}</p>
    <p>price x2: {{ $store.getters.price2 }}, {{ price2 }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted() {
    console.log(this.$store)
  },
  computed: {
    // 利用辅助函数快速生成计算属性
    ...mapGetters(['num2', 'price2']),

    // num2() {
    //   return this.$store.getters.num2
    // },
    // price2() {
    //   return this.$store.getters.price2
    // },
  },
}
</script>

<style lang="scss" scoped></style>
