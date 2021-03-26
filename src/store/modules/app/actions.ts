import { RootState } from '@/store/root.state';
import { ActionTree } from 'vuex';
import { AppState } from './state';

const actions: ActionTree<AppState, RootState> = {
  ToggleSideBar: ({ commit }) => {
    commit('TOGGLE_SIDEBAR');
  },
};

export default actions;
