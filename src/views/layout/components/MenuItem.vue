<!--
 * @file: 菜单item
 * @copyright: BoBo
 * @author: BoBo
 * @Date: 2019-09-05 21:55:47
 -->

<template>
  <div class="menu-wrapper">
    <template v-for="item in routes">
      <router-link v-if="!item.meta.hidden && item.children && item.children.length === 1" :key="item.name" :to="{ name: item.children[0].name }">
        <el-tooltip effect="dark" :content="item.children[0].meta.title" placement="right">
          <el-menu-item :index="item.children[0].name">
            <SvgIcon :icon-class="'menu-' + item.meta.title" />
            <span> {{ item.children[0].meta.title }}</span>
          </el-menu-item>
        </el-tooltip>
      </router-link>
      <el-submenu v-else-if="!item.meta.hidden && item.children" :key="item.name" :index="item.name">
        <template #title>
          <SvgIcon :icon-class="'menu-' + item.meta.title" />
          <span> {{ item.meta.title }}</span>
        </template>
        <template v-for="child in item.children.filter(s => !s.meta.hidden)">
          <menu-item v-if="child.children && child.children.length > 0" :key="child.name" :routes="[child]" class="menu-indent" />
          <router-link v-else :key="child.name" :to="item.path + '/' + child.path" class="menu-indent">
            <el-menu-item :index="item.path + '/' + child.path">
              <span>{{ child.meta.title }}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuItem',

  props: {
    routes: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
});
</script>

<style scoped>
.subitem :deep .el-badge__content {
  margin-top: 10px;
}
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
.SvgIcon {
  width: 22px !important;
  height: 22px !important;
  margin-right: 5px;
  vertical-align: -0.4em !important;
}
.hideSidebar .SvgIcon {
  width: 32px !important;
  height: 32px !important;
  margin-top: 25px;
  margin-left: 0px;
  margin-right: 50px;
  vertical-align: -0.4em !important;
}
.hideSidebar .menu-indent {
  display: block;
  text-indent: 1em;
}
.item {
  margin-top: 8px !important;
  margin-left: 8px !important;
}
.subitem {
  position: absolute;
  right: 15%;
}
</style>
