<!--
@file 框架页布局
@author BoBo
@copyright BoBo
@createDate 2018年11月13日14:50:08
-->
<template>
  <div class="app-wrapper">
    <!-- 导航栏 -->
    <Header />
    <!-- 左侧菜单 -->
    <Menu />
    <div
      class="main-container"
      :class="{
        'hideSidebar':!sidebar
      }"
    >
      <!-- TAB标签页 -->
      <!-- <TagsView /> -->
      <!-- 二级路由 -->
      <AppMain />
    </div>

    <el-backtop target=".main-container" />
  </div>
</template>

<script>
import { AppMain,Header,Menu } from './components/index.ts';

export default {
   name: 'Layout',
  components: {
    AppMain,
    // TagsView,
    Header,
    Menu,
  },
 computed:{
   sidebar() {
    return this.$store.getters['app/sidebar'].opened;
  }
 }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '@/style/mixin.scss';
.app-wrapper {
  @include clearfix;
  overflow: hidden;
  height: 100%;
  background: #f0f3f7;
  // 主体区域
  .main-container {
    background: #f0f3f7;
    margin-left: 220px;
    padding: 20px;
      overflow: auto;
    box-sizing: border-box;
    height: calc(100% - 40px);
    margin-top: 60px;
    &.hideSidebar {
      margin-left: 80px;
    }
  }
}
</style>
