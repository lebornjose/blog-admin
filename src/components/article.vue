<template>
  <div class="article-list">
    <el-table
        :data="articleList"
        :border="true"
        style="width: 100%">
      <el-table-column
          prop="title"
          label="文章标题"
          width="420"
      >
      </el-table-column>
      <el-table-column
       label="发布时间"
       >
        <template #default="scope">
          {{ timeReplace(scope.row.pubtime)}}
        </template>
      </el-table-column>
      <el-table-column
       prop="author"
       label="发布人"
       ></el-table-column>
      <el-table-column
        prop="reads"
        label="阅读量"
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
  import moment from 'moment';
  export default defineComponent({
    name: 'article',
    setup() {
      let articleList = ref([]);
      let total = ref(0);
      const timeReplace = (val:number) => {
        return moment(val * 1000).format('YYYY-MM-DD');
      };
      onMounted(() => {
        utils.get('/api/article/list/1').then((res: any) => {
          total.value = res.total;
          articleList.value = res.data;
          console.log(articleList)
        })
      });
      return {
        articleList,
        total,
        timeReplace
      }
    },
  })
</script>

