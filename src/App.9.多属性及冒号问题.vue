<template>
  <div>
    <!-- 先写 小于号 才有提示 -->
    <my-news title="亮亮今晚出差西安" date="2021/02/25" />
    <!-- 对比 两种写法的差异 -->
    <!-- 不加:, 则值是普通的字符串 -->
    <my-news title="a" date="b" />
    <!-- 加 : , 则值是 JS代码, 这里的a和b 是变量 -->
    <my-news :title="a" :date="b" />
  </div>
</template>

<script>
import MyNews from './components/MyNews.vue'
export default {
  components: { MyNews },
  data() {
    return {
      a: '铭铭今晚要加班',
      b: '2011/12/22',
    }
  },
}
</script>

<style lang="scss" scoped></style>
