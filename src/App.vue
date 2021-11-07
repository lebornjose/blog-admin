<template>
<div class="container">
  <router-view></router-view>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const visible:boolean = false;
    return {
      visible
    }
  },
})
</script>

<style lang="scss">
  @import "./assets/scss/all.scss";
</style>
