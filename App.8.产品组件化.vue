<template>
  <div>
    <!-- http://www.codeboy.com:9999/mfresh/data/product_select.php -->
    <!-- 图片前缀域名: http://www.codeboy.com:9999/mfresh/ -->
    <template v-if="data">
      <goods-list v-for="v in data.data" :key="v.pid" :v="v" />
    </template>
  </div>
</template>

<script>
import GoodsList from './components/GoodsList.vue'

export default {
  components: { GoodsList },
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
      const url = 'http://www.codeboy.com:9999/mfresh/data/product_select.php'

      this.axios.get(url).then(res => {
        console.log(res)

        this.data = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
