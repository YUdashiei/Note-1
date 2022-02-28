<template>
  <div>
    <!-- 五星好评无法使用, 是数据问题, 不用管 -->
    <template v-if="data">
      <!-- 页面上的3个部分: 结构相同(css), 内容不同(数据) -->
      <!-- data的值是 JS的计算属性,而非字符串,  必须用 :data 方式 -->
      <course-list title="热门排行" :data="hot" />
      <course-list title="新课排行" :data="newC" />
      <!-- <course-list title="五星评价" :data="star5" /> -->
    </template>
  </div>
</template>

<script>
import CourseList from './components/CourseList.vue'
export default {
  components: { CourseList },
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
      const url = 'https://api.xin88.top/mooc/rank_course.json'

      this.axios.get(url).then(res => {
        console.log(res)
        this.data = res.data
      })
    },
  },
  computed: {
    hot() {
      return this.data.result.rankForHotCourseTopVo
    },
    star5() {
      return this.data.result.rankFor5StarEvaluationCourseVo
    },
    newC() {
      return this.data.result.rankForNewCourseVo
    },
  },
}
</script>

<style lang="scss" scoped></style>
