<template>
  <div class="article-list">
    <div class="top-func">
      <el-button size="mini" type="primary">添加文章</el-button>
      <el-input  placeholder="输入文章关键字进行搜索" v-model="keyword" :suffix-icon="Search"></el-input>
    </div>
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
          <el-button type="text" size="small">删除</el-button>
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
  import { useRouter } from 'vue-router';
  import utils from '../utils/index';
  import moment from 'moment';
  export default defineComponent({
    name: 'article',
    setup() {
      const router = useRouter();
      const state = reactive({
        articleList: [], // 文章
        total: 0,
        page: 1,
        keyword: ''
      });

      const timeReplace = (val:number) => {
        return moment(val * 1000).format('YYYY-MM-DD');
      };
      onMounted(() => {
        getData(state.page);
      });
      const getData = (page: number) => {
        utils.get('/api/article/list/' + page).then((res: any) => {
          if(res.code === -1) {
            router.push('/main/login');
          }
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
<style lang="scss">
.article-list{
  padding: 16px;
}
.top-func{
  margin-bottom: 16px;
  .el-input{
    width: 300px;
    margin-left: 30px;
  }
  .el-input__inner{
    height: 34px;
    line-height: 34px;
  }
}
</style>
