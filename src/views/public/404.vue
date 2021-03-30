<!--
 * @file: 404页面
 * @copyright: BoBo
 * @author: BoBo
 * @Date: 2019-07-09 14:30:43
 -->
<template>
  <div style="height: 100%; width: 100%">
    <div class="pic-404">
      <svg-icon class="logo" icon-class="public-404" />
      <el-button style="box-shadow: none" type="text" class="btn" @click="goLogin"> 页面丢失了哦,请重新登录~! </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'NotFound',
  setup() {
    const store = useStore();
    const goLogin = () => {
      store.commit('SET_TOKEN', null);
      window.location.reload();
    };
    return {
      goLogin,
    };
  },
});
</script>

<style lang="scss" scoped>
.pic-404 {
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  .btn {
    display: block;
    margin: 0 auto;
    margin-top: 10vh;
    font-size: 1.5em;
  }
  .logo {
    width: 20em;
    height: 20em;
    padding: 0 10px;
    background: white;
  }
}
</style>
