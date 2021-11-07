<template>
  <span class="tag">首页</span>
  <div class="top">
    <div class="left-chats">
      <category-chats :categoryList="categoryList"></category-chats>
    </div>
    <div class="right-chats">
      <article-chats :categoryList="categoryList"></article-chats>
    </div>
  </div>
  <div class="article-content">
    <el-button type="primary" size="mini">写文章</el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="pubtime" label="日期" width="180">
        <template #default="scope">
          {{format(scope.row.pubtime || 0)}}
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="250" />
      <el-table-column prop="author" label="作者" width="180"/>
      <el-table-column prop="reads" label="阅读数" />
    </el-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted} from 'vue';
import { useRouter } from 'vue-router';
import categoryChats from '../components/index/categoryChats.vue';
import articleChats from '../components/index/articleChats.vue';
import utils from '../utils/index';
import moment from 'moment';

export default defineComponent({
  name: 'index',
  components: {
    categoryChats,
    articleChats
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      tableData: [],
      categoryList: []
    });
    const getData = () => {
      utils.get('/api/article/list/1/').then((res: any) => {
        if(res.code === -1) {
          router.push('/login');
        }
        state.tableData = res.data.slice(0, 10);
      });
      utils.get('/api/category/num').then((res: any) => {
        state.categoryList = JSON.parse(JSON.stringify(res.data).replace(/total/g, 'value'));
      });
    };
    onMounted(() => {
      getData();
    });
    const format = (time: number) => {
      return moment(time * 1000).format('YYYY-MM-DD');
    };
    return {
      ...toRefs(state),
      getData,
      format,
    }
  }
})
</script>
<style lang="scss">
.tag{
  display: inline-block;
  width: 40px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #409eff;
  background-color: #409eff;
  color: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
}
.top{
  display: flex;
}
.left-chats{
  background: #fff;
  padding: 16px;
  border-radius: 4px;
  width: calc(50% - 32px);
  height: 400px;
  &:hover{
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
}
.right-chats{
  width: calc(50% - 32px);
  background: #fff;
  padding: 16px;
  border-radius: 4px;
  margin-left: 16px;
  &:hover{
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
}
.article-content{
  margin-top: 16px;
  background: #fff;
  padding: 16px;
  border-radius: 4px;
  .el-table{
    margin-top: 16px;
  }
  &:hover{
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
}
</style>
