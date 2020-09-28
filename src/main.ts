import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';
import '/@/style/index.scss';
import 'ant-design-vue/dist/antd.css'; // 按需引入无效,暂时全局引入处理,详见 README

createApp(App).use(router).use(store).mount('#app');
