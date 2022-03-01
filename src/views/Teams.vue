<template>
  <div>
    <h2>请选择你喜欢的队伍:</h2>
    <label> <input type="checkbox" /> V5 </label>
    <br />
    <label> <input type="checkbox" /> WBG </label>
    <br />
    <label> <input type="checkbox" /> LNG </label>
    <br />
    <label> <input type="checkbox" /> EDG </label>
    <br />
  </div>
</template>

<script>
export default {
  created() {
    console.log('created: teams组件完成创建')
  },
  destroyed() {
    console.log('destroyed: teams组件已销毁!')
  },
  // 保持活动keep-alive 后的组件: 带有两个额外的周期:
  activated() {
    console.log('activated: 激活状态')
  },
  deactivated() {
    console.log('deactivated: 非激活状态')
  },
}
</script>

<style lang="scss" scoped></style>
