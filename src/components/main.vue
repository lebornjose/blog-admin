<template>
  <div class="container">
    <top></top>
    <el-row class="main-content">
      <el-col :span="3">
        <left-bar></left-bar>
      </el-col>
      <el-col :span="21" class="right-content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import top from '../components/mods/header.vue';
  import leftBar from '../components/mods/left-bar.vue';

  export default defineComponent({
    name: 'App',
    setup() {
      const visible:boolean = false;
      return {
        visible
      }
    },
    components: {
      leftBar,
      top,
    }
  })
</script>
