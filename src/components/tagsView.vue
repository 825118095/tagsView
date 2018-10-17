<template>
    <div class="tagsView">
        <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            router
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/">
                <i class="el-icon-location"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/yemian1">
                <i class="el-icon-menu"></i>
                <span slot="title">页面一</span>
            </el-menu-item>
            <el-menu-item index="/yemian2">
                <i class="el-icon-document"></i>
                <span slot="title">页面二</span>
            </el-menu-item>
        </el-menu>
        <!-- 多标签 -->
        <div class="main_right">
            <Tags class="tags"></Tags>
            <!-- main -->
            <transition name="fade">
                <router-view class="router-view"/>
            </transition>
        </div>
    </div>
</template>

<script>
import Tags from "./template/tagsView/tagsView";
export default {
  name: "tagsView",
  components: {
    Tags
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="less">
.tagsView {
  width: 100%;
  height: 100%;
  display: flex;
  .el-menu-vertical-demo {
    width: 120px;
    height: 100%;
  }
  .main_right {
    flex: 1;
    height: 100%;
  }
  .router-view{
      height: 100%;
  }
  // 跳转动画
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
