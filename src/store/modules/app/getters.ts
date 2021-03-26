import { RootState } from './../../root.state.d';
import { GetterTree } from 'vuex';
import { AppState } from './state';

const getters: GetterTree<AppState, RootState> = {
  sidebar: state => state.sidebar,
};

export default getters;
