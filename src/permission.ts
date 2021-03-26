/**
 * @file 全局请求权限控制，本文件在main.js中引用
 * @author BoBo
 * @copyright BoBo
 * @createDate 2018年11月13日10:58:43
 */

import router from './router';
import store from './store';
// 白名单：不需要鉴权的地址
const whiteList = ['/login'];

// 路由全局前置守卫
router.beforeEach(async (to, from, next) => {
  const token = store.getters['user/token'];
  const addRouters = store.getters['router/addRouters'];
  if (token != null && token !== 'null') {
    if (to.path === '/login') {
      next({
        path: '/',
      });
    } else if (addRouters.length === 0) {
      // 请求用户信息
      const userInfo = await store.dispatch('user/getUserInfoByToken');
      // 根据用户权限过滤路由规则
      await store.dispatch('router/generateRoutes', userInfo);
      next({ ...to, replace: true });
    } else {
      next();
    }
  } else if (whiteList.includes(to.path)) {
    // 如果不存在Token & 当前地址在白名单内
    next();
  } else {
    // 如果不存在Token & 当前地址不在白名单内
    next('/login');
  }
});
