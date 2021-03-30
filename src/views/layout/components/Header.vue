<!--
 * @file: 顶部导航
 * @copyright: BoBo
 * @author: BoBo
 * @Date: 2019-04-26 15:26:49
 -->

<template>
  <div>
    <el-header
      height="60px"
      :style="{
        background: themeColor.header.backgroundColor,
      }"
      class="header"
      :class="{
        hideSidebar: !sidebar,
      }"
    >
      <Hamburger
        :toggle-click="toggleSideBar"
        :is-active="!!sidebar"
        :style="{
          color: themeColor.header.textColor,
        }"
        class="hamburger-container"
        :class="{
          isActive: !sidebar,
        }"
      />
      <Breadcrumb />
      <div class="header-right-container">
        <div class="user-container">
          <svgIcon class="photo" icon-class="public-teacher" />
          <span
            :style="{
              color: themeColor.header.textColor,
            }"
            class="userName el-dropdown-link"
          >
            {{ realname }}</span
          >
          <i
            :style="{
              color: themeColor.header.textColor,
            }"
            class="el-icon-switch-button icon"
            @click="logOut"
          />
        </div>
      </div>
    </el-header>
  </div>
</template>

<script lang="ts">
import Hamburger from '@/components/Hamburger/Hamburger.vue';
import Breadcrumb from '@/components/Breadcrumb/index.vue';
import { computed, defineComponent, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import color from '@/style/theme';

export default defineComponent({
  name: 'Header',
  components: {
    Hamburger,
    Breadcrumb,
  },
  setup() {
    const personInfoCard: Ref<null> = ref(null);
    const themeColor = reactive(color);
    const store = useStore();
    const methods = {
      toggleSideBar() {
        store.dispatch('app/ToggleSideBar');
      },

      logOut() {
        store.dispatch('user/clearToken');
      },
    };

    const sidebar = computed(() => {
      return store.getters['app/sidebar'].opened;
    });

    return {
      personInfoCard,
      sidebar,
      themeColor,
      ...methods,
      realname: store.getters['user/realname'],
    };
  },
});
</script>
<style scoped>
.tag :deep .el-tag__close {
  margin-top: 2px;
}
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-header {
  position: fixed;
  left: 220px;
  right: 0;
  color: black;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  &.hideSidebar {
    left: 64px;
  }
  .hamburger-container {
    display: inline-block;
    height: 60px;
    line-height: 60px;
  }
  .logo {
    width: 2em;
    height: 2em;
    position: relative;
    top: 0.5em;
  }
}
.elevator {
  float: right;
  line-height: 100px;
  height: 64px;
  margin-right: 50px;
}
.header-right-container {
  align-items: center;
  justify-content: flex-end;
  right: 30px;
  top: 0;
  position: absolute;
  display: flex;
  height: 60px;
  // 姓名及下拉菜单
  .user-container {
    height: 64px;
    float: right;
    line-height: 64px;
    text-align: center;
    .photo {
      width: 40px;
      height: 40px;
      vertical-align: -17px;
      border-radius: 50%;
      cursor: pointer;
    }
    .userName {
      text-align: center;
      vertical-align: middle;
      margin-left: 10px;
      margin-right: 5px;
      font-size: 14px;
    }
    .icon {
      font-size: 14px;
      display: inline;
      outline: none;
      cursor: pointer;
    }
    .user_icon {
      width: 28px;
      height: 28px;
      margin-top: 10px;
      margin-bottom: 8px;
      display: block;
      cursor: pointer;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
