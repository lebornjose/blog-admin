<template>
  <div class="container">
    <header class="next-shell-header">

    </header>
    <left-bar></left-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import leftBar from './components/mods/left-bar.vue';

export default defineComponent({
  name: 'App',
  components: {
    leftBar
  }
})
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.next-shell-header{
  color: #fff;
  height: 52px;
  background: #18263c;
  border-bottom: 1px solid #eee;
  -webkit-box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);
  padding: 0 16px;
}
</style>
