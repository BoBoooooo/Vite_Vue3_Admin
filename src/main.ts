import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/style/index.scss';
// 导入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// 注册svgIcon
import 'vite-plugin-svg-icons/register';
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
import '@/permission'; // 权限控制

const app = createApp(App).use(router).use(store);
app.use(ElementPlus as any);

// 全局注册SvgIcon组件
app.component('SvgIcon', SvgIcon);

// 全局变量 挂载
// app.config.globalProperties.xxx = xxx;
app.mount('#app');
