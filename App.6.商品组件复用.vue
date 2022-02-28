<template>
  <div>
    <template v-if="data">
      <!-- :属性名="值"   属性名是通过props 在组件中声明的 -->
      <!-- 值v: 是v-for循环中的v -->
      <product-cell v-for="v in data.data" :key="v.lid" :v="v" />
    </template>
  </div>
</template>

<script>
import ProductCell from './components/ProductCell.vue'
export default {
  components: { ProductCell },
  data() {
    return {
      data: null,
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      const url = 'http://www.codeboy.com:9999/data/product/list.php'

      this.axios.get(url).then(res => {
        console.log(res)

        this.data = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
