<template>
  <div class="container">
    <top></top>
    <el-row class="main-content">
      <el-col :span="3">
        <left-bar></left-bar>
      </el-col>
      <el-col :span="21" class="right-content">
<!--        <article-container></article-container>-->
        <router-view></router-view>
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
  setup() {
    const visible:boolean = false;
    return {
      visible
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
  font-size: 12px;
}

#app, .container{
  height: 100%;
  .curmbs{
    position: absolute;
    width: 87.5%;
    top: 53px;
    background: #fff;
    left: 12.4%;
    height: 40px;
    line-height: 40px;
    z-index: 9;
  }
}
.main-content{
  height: calc(100% - 60px);
  .el-menu{
    height: 100%;
  }
}
ul li, ol li{
  list-style: none;
}
.right-content{
  padding: 20px;
  background: #fff;
  height: 100%;
}
</style>
