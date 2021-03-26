/*
 * @file: https://next.router.vuejs.org/zh/guide/migration/index.html
 * @author: BoBo
 * @copyright: BoBo
 * @Date: 2020-12-07 09:33:26
 */
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

// 固定路由表
export const constantRouterMap: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard/index',
    component: () => import('@/views/layout/Layout.vue'),
    meta: { hidden: true },
    name: 'dashboard',
  },
  { path: '/login', name: 'Login', component: () => import('@/views/public/Login.vue'), meta: { hidden: true } },
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/views/public/404.vue'),
    meta: { hidden: true },
  },
];

export const asyncRouterMap: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: () => import('@/views/layout/Layout.vue'),
    name: 'dashboardForUser',
    meta: {
      title: '首页',
    },
    redirect: '/dashboard/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/Dashboard.vue'),
        name: 'dashboardForUserIndex',
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/*',
    redirect: '/404',
    meta: { hidden: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRouterMap,
});

export default router;
