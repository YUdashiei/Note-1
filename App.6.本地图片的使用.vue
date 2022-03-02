<template>
  <div>
    <!-- 打包命令: npm run build -->
    <!-- 执行后,就会把项目打包成 普通的 由 JS HTML CSS 组成的项目包, 存放在dist目录中 -->
    <!-- 项目上线: 把打包后的文件 存放在服务器的 静态托管文件夹里即可 -->
    <!-- 具体可以参考: 百度网盘提供的 vue 扩展视频 -->

    <img src="./assets/img/p3.png" alt="" />
    <div class="box"></div>
    <!-- vue项目在真正运行前, 需要编译成 HTML CSS JS 这种代码 -->
    <!-- 编译过程中需要分析代码 -- 静态分析, 无法分析HTML中的变量; 所以a没有被识别到, 就没有被编译到最终代码里, 图片无法展示 -->
    <img :src="a" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // JS中图片的路径, 必须用 require() 进行引入, VUE才能识别并编译
      // 不写require 会认为是普通的字符串 而非 图片路径
      a: require('./assets/img/p4.png'),
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  height: 100px;
  background: url('./assets/img/p4.png');
  border: 1px solid red;
}
</style>
