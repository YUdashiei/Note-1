<template>
  <div>
    <!-- 网络数据data: 起始是null  请求后才有值 -->
    <!-- 判断有值 之后再使用 -->
    <template v-if="data">
      <div v-for="v in data.data" :key="v.nid">
        {{ v.title }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    }
  },
  // 利用生命周期钩子函数: 页面显示的同时 立刻发请求
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      const url = 'http://www.codeboy.com:9999/mfresh/data/news_select.php'

      this.axios.get(url).then(res => {
        console.log(res)

        this.data = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
