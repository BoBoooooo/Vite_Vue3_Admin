import { ElMessageBox } from 'element-plus';
import { ActionTree } from 'vuex';
import { getInfo, login, update } from '@/api/user';
import { RootState } from '@/store/root.state';
import { UserState } from './state';

const actions: ActionTree<UserState, RootState> = {
  // 登录并设置token
  async setTokenByLogin({ commit }, userInfo) {
    // 开发阶段直接登录而不请求后端接口
    const promise = await login(userInfo).then((res: any) => {
      // 登录成功
      if (res.code === 200) {
        commit('SET_TOKEN', `Bearer ${res.data.token}`);
        // 关闭之前打开的标签
        // commit('DEL_ALL_VIEWS');
        return res.data;
      }
      // 登录失败清空token
      commit('SET_TOKEN', null);
      return Promise.reject(res);
    });
    return promise;
  },
  // 根据token请求用户信息并设置到store
  async getUserInfoByToken({ commit }) {
    // 请求userinfo接口获取用户名和可访问页面
    const promise = await getInfo().then(response => {
      const { data } = response;
      commit('SET_USER_REALNAME', data.realName);
      commit('SET_USERNAME', data.userName);
      commit('SET_DEPTNAME', data.deptName);
      commit('SET_ROLENAME', data.roleName);
      commit('SET_DEPTID', data.deptID);
      commit('SET_USERID', data.userID);
      // 用户头像
      commit('SET_PHOTO', data.photo);
      return data;
    });
    return promise;
  },
  // 删除客户端和服务端Token
  async clearToken({ commit }: any) {
    commit('SET_TOKEN', null);
    window.location.reload();
  },
  // 客户端timeOut
  async clientTimeOut({ commit }: any) {
    commit('SET_TOKEN', null);
    ElMessageBox.alert('长时间未操作,登录超时,请重新登录', {
      confirmButtonText: '重新登录',
      showClose: false,
      callback: () => {
        window.location.reload();
      },
    });
  },
  // 修改密码
  async changePassword({ commit }, { username, password }) {
    const promise = await update({
      username,
      password,
    }).then(() => {
      commit('SET_TOKEN', null);
      window.location.reload();
    });
    return promise;
  },
};

export default actions;
