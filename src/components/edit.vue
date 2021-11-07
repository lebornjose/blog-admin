<template>
  <div class="article-edit">
    <h2 class="title">添加文章</h2>
    <el-form ref="form" :model="form" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="标题">
            <el-input v-model="title" placeholder="请输入文章标题"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="作者">
            <el-input v-model="title" placeholder="请输入文章标题"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="文章来源">
            <el-input v-model="auth" placeholder="请输入作者"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发布日期">
            <el-input v-model="auth" placeholder="请输入作者"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="关键字">
            <el-select
                v-model="keywords"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="请输入文章关键字"
            >
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="文章类型">
            <el-select v-model="articleType" multiple placeholder="请选择类型">
              <el-option
                  v-for="item in typeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="文章简介">
            <el-input type="textarea" :rows="3" resize="none" placeholder="请输入文章简介" v-model="summary"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>  
    <div id="editor"></div>
    <div class="bom">
      <el-button type="primary" size="mini">发布</el-button>
      <el-button size="mini">重置</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive, onMounted} from 'vue';
import E from "wangeditor"
export default defineComponent({
  name: 'edit',
  setup() {
    const state = reactive({
      title: '',
      auth: '',
      articleType: '',
      keywords: [],
      summary: '',
      options: [
        {
          value: 'Vue',
          label: 'Vue',
        },
      ],
      typeList: [
        {
          value: '1111',
          label: '热爱前端',
        },
        {
          value: '222',
          label: '感悟',
        },
      ]
    });
    onMounted(() => {
      const editor = new E("#editor");
      editor.config.height = 600;
      // 配置 server 接口地址
      editor.config.uploadImgServer = '/upload-img';
      editor.config.uploadImgAccept = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
      editor.create();
    })
    return {
      ...toRefs(state),
    };
  }
})
</script>
<style lang="scss">
.article-edit{
  background: #fff;
  padding: 16px;
  margin-bottom: 50px;
  .title{
    font-size: 24px;
    margin-bottom: 20px;
  }
  .el-select{
    width: 100%
  }
  .bom{
    margin-top: 16px;
  }
}
</style>