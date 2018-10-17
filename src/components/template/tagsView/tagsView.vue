<template id="">
  <div class="tags-view-container">

      <router-link tag="p" v-for="tag in Array.from(visitedViews)" :to="tag.path" :key="tag.path"  class="tags-view-item tags-view-wrap" :class="isActive(tag)?'active':''">
        {{tag.name}}
         <span class='el-icon-close' @click.prevent.stop="delSelectTag(tag)"></span>
      </router-link>

  </div>
</template>

<script>
export default {
  name: "tags",
  computed: {
    visitedViews() {
      //store中取值
      return this.$store.state.tagsview.visitedviews;
    }
  },
  mounted() {
    //第一次进入时候执行方法
    this.addViewTags();
  },
  methods: {
    // 选择时的样式判断
    isActive(route) {
      return route.path == this.$route.path;
    },
    addViewTags() {
      //路由改变时执行的方法
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("addVisitedViews", this.$route);
      }
      return false;
    },
    //删除tagView，并显示最后一个View
    delSelectTag(route) {
      this.$store.dispatch("delVisitedViews", route).then(views => {
        if (this.isActive(route)) {
          //只有在关闭当前打开的标签页才会有影响
          let lastView = views.slice(-1)[0]; //选取路由数组中的最后一位
          if (lastView) {
            this.$router.push(lastView);
          } else {
            this.$router.push("/");
          }
        }
      });
    }
  },
  watch: {
    //监视路由变化
    $route() {
      this.addViewTags();
    }
  }
};
</script>

<style lang="less">
.tags-view-container {
  width: 100%;
  height: 32px;
  line-height: 32px;
  .tags-view-wrap {
    height: 26px;
    line-height: 26px;
    margin: 0 10px;
    padding: 0 8px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    text-align: center;
    display: inline-block;
    
  }
  .active {
    background-color: #42b983;
    color: #fff;
    border-color: #42b983;
    &:before {
      content: "";
      background: #fff;
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: relative;
      margin-right: 2px;
    }
  }
}
</style>
