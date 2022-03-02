<template>
  <div>
    <!-- 修改操作 -->
    <div>num: {{ num }}</div>
    <button @click="updateNum(1)">num+1</button>
    <button @click="updateNum(10)">num+10</button>
    <button @click="updateNum(100)">num+100</button>

    <p>price: {{ price }}</p>
    <button @click="$store.commit('updatePrice', 1000)">1000</button>
    <button @click="$store.commit('updatePrice', 2000)">2000</button>
    <!-- 作为方法: 简化时应该书写在methods里 -->
    <button @click="updatePrice(3000)">3000</button>
    <button @click="updatePrice(4000)">4000</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  methods: {
    // 利用辅助函数: 快速生成
    ...mapMutations(['updatePrice']),
    // updatePrice(p) {
    //   this.$store.commit('updatePrice', p)
    // },

    updateNum(n) {
      console.log(this.$store)
      // $store中有 commit 属性
      // 专门设计用来触发 mutations 中的方法
      // commit(要触发的方法名, 传递方法的参数)
      this.$store.commit('addNum', n)
    },
  },
  computed: {
    ...mapState(['num', 'price', 'gname']),
    ...mapGetters(['num2', 'price2']),
  },
}
</script>

<style lang="scss" scoped></style>
