import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import '/@/style/index.scss';
import 'ant-design-vue/dist/antd.css'; // 按需引入无效,暂时全局引入处理,详见 README
import { message } from 'ant-design-vue';

const app = createApp(App).use(router).use(store);

// 全局变量
app.config.globalProperties.$message = message;

app.mount('#app');
