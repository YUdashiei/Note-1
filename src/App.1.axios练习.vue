<template>
  <div>
    <button @click="getData">请求数据</button>

    <!-- data:初始值是null,  null.data 对null读属性会报错! 代码直接崩溃 -->
    <!-- v-if: 判断data 有值, 才加载后续代码 -->
    <!-- v-if 和 v-for 不允许放在同一个标签里使用, 有性能问题 -- 每次循环都会进行判断 -->
    <!-- 要求: v-if 可以放到外部书写 -->
    <!-- template: 一个虚拟的容器,不影响css布局, 就是为了配合v-if使用, 标注影响范围 -->
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
      data: null, //准备变量, 用来存放 请求到的数据
    }
  },
  methods: {
    getData() {
      console.log(this)
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
