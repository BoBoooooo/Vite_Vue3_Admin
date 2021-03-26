/**
 * @file vuex.vuejs.org/zh
 * @author BoBo
 * @copyright BoBo
 * @createDate 2018年11月13日18:09:59
 */
import { createStore, ModuleTree } from 'vuex';
//  import createPersistedState from 'vuex-persistedstate';
import user from './modules/user';
import router from './modules/router';
import app from './modules/app';
import { RootState } from './root.state.d';

const modules: ModuleTree<RootState> = {
  user,
  app,
  router,
};

export default createStore({
  modules,
  // plugins: [createPersistedState({ paths: ['tagsView'] })],
});
