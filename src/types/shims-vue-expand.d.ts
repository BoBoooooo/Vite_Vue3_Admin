/*
 * @file: 声明vue拓展原型链上的属性类型
 * @copyright: BoBo
 * @author: BoBo
 * @Date: 2020年06月23 16:47:06
 */
/* eslint-disable */

import { Store } from 'vuex';

// 扩充
declare module 'vue/types/vue' {
  interface Vue {
    $store: Store<any>;
    lodash: any;
    axios: any;
    dayjs: any;
    $pinyinmatch: any;
    HOST_URL: any;
    API_URL: any;
    CHAT_URL: any;
  }
}

declare global {
  interface Window  {
    __HOST__URL__: string;
    __PREFIX__URL__: string;
    __CHAT__URL__: string;
    VueTreeselect: any;
  }
}

