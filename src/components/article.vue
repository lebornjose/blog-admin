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
          <el-button type="text" size="small"
            @click="getData"
          >查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        @current-change="getData"
        :total="total">
    </el-pagination>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, reactive, toRefs} from 'vue';
  import utils from '../utils/index';
  import moment from 'moment';
  export default defineComponent({
    name: 'article',
    setup() {
      const state = reactive({
        articleList: [], // 文章
        total: 0,
        page: 1,
      });

      const timeReplace = (val:number) => {
        return moment(val * 1000).format('YYYY-MM-DD');
      };
      onMounted(() => {
        getData(state.page);
      });
      const getData = (page: number) => {
        utils.get('/api/article/list/' + page).then((res: any) => {
          state.total = res.total;
          state.articleList = res.data;
        })
      };
      return {
        ...toRefs(state),
        timeReplace,
        getData,
      }
    },
  })
</script>

