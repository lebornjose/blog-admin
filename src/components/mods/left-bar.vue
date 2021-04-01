<template>
  <el-menu class="left-bar">
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <template #title>首页</template>
    </el-menu-item>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-tickets"></i>
        <span>文章管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">文章列表</el-menu-item>
        <el-menu-item index="2-2">文章分类</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template #title>
        <i class="el-icon-setting"></i>
        <span>功能管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">友情链接</el-menu-item>
        <el-menu-item index="3-2">应用推荐</el-menu-item>
        <el-menu-item index="3-3">评理管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: "left-bar.vue"
  }
</script>

<style lang="scss" type="text/scss">
  .left-bar{
    height: 600px;
    min-height: 600px;
  }
</style>
