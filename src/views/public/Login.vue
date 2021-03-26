<template>
  <div class="login-container">
    <el-row>
      <el-col
        :span="12"
        class="wallpaper"
      >
        <div @click="redirectToGitHub">
          <svgIcon
            icon-class="public-banner"
            class="banner"
          />
          <p class="author">
            © Vite2 + Vue3 + ElementPlus By BoBo
          </p>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form
          ref="formRef"
          :model="loginForm"
          class="login-form"
          auto-complete="on"
          label-position="left"
        >
          <h5 class="title">
            Welcome 🎯
          </h5>
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              name="username"
              type="text"
              auto-complete="on"
              placeholder="admin"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              name="password"
              auto-complete="on"
              placeholder="123"
              @keyup.enter="handleLogin"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="btnLoginIsLoading"
              type="default"
              @click.prevent="handleLogin"
            >
              LOGIN
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Login',
  setup() {
    const store = useStore();
    const router = useRouter();
    const btnLoginIsLoading = ref(false);
    const formRef: Ref<any> = ref(null);
    const loginForm = reactive({
      username: '',
      password: '',
    });

    const redirectToGitHub = () => {
      window.open('https://github.com/BoBoooooo/Vite_Vue3_Demo', '_blank');
    };
    const handleLogin = () => {
      btnLoginIsLoading.value = true;
      formRef.value.validate((valid: boolean) => {
        if (!valid) {
          btnLoginIsLoading.value = false;
          return null;
        }
        store
          .dispatch('user/setTokenByLogin', loginForm)
          .then(() => {
            btnLoginIsLoading.value = false;
            // 进入内部页面
            router.push({
              path: '/',
            });
          })
          .catch(() => {
            btnLoginIsLoading.value = false;
          });
        return null;
      });
    };
    return {
      loginForm,
      handleLogin,
      redirectToGitHub,
      formRef,
      btnLoginIsLoading
    };
  },
});
</script>
<style lang="scss" scoped>
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  .el-row,
  .el-col {
    height: 100%;
  }
  .el-col {
    position: relative;
  }
  .wallpaper {
    background: #6163ad;
    overflow: hidden;
    position: relative;
    .banner {
      color: #f2f6fc;
      cursor: pointer;
      width: 30%;
      height: 30%;
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 40%;
      z-index: 20;
    }
    .author {
      background: #ffbebe -webkit-linear-gradient(left, #fff8f8, #fff) 0 0 no-repeat;
      -webkit-background-clip: text;
      -webkit-text-fill-color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      font-size: 1.5em;
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      width: 100%;
      text-align: center;
      animation: slideShine 3s infinite;
      background-size: 80px;
      top: 60%;
      z-index: 20;
      @keyframes slideShine {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 100% 100%;
        }
      }
    }
  }
  .login-form {
    margin: 0 auto;
    width: 300px;
    padding: 20px 35px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 42%;
    .el-button {
      display: block;
      margin: 0 auto;
      width: 70%;
      border-radius: 15px;
      background: #f36874;
      box-shadow: 0 4px 9.6px 0.4px rgba(227, 74, 74, 0.5);
      color: #fff;
    }
  }
  .title {
    font-size: 2rem;
    color: #34495e;
    margin-bottom: 32px;
    text-align: center;
    font-weight: 500;
  }
}
</style>
