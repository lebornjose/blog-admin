<template>
  <div class="article-list">
    <el-table
        :data="articleList"
        :border="true"
        style="width: 100%">
      <el-table-column
          prop="title"
          label="文章标题"
      >
      </el-table-column>
      <el-table-column
       prop="pubtime"
       label="发布时间"
       ></el-table-column>
      <el-table-column
       prop="author"
       label="发布人"
       ></el-table-column>
      <el-table-column
          label="操作"
          >
        <template #default="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
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
  import { defineComponent, onMounted, ref} from 'vue';
  import utils from '../utils/index';
  export default defineComponent({
    name: 'article',
    setup() {
      let articleList = ref([]);
      let total = ref(0);
      onMounted(() => {
        utils.get('/api/article/list/1').then((res: any) => {
          total.value = res.total;
          articleList.value = res.data;
          console.log(articleList)
        })
      });
      return {
        articleList,
        total
      }
    },
  })
</script>

<style lang="scss" type="text/scss" scoped>
.article-list{
  padding: 20px 0;
  background: #fff;
  border-radius: 4px;
  .el-table{
    font-size: 12px;
  }
  .el-pagination{
    text-align: right;
    margin-top: 20px;
  }
}
</style>
