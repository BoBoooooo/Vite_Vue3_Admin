import { MutationTree } from 'vuex';
import { AppState } from './state';

const mutations: MutationTree<AppState> = {
  TOGGLE_SIDEBAR: (state) => {
    if (state.sidebar.opened) {
      state.sidebar.opened = true;
    } else {
      state.sidebar.opened = false;
    }
    state.sidebar.opened = !state.sidebar.opened;
  },
};

export default mutations;
