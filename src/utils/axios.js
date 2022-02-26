// src/utils/axios.js
// 使用前提: 必须在项目包中安装 模块
// npm i axios vue-axios
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
// use: 注入第三方模块到 vue 对象里
Vue.use(VueAxios, axios)

// 代码只有触发才能有效:  在 main.js 中引入当前文件
