/*
 * @file: 完整组件列表
 *        https://element-plus.gitee.io/#/zh-CN/component/quickstart 按需引入
 * @author: BoBo
 * @copyright: BoBo
 * @Date: 2021-02-30 20:05:36
 */
import { App } from 'vue';
// 引入base.scss文件
import 'element-plus/packages/theme-chalk/src/base.scss';

import {
  ElAlert,
  ElBacktop,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElCard,
  ElCol,
  ElDialog,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElRow,
  ElSubmenu,
  ElTooltip,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
} from 'element-plus';

const components = [
  ElAlert,
  ElBacktop,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElButton,
  ElCard,
  ElCol,
  ElDialog,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMenu,
  ElMenuItem,
  ElRow,
  ElSubmenu,
  ElTooltip,
];

const plugins = [ElLoading, ElMessage, ElMessageBox];

export default function (app: App<Element>) {
  components.forEach(component => {
    app.component(component.name, component);
  });

  plugins.forEach(plugin => {
    app.use(plugin);
  });
}
