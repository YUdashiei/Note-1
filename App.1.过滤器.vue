<template>
  <div>
    <!-- 过滤器 -->
    <p>{{ user.uname }}</p>
    <p>{{ user.age }}</p>
    <!-- nextYear: 得到下一年的年龄, 即+1 -->
    <p>{{ user.age | nextYear }}</p>
    <!-- double: 年龄x2 -->
    <p>{{ user.age | double }}</p>
    <!-- 多个过滤器可以按顺序调用 -->
    <p>{{ user.age | nextYear | double }}</p>
    <!-- 带有参数的过滤器 -->
    <p>{{ user.age | pow(2) }}</p>
    <p>{{ user.age | pow(3) }}</p>

    <!-- true:已婚  false:未婚 -->
    <p>{{ user.married ? '已婚' : '未婚' }}</p>
    <!-- {{ 值 | 过滤器 }}: 自动用过滤器方法来处理值 -->
    <p>{{ user.married | m }}</p>
    <!-- 0女 1男 2保密 -->
    <p>{{ user.gender | g }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { uname: 'mike', age: 33, married: true, gender: 1 },
    }
  },
  // filters: 过滤器们
  filters: {
    // {{ value | pow(参数) }}
    pow(value, exp) {
      return Math.pow(value, exp)
    },
    double(value) {
      return value * 2
    },
    nextYear(value) {
      return value + 1
    },
    // {{ 值 | m}}   m就是过滤器的名字
    m: function (value) {
      return value ? '已婚' : '未婚'
    },
    g(value) {
      // 0女 1男 2保密
      // if (value == 0) return '女'
      // if (value == 1) return '男'
      // if (value == 2) return '保密'
      return ['女', '男', '保密'][value]
      // 数组[下标]:  必须人为制造巧合, 值需要是序号
    },
  },
}
</script>

<style lang="scss" scoped></style>
