<template>
  <div class="container">
    <el-row>
      <el-col :span="12">
        <h3>super</h3>
        <el-menu>
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <template #title>首页</template>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
