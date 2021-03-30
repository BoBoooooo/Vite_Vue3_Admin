import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/style/index.scss';
// 按需引入element-plus
import elementPlus from '@/plugins/element-plus';
// 注册svgIcon
import 'vite-plugin-svg-icons/register';
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
import '@/permission'; // 权限控制

const app = createApp(App).use(router).use(store);

// 按需注册element-plus
elementPlus(app);

// 全局注册SvgIcon组件
app.component('SvgIcon', SvgIcon);
// 全局变量 挂载
// app.config.globalProperties.xxx = xxx;
app.mount('#app');
