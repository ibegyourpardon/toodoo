/*
 * @Date: 2022-06-17 22:58:09
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-06-17 23:05:15
 * @FilePath: /toodoo/src/language/index.ts
 */
import { createI18n } from 'vue-i18n';
import enUS from './en-US';
import zhCN from './zh-CN';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'en_US',
  messages: {
    en_US: enUS,
    zh_CN: zhCN,
  },
});

export default i18n;
