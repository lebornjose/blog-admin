<template>
  <div class="category-list">
    <el-table
      :data="categoryList"
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
  </div>
</template>
<script class="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'category',
    setup() {
      const categoryList = [{title: '1'}];
      return { categoryList }
    }
  });
</script>
