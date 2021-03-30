export interface UserState {
  realname: string;
  token: string | null;
  username: string;
  rolename: string;
  deptname: string;
  deptid: string;
  userid: string;
  photo: string;
}

const state: UserState = {
  token: sessionStorage.getItem('token'),
  realname: '', // 用户姓名
  username: '', // 用户登录名
  rolename: '', // 用户角色名
  deptname: '', // 用户部门名
  deptid: '', // 用户部门id
  userid: '', // 用户ID
  photo: '', // 用户头像base64
};

export default state;
