<template>
  <div>
    <!-- xin88.top -->
    <button @click="getData(1)">请求数据</button>
    <hr />

    <template v-if="data">
      <!-- 利用计算属性,读取数据项, 简化HTML代码 -->
      <p>总页数:{{ pageCount }}</p>
      <p>当前页:{{ nowPage }}</p>
      <button @click="getData(nowPage - 1)" :disabled="nowPage == 1">
        上一页
      </button>
      <button @click="getData(nowPage + 1)" :disabled="nowPage == pageCount">
        下一页
      </button>
      <hr />

      <div class="cell" v-for="v in data.data.list" :key="v.rid">
        <!-- 有些校区屏蔽图片, 可能出不来 -->
        <img :src="v.roomSrc" alt="" />
        <div>{{ v.nickname }}</div>
        <div>{{ v.roomName }}</div>
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
  methods: {
    // getData(1) getData(2)  getData(3)
    getData(page) {
      const url = `https://douyu.xin88.top/api/room/list?page=${page}&type=yz`

      this.axios.get(url).then(res => {
        console.log(res)
        // 本地 = 请求的
        this.data = res.data
      })
    },
  },
  // 计算属性: 作用函数不用()自动触发 -- 简化HTML中的JS代码
  computed: {
    nowPage() {
      return this.data.data.nowPage
    },
    pageCount() {
      return this.data.data.pageCount
    },
  },
}
</script>

<style lang="scss" scoped>
.cell {
  display: inline-block;
  margin: 0 10px 10px 0;
  width: 200px;

  img {
    width: 100%;
    height: 120px;
    border-radius: 4px;
  }
}
</style>
