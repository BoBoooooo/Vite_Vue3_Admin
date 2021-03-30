import { RouteRecordRaw } from 'vue-router';
import { RootState } from '@/store/root.state';
import { ActionTree } from 'vuex';
import { RouterState } from './state';
import router, { asyncRouterMap } from '@/router/index';

function hasPermission(roles: string[], route: RouteRecordRaw) {
  if (route.name) {
    return roles.some(role => route.name === role);
  }
  return true;
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap 异步路由表
 * @param roles 当前登录用户的角色
 */
function filterAsyncRouter(routerMap: RouteRecordRaw[], roles: string[]) {
  const accessedRouters = routerMap.filter(route => {
    // 如果父级菜单有访问权限
    if (hasPermission(roles, route)) {
      // 下级菜单鉴权
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
}

const actions: ActionTree<RouterState, RootState> = {
  // 根据角色名称设置路由
  generateRoutes({ commit, state }, userInfo) {
    // 当前用户有权限的路由，当前用户登录名
    const args = {
      roleRouters: userInfo.roleAuthName.split(','),
      userName: userInfo.userName,
    };
    const { roleRouters, userName } = args;
    return new Promise(resolve => {
      // 管理员可查看所有页面
      if (userName === 'admin') {
        commit('SET_ROUTERS', asyncRouterMap);
      } else {
        const accessedRouters = filterAsyncRouter(asyncRouterMap, roleRouters);
        commit('SET_ROUTERS', accessedRouters);
      }
      state.addRouters.forEach((route: RouteRecordRaw) => {
        router.addRoute(route);
      });
      resolve();
    });
  },
};

export default actions;
