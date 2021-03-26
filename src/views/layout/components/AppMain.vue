<!--
@file 本页面用于加载其他二级路由对应的子页面，被layout/layout.vue引用
      嵌套顺序App.vue->Layout.vue->AppMain.vue
@author ytyang
@copyright BoBo
@createDate 2018年11月13日14:48:28
-->
<template>
  <section
    ref="appmain"
    class="app-main"
    @scroll="handleScroll"
  >
    <RouterView
      :key="key"
      :scroll-top="scrollTop"
      @viewScroll="viewScroll"
    />
  </section>
</template>
<script lang="ts">
import { useRoute } from 'vue-router';
import { computed,ref } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const scrollTop = ref(0);
    const appmain: Ref<null> = ref(null);

    const cachedViews = computed(() => {
      return store.state.tagsView.cachedViews;
    });

    const key = computed(() => {
      return route.fullPath;
    });

    // 根据右侧滚动条实时刷新滚动条距离顶部的位置，并通过<router-view>传入子页面
    const handleScroll = () => {
      scrollTop.value = appmain.value.scrollTop;
    };

    // 重定位滚动条
    const viewScroll = (v) => {
      appmain.value.scrollTop = v;
    };
    return {
      scrollTop,
      cachedViews,
      key,
      handleScroll,
      viewScroll,
    };
  },
};
</script>
<style lang="scss" scoped>
.app-main {
  height: calc(100% - 40px);
}
</style>
