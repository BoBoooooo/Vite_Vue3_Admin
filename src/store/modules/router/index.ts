import { RootState } from '../../root.state';
import { Module } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state, { RouterState } from './state';

const router: Module<RouterState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default router;
