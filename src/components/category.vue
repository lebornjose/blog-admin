<template>
  <div class="category-list">
    <div class="top-func">
      <el-button size="mini" type="primary">添加</el-button>
    </div>
    <el-table
      :data="categoryList"
      :border="true"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="分类标题"
      >
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template #default="scope">
          <el-button type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>
<script class="ts">
  import { defineComponent, ref, onMounted} from 'vue';
  import utils from '../utils/index';
  export default defineComponent({
    name: 'category',
    setup() {
      const categoryList = ref([]);
      const total = ref(0);
      onMounted(() => {
        utils.get('/api/category/list').then((res) => {
          categoryList.value = res.data;
          total.value = res.data.length;
        })
      });
      return { categoryList }
    }
  });
</script>
