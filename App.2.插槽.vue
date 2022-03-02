<template>
  <div>
    <!-- 插槽：页面的整体布局已经固定, 但是其中有些位置留白, 需要用户自定义放入内容: 通常是组件做布局的时候使用 -->

    <!-- 以前说: 组件作用-拆分+复用 -->
    <!-- 组件新功能: 做布局. 优点: 只需要放入内容即可, 不需要书写布局代码 -->

    <!-- 组件双标签写法中的内容, 会替换掉 组件中的插槽, 即 <slot/> 标签 -->
    <my-slot>
      <!-- lorem: 可以生成文本 -->
      <h2>Lorem</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, animi
        reiciendis! Quos possimus eaque dicta repellendus mollitia tempora
        aliquid? Dicta eligendi eum aut soluta excepturi. Eaque excepturi quam
        expedita! Esse?
      </p>

      <!-- 向具名插槽: name='left' 中赋值 -->
      <p slot="left">旧写法(vue1版本的), 向 left 插槽中放东西</p>

      <!-- 新语法 vue2 -- 必须配合 template 使用 -->
      <!-- 向 name='right' 的插槽中赋值 -->
      <!-- <template v-slot:right>
        <div>111</div>
        <div>222</div>
      </template> -->

      <!-- 新语法的语法糖: # -->
      <template #right>
        <div>111</div>
        <div>222</div>
      </template>
    </my-slot>
  </div>
</template>

<script>
import MySlot from './components/MySlot.vue'
export default {
  components: { MySlot },
}
</script>

<style lang="scss" scoped></style>
