<template>
  <div>
    <!-- http://www.codeboy.com:9999/data/product/list.php?pno=1 -->
    <button @click="getData(1)">请求数据</button>
    <template v-if="data">
      <div>
        <div class="cell" v-for="v in data.data" :key="v.lid">
          <span>{{ v.title }}</span>
        </div>
      </div>
      <div class="pages">
        <!-- 为什么不用 disabled 属性??  这是表单元素的属性, span标签没有 -->
        <span @click="getData(pno - 1)" :class="{ disabled: pno == 1 }"
          >上一页</span
        >
        <span
          @click="getData(p)"
          :class="{ cur: p == pno }"
          v-for="p in pageCount"
          :key="p"
          >{{ p }}</span
        >
        <span @click="getData(pno + 1)" :class="{ disabled: pno == pageCount }"
          >下一页</span
        >
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
    getData(pno) {
      const url = `http://www.codeboy.com:9999/data/product/list.php?pno=${pno}`

      this.axios.get(url).then(res => {
        console.log(res)
        this.data = res.data
      })
    },
  },
  computed: {
    pageCount() {
      return this.data.pageCount
    },
    pno() {
      return this.data.pno
    },
  },
}
</script>

<style lang="scss" scoped>
.cell {
  padding: 10px;
  border-bottom: 1px dashed gray;
}
.pages {
  user-select: none;
  margin: 10px;
  display: flex;

  span {
    padding: 4px 10px;
    border: 1px solid gray;
    border-radius: 3px;
    margin-right: 4px;

    &:hover {
      border-color: orange;
      color: orange;
    }
    // 当前项
    &.cur {
      background-color: orange;
      border-color: orange;
      color: white;
    }
    // 不可用
    &.disabled {
      border-color: lightgray;
      color: lightgray;
      // 删除鼠标相关所有事件
      pointer-events: none;
    }
  }
}
</style>
