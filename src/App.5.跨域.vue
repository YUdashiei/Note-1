<template>
  <div>
    <button @click="getData">请求数据</button>
  </div>
</template>

<script>
export default {
  methods: {
    getData() {
      // 地址放浏览器, 测试是否能访问:  如果被屏蔽,找项目经理解封域名
      // const url = 'https://m.douyu.com/api/room/list?page=1'
      const url = '/douyu/api/room/list?page=1'

      // 跨域报错:
      // 发送请求的服务器 和 请求接口所在的服务器 不是同一个
      // 解决方案1 CORS: 在接口服务器上添加 白名单, 允许其他来源的访问
      // 解决方案2 Proxy: 代理方案, 脚手架生成的这个项目包 支持快速配置代理服务器
      this.axios.get(url).then(res => {
        console.log(res)
      })

      // 由于 哔哩哔哩 服务器做了权限设置, 403报错, 无法用代理转换
      // var url2 = '/bili/x/web-interface/ranking/region?rid=24&day=7&context='
      // this.axios.get(url2).then(res => {
      //   console.log(res)
      // })
    },
  },
}
</script>

<style lang="scss" scoped></style>
