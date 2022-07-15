/*
 * @Date: 2022-06-11 10:11:44
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-06-11 10:28:30
 * @FilePath: \toodoo\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/home-view.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
