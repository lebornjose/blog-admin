<template>
  <el-menu
      background-color="rgb(50, 65, 87)"
      active-text-color="#409eff"
      text-color="#fff"
      class="left-bar" :router="true">
    <el-menu-item index="1" :route="{path: '/main/index'}">
      <i class="el-icon-menu"></i>
      <template #title>首页</template>
    </el-menu-item>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-tickets"></i>
        <span>文章管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :route="{path: '/main/article'}" index="2-1">文章列表</el-menu-item>
        <el-menu-item :route="{path: '/main/category'}" index="2-2">文章分类</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template #title>
        <i class="el-icon-setting"></i>
        <span>功能管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">友情链接</el-menu-item>
        <el-menu-item :route="{path: '/main/product'}" index="3-2">应用推荐</el-menu-item>
<!--        <el-menu-item index="3-3">评理管理</el-menu-item>-->
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
  .el-menu-item:hover, .el-submenu__title:hover{
    background-color: rgb(40, 52, 70)!important;
  }
  .el-submenu .el-menu-item{
    min-width: auto!important;
  }

</style>
