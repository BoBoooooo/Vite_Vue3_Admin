import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/style/index.scss';
import 'vite-plugin-svg-icons/register';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
const app = createApp(App).use(router).use(store);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(ElementPlus as any);


app.component('SvgIcon', SvgIcon);
// 全局变量
// app.config.globalProperties.$message = message;

app.mount('#app');
