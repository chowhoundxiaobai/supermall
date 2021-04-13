<template>
  <div class="nav-bar">
    <!-- 导航插件  写三个插槽，但不需要写具体内容 -->
    <!-- 插槽需要包裹起来  否则插槽被替换时，部分不希望被替换的东西（如样式，v-if等）也会被替换掉 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px; /* 一般的导航高度是44px */
    line-height: 44px; 
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>
