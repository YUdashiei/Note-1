<template>
  <div>
    <template v-if="data">
      <div class="cell" v-for="v in data.data" :key="v.lid">
        <!-- 
          图片资源通常存储相对路径: 实际开发时 图片往往存储在专门的服务器上, 例如 CDN, 前缀服务器地址会变化
          http://www.codeboy.com:9999/
         -->
        <!-- 利用字符串拼接: 补全路径 -->
        <img :src="'http://www.codeboy.com:9999/' + v.pic" alt="" />
        <span>¥{{ v.price }}</span>
        <span>{{ v.title }}</span>
        <div>
          <div>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div>加入购物车</div>
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
      const url = 'http://www.codeboy.com:9999/data/product/list.php'

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
  display: inline-flex;
  border: 1px solid gray;
  border-radius: 4px;
  overflow: hidden;
  flex-direction: column;
  margin: 0 10px 10px 0;
  width: 250px;
  padding: 10px;

  > img {
    transition: 0.25s;
  }
  &:hover > img {
    transform: scale(1.1);
  }
  > span:nth-child(2) {
    color: #36d;
    font-size: 1.2em;
    position: relative;
    z-index: 10;
  }
  > span:nth-child(3) {
    color: #555;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin: 5px 0;
  }
  > div:last-child {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    user-select: none;
    align-items: center;

    > div:first-child {
      span {
        border: 1px solid gray;
        padding: 5px 10px;
      }
    }

    > div:last-child {
      background-color: #36d;
      padding: 6px;
      border-radius: 5px;
      color: white;
      transition: 0.2s;
      // active: 代表激活状态, 即点按时
      &:active {
        opacity: 0.7;
      }
    }
  }
}
</style>
