<template>
  <div class="product-list">
    <div class="top-func">
      <el-button size="mini" type="primary" @click="add">添加</el-button>
    </div>
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
    <el-dialog
        v-model="dialogVisible"
        title="添加引用"
        width="30%"
        :before-close="handleClose"
    >
      <span>This is a message</span>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </span>
      </template>
    </el-dialog>
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
      const dialogVisible = ref(false);
      const add = () => {
        dialogVisible.value = true;
      }
      onMounted(() => {
        utils.get('/api/recommend/list').then((res: any) => {
          productList.value = res.data;
          total.value = res.data.length;
        })
      });
      return { productList, total, add, dialogVisible }
    }
  })
</script>
