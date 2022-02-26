<template>
  <div>
    <h1>生命周期演示</h1>
    <button @click="num++">{{ num }}</button>
    <!-- 
      生命周期的作用:
      1. 面试必考
      2. 应用场景:  希望组件在显示时 立刻请求数据 进行展示

      之前: 通过点击 请求数据 按钮, 来获取数据进行展示
      实际开发: 页面显示时 自动请求数据

     -->
    <template v-if="data">
      <div v-for="v in data.data" :key="v.lid">
        <span>{{ v.title }}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      data: null,
    }
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

  // 固定名称的属性, 在固定的周期自动触发, 需要死记硬背
  beforeCreate() {
    // before: 在...之前
    console.log('beforeCreate: 组件将要创建时 -- 备孕 ')
  },
  created() {
    // create: 创建
    console.log('created: 组件在内存中创建完毕 -- 怀胎10月')
  },
  beforeMount() {
    console.log('beforeMount: 组件将要显示到页面 -- 待产')
  },
  mounted() {
    console.log('mounted: 组件已经显示到页面 -- 出生')
    // 此处调用 获取数据的方法, 页面显示出来的同时 立刻请求数据
    this.getData()
  },
  beforeUpdate() {
    console.log('beforeUpdate: 将要更新自身')
  },
  updated() {
    console.log('updated: 更新完毕')
  },

  beforeDestroy() {
    console.log('beforeDestroy: 组件将要销毁 -- 快死了')
  },
  destroyed() {
    console.log('destroyed: 组件销毁完毕 -- 死了')
  },
}
</script>

<style lang="scss" scoped></style>
