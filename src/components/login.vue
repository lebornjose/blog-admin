<template>
  <div class="login-content">
     <div class="content-box">
        <h3 class="title">登录</h3>
        <div class="item-input">
          <span>用户名</span>
          <div class="input-box">
            <input class="input100" type="text" v-model="username" name="username" placeholder="请输入用户名" autocomplete="off"/>
            <span class="focus-input100">
               <el-icon><user /></el-icon>
            </span>
          </div>  
        </div>
        <div class="item-input">
          <span>密码</span>
          <div class="input-box">
            <input class="input100" type="password" v-model="password" name="password" placeholder="请输入用户名" autocomplete="off"/>
            <span class="focus-input100">
               <el-icon><key /></el-icon>
            </span>
          </div>  
        </div>
        <div class="box-btn">
          <div class="form-bgbtn"></div>
          <button class="form-btn" @click="login">登 录</button>
        </div>
     </div>
  </div>
</template>
<script lang="ts">
import { User, Key } from '@element-plus/icons';
import { defineComponent, reactive, toRefs } from 'vue';
import { ElMessage } from 'element-plus';
import utils from '../utils/index';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'login',
  setup() {
    const router = useRouter();
    const state = reactive({
      username: '',
      password: ''
    });
    const login = () => {
      console.log(state.username);
      utils.post('/api/login/toLogin', {
        username: state.username,
        pwd: state.password,
      }).then((res: any) => {
        if(res.code === 0) {
          router.push('/main/index');
          return
        }
        ElMessage.error(res.message);
      })
    }
    return {
      login,
      ...toRefs(state),
    };
  },
  components: {
    // 全名
    User,
    Key,
  },
});
</script>
<style lang="scss" scoped>
  .login-content{
    background-image: url(https://www.helloweba.net/demo/2018/logins/v1/images/bg-01.jpg);
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .content-box{
      width: 420px;
      padding: 40px;
      background: #fff;
      border-radius: 10px;
      overflow: hidden;
    }
    .title{
      display: block;
      font-size: 36px;
      color: #333333;
      font-weight: 400;
      line-height: 1.2;
      text-align: center;
      margin-bottom: 40px;
    }
    .input100{
      font-size: 16px;
      color: #333333;
      line-height: 1.2;
      display: block;
      width: 100%;
      height: 55px;
      background: transparent;
      padding: 0 7px 0 43px;
      outline: none;
      border: none;
      &::before {
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: #7f7f7f;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
      }
    }
    .input100:focus + .focus-input100::before {
        width: 100%;
    }
    input:focus {
        border-color: transparent !important;
    }
    .input100:focus + .focus-input100 .el-icon {
      color: #a64bf4!important;
    }
    .item-input{
      width: 100%;
      border-bottom: 2px solid #d9d9d9;
      margin-bottom: 40px;
      .input-box{
        position: relative;
      }
      .el-icon{
        font-size: 20px;
        position: absolute;
        top: 18px;
        color: #ccc;
      }
    }
    .focus-input100 {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      &::before{
        content: "";
        display: block;
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: #7f7f7f;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
      }
      &::after{
        content: attr(data-symbol);
        font-family: Material-Design-Iconic-Font;
        color: #adadad;
        font-size: 22px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: calc(100% - 20px);
        bottom: 0;
        left: 0;
        padding-left: 13px;
        padding-top: 3px;
      }
    }
    .box-btn{
      width: 100%;
      display: block;
      position: relative;
      z-index: 1;
      border-radius: 25px;
      overflow: hidden;
      margin: 0 auto;
      box-shadow: 0 5px 30px 0px rgb(3 216 222 / 20%);
      &:hover .form-bgbtn {
        left: 0;
      }
      .form-bgbtn{
        position: absolute;
        z-index: -1;
        width: 300%;
        height: 100%;
        background: #a64bf4;
        background: -webkit-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
        background: -o-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
        background: -moz-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
        background: linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
        top: 0;
        left: -100%;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        -moz-transition: all 0.4s;
        transition: all 0.4s;
      }
      .form-btn{
        font-size: 16px;
        color: #fff;
        line-height: 1.2;
        text-transform: uppercase;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        width: 100%;
        font-weight: bold;
        height: 50px;
      }
      button {
        outline: none !important;
        border: none;
        background: transparent;
        cursor: pointer;
        :hover {
          cursor: pointer;
        }
      }
    }
  }
</style>