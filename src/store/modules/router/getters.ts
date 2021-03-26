import { RootState } from '../../root.state';
import { GetterTree } from 'vuex';
import { RouterState } from './state';

const getters: GetterTree<RouterState, RootState> = {
  routers: state => state.routers,
  addRouters: state => state.addRouters
};

export default getters;
