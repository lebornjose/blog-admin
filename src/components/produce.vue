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
      <el-table-column
        label="链接"
      >
        <template #default="scope">
          <a :href="scope.row.url" target="_blank">{{scope.row.url}}</a>

        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted} from 'vue';
  import utils from '../utils/index';
  export default defineComponent({
    name: 'category',
    setup() {
      const productList = ref([]);
      const total = ref(0);
      onMounted(() => {
        utils.get('/api/recommend/list').then((res: any) => {
          productList.value = res.data;
          total.value = res.data.length;
        })
      });
      return { productList }
    }
  })
</script>
