import { MutationTree } from 'vuex';
import { UserState } from './state';

const mutations: MutationTree<UserState> = {
  SET_TOKEN: (state, token: string) => {
    sessionStorage.setItem('token', token);
    state.token = token;
  },
  SET_USER_REALNAME: (state, realname: string) => {
    state.realname = realname;
  },
  SET_USERNAME: (state, username: string) => {
    state.username = username;
  },
  SET_ROLENAME: (state, rolename: string) => {
    state.rolename = rolename;
  },
  SET_DEPTNAME: (state, deptname: string) => {
    state.deptname = deptname;
  },
  SET_DEPTID: (state, deptid: string) => {
    state.deptid = deptid;
  },
  SET_USERID: (state, userid: string) => {
    state.userid = userid;
  },
  SET_PHOTO: (state, photo: string) => {
    state.photo = photo;
  },
};
export default mutations;
