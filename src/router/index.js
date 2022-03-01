import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  // vroute-named: 自动生成
  {
    path: '/teams',
    name: 'teams',
    component: () => import('../views/Teams.vue'),
    meta: {
      title: '队伍选择',
      keepAlive: true, //代表保活, 属性名随便起, 有含义就好
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta: {
      title: '注册',
    },
  },
  {
    // :参数?   这个? 就代表此参数 可传可不传
    path: '/login/:name?',
    name: 'login',
    // 组件的引入分两种语法
    // 1. 先在上方引入, 然后在此处使用
    // 2. 懒加载语法: 箭头函数方式,  使用时临时调用箭头函数,得到组件
    //    -- 推荐此写法: 会提高页面加载速度, 具体需要大后期讲解
    component: () => import('../views/Login.vue'),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/contact',
    component: Contact,
    name: 'contact',
    meta: {
      title: '联系我们',
    },
  },
  {
    // 用 : 代表参数
    path: '/news/:name/:age',
    props: true, // 开启组件的 属性接收路由参数功能
    component: News,
    name: 'news', //名字随便起, 但是最好是有含义
  },
  {
    // path: 路径
    path: '/',
    // name: 名字;  为这个对应关系起的名字, 偶尔有用
    name: 'home',
    // component:组件
    component: HomeView,
    // meta: 元数据, 作用是存放自定义的各种属性
    meta: {
      title: '首页', //这个title属性名是自定义的, 随便起
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
]
// 之前学习的 $router 就是这个 router 对象
const router = new VueRouter({
  // mode: 路由的参数是模式 -- 路由模式
  // 分两种模式: history 和 默认的 hash
  // hash模式: 路径中 用 # 间隔, 不好看
  // history模式: 路径中没有 #, 好看 -- 如果项目上线, 需要单独处理--后续老师讲解
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
// 一定要在 router 赋值之后
// 路由前置守卫: 所有的路由跳转之`前`, 都会触发此方法, 被允许才会跳转
// beforeEach: 在 每次跳转 之前
router.beforeEach((to, from, next) => {
  // 参数含义按顺序: 要跳转到哪里to, 当前在哪from, 是否允许next
  // console.log('to:', to)
  // console.log('from:', from)

  let title = to.meta.title
  // document.title: 标签栏的标题
  document.title = title

  next() //调用后, 才能继续跳转操作
})

export default router
