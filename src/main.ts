/*
 * @Date: 2022-06-07 16:06:17
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-06-17 23:14:48
 * @FilePath: /toodoo/src/main.ts
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/tailwind.base.css';
import './registerServiceWorker';
import router from './router';
import VueI18n from './language/index';

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(VueI18n);
app.mount('#app');
