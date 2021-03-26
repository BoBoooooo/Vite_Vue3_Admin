import { MutationTree } from 'vuex';
import { RouterState } from './state';
import { constantRouterMap } from '@/router/index';

const mutations: MutationTree<RouterState> = {
  SET_ROUTERS: (state, routers) => {
    state.addRouters = routers;
    state.routers = constantRouterMap.concat(routers);
  },
};

export default mutations;
