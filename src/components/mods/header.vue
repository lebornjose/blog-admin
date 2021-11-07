<template>
  <header class="next-shell-header">
    <div class="next-shell-branding">
        <span class="logo">
          <img src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png" alt="logo"/>
          <span class="text">logo</span>
        </span>
    </div>
    <div class="next-shell-action">
      <el-popover
          popper-class="setting-popover"
          placement="bottom"
          :width="150"
          trigger="click"
      >
        <template #reference>
          <div>
            <span class="next-avatar next-avatar-circle next-avatar-image next-avatar-small" device="desktop">
              <img src="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png" alt="用户头像"/>
            </span>
            <span class="next-name">MyName</span>
          </div>
        </template>
        <ul class="setting-list">
          <li><i class="el-icon-setting"></i> 系统设置</li>
          <li><i class="el-icon-warning-outline"></i> 退出</li>
        </ul>
      </el-popover>

    </div>
  </header>
</template>

<script>
  export default {
    name: "header"
  }
</script>

<style lang="scss" type="text/scss">
  .next-shell-header{
    color: #fff;
    height: 52px;
    background: #18263c;
    border-bottom: 1px solid #eee;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    .next-shell-branding{
      display: flex;
      align-items: center;
    }
    .logo{
      display: flex;
      align-items: center;
      color: #ccc;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
      img{
        height: 24px;
        margin-right: 10px;
      }
      .text{
        color: #ccc;
      }
    }
    .next-shell-action{
      display: flex;
      cursor: pointer;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      .next-avatar{
        width: 28px;
        height: 28px;
        line-height: 28px;
        border-radius: 50%;
        float: left;
        img{
          display: block;
          width: 28px;
          height: 28px;
        }
      }
      .next-name{
        margin-left: 10px;
        line-height: 28px;
      }
    }
  }
  .setting-list{
    li{
      line-height: 36px;
      cursor: pointer;
      padding: 5px 15px;
      &:hover{
        color: #333;
        background-color: #f9f9f9;
      }
    }
    i{
      font-size: 22px;
      position: relative;
      top: 4px;
      margin-right: 10px;
    }
  }
  .setting-popover{
    padding: 0!important;
  }
</style>
