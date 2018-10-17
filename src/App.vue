<template>
  <div id="app">
        <div class="header">
            <div class="logo margin-big-left fadein-top">
                <h1><img src="./assets/img/y.jpg" class="radius-circle rotate-hover" alt="">后台管理中心</h1>
            </div>
            <div class="head-l">
                <a class="button button-little bg-green" href="#" > 前台首页</a> 
                <a href="##" class="button button-little bg-blue"> 清除缓存</a> 
                <a class="button button-little bg-red" href="#"> 退出登录</a> 
            </div>
        </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
}

// 头部
.header {
  height: 70px;
  overflow: hidden;
  background: url("./assets/img/bg.jpg") no-repeat 0 -1000px;
  .logo {
    float: left;
    color: #fff;
    margin-top: 10px;
    line-height: 45px;
    h1 {
      font-size: 24px;
    }
    img {
      float: left;
      margin-right: 10px;
      border-radius: 50%;
      width: 50px;
    }
  }
  .margin-big-left {
    margin-left: 20px;
  }
  .fadein-top {
    -webkit-animation: 1s ease-out backwards;
    -moz-animation: 1s ease-out backwards;
    -ms-animation: 1s ease-out backwards;
    animation: 1s ease-out backwards;
  }
  .fadein-top {
    -webkit-animation-name: fadeinT;
    -moz-animation-name: fadeinT;
    -ms-animation-name: fadeinT;
    animation-name: fadeinT;
  }
  @keyframes fadeinT {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  //   按键
  .head-l {
    float: left;
    margin-top: 17px;
    margin-left: 15px;
    .button {
      padding: 8px 15px;
      border: solid 1px #ddd;
      background: transparent;
      border-radius: 4px;
      font-size: 14px;
      padding: 6px 15px;
      margin: 0;
      display: inline-block;
      line-height: 20px;
      transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1) 0s;
    }
    .bg-green {
      border-color: #2c7;
      background: #2c7;
      color: #fff;
    }
    .button-little {
      font-size: 12px;
      font-weight: normal;
      line-height: 16px;
    }
    .bg-blue {
      border-color: #0ae;
      background: #0ae;
      color: #fff;
    }
    .bg-red {
      border-color: #e33;
      background: #e33;
      color: #fff;
    }
  }
}
</style>
