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
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";
import VueI18n from './language/index';

const pinia = createPinia();

const app = createApp(App);

Sentry.init({
  app,
  dsn: 'https://0ac8629ecc08459c99454df4b454f753@o875200.ingest.sentry.io/6583528',
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ['localhost', 'toodoo.withmoon.design', /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(pinia);
app.use(router);
app.use(VueI18n);
app.mount('#app');
