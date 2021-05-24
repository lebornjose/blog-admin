<template>
  <div class="product-list">
    <el-table
      :data="productList"
      :border="true"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted} from 'vue';
  import utils from '../utils/index';
  export default defineComponent({
    name: 'category',
    setup() {
      const productList = ref([]);
      onMounted(() => {
        utils.get('/api/recommend/list').then((res: any) => {
          productList.value = res.data;
        })
      });
      return { productList }
    }
  })
</script>
