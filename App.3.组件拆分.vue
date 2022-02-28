<template>
  <div>
    <!-- 汽车型号列表 -->
    <car-series />
    <hr />
    <!-- 汽车视频 -->
    <car-video />
  </div>
</template>

<script>
import CarSeries from './components/CarSeries.vue'
import CarVideo from './components/CarVideo.vue'
export default {
  components: { CarSeries, CarVideo },
}
</script>

<style lang="scss" scoped></style>
