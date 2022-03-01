<template>
  <div class="cell">
    <div>
      <img :src="data.roomSrc" alt="" />
      <div>{{ data.hn }}</div>
      <div>{{ data.nickname }}</div>
    </div>
    <div>{{ data.roomName }}</div>
  </div>
</template>

<script>
export default {
  // 接收外来的值
  // 想象成函数的 新参:  使用时必须传入参数
  props: ['data'],
}
</script>

<style lang="scss" scoped>
.cell {
  user-select: none;
  display: inline-block;
  margin: 0 10px 10px 0;
  width: 300px;

  > div:first-child {
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    color: white;

    > img {
      width: 100%;
      // 图片默认是行元素,底部有空白位置
      // 改成块元素, 可以去掉空白
      display: block;
    }
    > div:nth-child(2) {
      position: absolute;
      right: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 4px;
    }
    > div:nth-child(3) {
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 4px;
    }
  }
}
</style>
