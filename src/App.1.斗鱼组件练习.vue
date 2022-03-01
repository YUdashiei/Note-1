<template>
  <div>
    <template v-if="data">
      <button @click="getData(data.data.nowPage + 1)">下一页</button>
      <br />
      <douyu-cell v-for="v in data.data.list" :key="v.rid" :data="v" />
    </template>
  </div>
</template>

<script>
import DouyuCell from './components/DouyuCell.vue'
export default {
  components: { DouyuCell },
  data() {
    return {
      data: null,
    }
  },
  mounted() {
    this.getData(1)
  },
  methods: {
    getData(p) {
      const url = 'https://douyu.xin88.top/api/room/list?page=' + p

      this.axios.get(url).then(res => {
        console.log(res)

        this.data = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
