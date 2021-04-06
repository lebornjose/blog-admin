<template>
  <div class="container">
    <top></top>
    <el-row class="main-content">
      <el-col :span="3">
        <left-bar></left-bar>
      </el-col>
      <el-col :span="21" class="right-content">
        <article-container></article-container>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import top from './components/mods/header.vue';
import leftBar from './components/mods/left-bar.vue';
import articleContainer from './components/article.vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      visible: false
    }
  },
  components: {
    leftBar,
    top,
    articleContainer,
  }
})
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
}
#app, .container{
  height: 100%;
}
.main-content{
  height: calc(100% - 60px);
}
ul li, ol li{
  list-style: none;
}
.right-content{
  padding: 20px;
  background: #eee;
  height: 100%;
}
</style>
