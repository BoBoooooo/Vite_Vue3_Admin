<!--
@file 菜单
@author BoBo
@copyright BoBo
@createDate 2019-09-05 21:55:47
-->
<template>
  <div>
    <el-collapse-transition>
      <div
        class="title-container"
        :style="{
          backgroundColor: themeColor.sidebar.backgroundColor,
        }"
        :class="{
          hideSidebar: !sidebar,
        }"
      >
        <img class="header_logo" src="/src/assets/logo.png" />
        <span
          class="title"
          :style="{
            color: themeColor.sidebar.textColor,
          }"
          >{{ title }}</span
        >
      </div>
    </el-collapse-transition>

    <!-- 导航菜单+滚动条 -->
    <el-menu
      :collapse="!sidebar"
      :default-active="$route.path"
      unique-opened
      mode="vertical"
      :background-color="themeColor.sidebar.backgroundColor"
      :text-color="themeColor.sidebar.textColor"
      :active-text-color="themeColor.sidebar.activeTextColor"
      class="menu"
    >
      <!-- 菜单项组件 -->
      <MenuItem :routes="routers" />
    </el-menu>
  </div>
</template>

<script lang="ts">
import color from '@/style/theme';
import MenuItem from './MenuItem.vue';
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { defineComponent } from 'vue';
import { ElCollapseTransition } from 'element-plus/lib/el-transition';

export default defineComponent({
  name: 'Menu',
  components: {
    MenuItem,
    ElCollapseTransition,
  },
  setup() {
    const store = useStore();
    const themeColor = reactive(color);
    const sidebar = computed(() => store.getters['app/sidebar'].opened);
    const title = computed(() => import.meta.env.VITE_NAME);

    return {
      themeColor,
      sidebar,
      title,
      routers: store.getters['router/routers'],
    };
  },
});
</script>
<style scoped>
.el-submenu__icon-arrow el-icon-arrow-right {
  display: none;
}
</style>
<style lang="scss" scoped>
.title-container {
  position: fixed;
  left: 0;
  top: 0;
  border-right: solid 1px #e6e6e6;
  display: flex;
  align-items: center;
  width: 221px;
  padding-left: 20px;
  text-align: center;
  box-sizing: border-box;
  height: 64px;
  line-height: 64px;
  .header_logo {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .title {
    font-weight: 500;
    font-family: 'YaHei';
    font-size: 20px;
  }
  .icon {
    color: yellow;
  }
  &.hideSidebar {
    width: 65px;
    padding: 0;
    .title {
      display: none;
    }
    .header_logo {
      margin: 0 auto;
    }
  }
}
.menu {
  top: 64px;
  bottom: 0;
  left: 0 !important;
  right: none !important;
  overflow: auto;
  position: fixed;
  height: 100%;
  &:not(.el-menu--collapse) {
    width: 220px;
  }
  .el-menu {
    height: 100%;
  }
}
</style>
