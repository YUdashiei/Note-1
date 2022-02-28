<template>
  <div>
    <!-- 请求数据使用前, 必须判断 -->
    <template v-if="data">
      <div v-for="v in data.data" :key="v.id">
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
  // 生命周期: 挂载时 -- 当前组件显示在页面上时 触发
  mounted() {
    // 打印axios, 确保 集成完毕;   是undefined 就说明集成失败
    // console.log('axios:', this.axios)
    this.getData() //页面出现后, 会自动请求数据
  },
  methods: {
    getData() {
      const url = 'https://api.xin88.top/bilibili/recommends.json'

      this.axios.get(url).then(res => {
        console.log(res)

        this.data = res.data //存本地
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
