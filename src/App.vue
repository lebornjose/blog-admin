<template>
  <div class="container">
    <top></top>
    <left-bar></left-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import top from './components/mods/header.vue';
import leftBar from './components/mods/left-bar.vue';

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
  }
})
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
ul li, ol li{
  list-style: none;
}
</style>
