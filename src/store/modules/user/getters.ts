import { UserState } from './state';
import { RootState } from './../../root.state.d';
import { GetterTree } from 'vuex';

const getters: GetterTree<UserState, RootState> = {
  token: state => state.token,
  realname: state => state.realname,
  name: state => state.username,
  deptname: state => state.deptname,
  rolename: state => state.rolename,
  deptid: state => state.deptid,
  userid: state => state.userid,
  photo: state => state.photo,
};

export default getters;
