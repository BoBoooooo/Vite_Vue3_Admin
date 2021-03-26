import { constantRouterMap } from '@/router/index';
import { RouteRecordRaw } from 'vue-router';

export interface RouterState {
  routers: RouteRecordRaw[];
  addRouters: RouteRecordRaw[];
}

const routerState: RouterState = {
  routers: constantRouterMap,
  addRouters: [],
};

export default routerState;
