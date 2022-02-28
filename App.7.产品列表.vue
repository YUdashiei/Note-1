<template>
  <div>
    <!-- http://www.codeboy.com:9999/mfresh/data/product_select.php -->
    <!-- 图片前缀域名: http://www.codeboy.com:9999/mfresh/ -->
    <template v-if="data">
      <div class="cell" v-for="v in data.data" :key="v.pid">
        <img :src="`http://www.codeboy.com:9999/mfresh/${v.pic}`" alt="" />
        <div>
          <div>
            <span>{{ v.model }}</span>
            <span>{{ v.title2 }}</span>
          </div>
          <div>查看详情</div>
        </div>
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
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      const url = 'http://www.codeboy.com:9999/mfresh/data/product_select.php'

      this.axios.get(url).then(res => {
        console.log(res)

        this.data = res.data
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.cell {
  display: inline-block;
  margin: 0 10px 10px 0;
  border: 1px solid gray;
  width: 300px;

  > img {
    width: 100%;
  }

  > div {
    padding: 4px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;

    > div:first-child {
      display: flex;
      flex-direction: column;
    }
  }

  &:hover {
    box-shadow: 0 0 2px orange;
    border-color: orange;
  }
}
</style>
