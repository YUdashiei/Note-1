<template>
  <div>
    <!-- 组件间的参数传递 -->
    <!-- 父子传递 -->
    <!-- 传递方法给子元素: 通过事件传递 @事件名="值" -->
    <!-- 事件名随便起,不要跟系统重复即可: aabb是自定义名称, 不需要提前声明 -->
    <my-son :num="num" @aabb="receiveMsg" />
    <p>
      <button @click="num++">num:{{ num }}</button>
    </p>
    <!-- 子父传递 -->
    <p>子喜欢的队伍: {{ msg }}</p>
    <!-- 兄弟传递 -->
    <!-- 随意关系传递： 事件总线 + vuex 方式 -->
  </div>
</template>

<script>
import MySon from './components/MySon.vue'
export default {
  components: { MySon },
  data() {
    return {
      num: 1,
      msg: '',
    }
  },
  methods: {
    // 父制作一个方法, 用于传递给子
    receiveMsg(msg) {
      console.log('来自子的消息:', msg)
      this.msg = msg
    },
  },
}
</script>

<style lang="scss" scoped></style>
