<!--
 * @Date: 2022-07-13 16:14:30
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-07-13 17:01:54
 * @FilePath: /toodoo/src/components/Header/DarkModeSwitcher/DarkModeButton.vue
-->
<template>
  <div class="dark-mode-switcher">
    <img :src="darkModeIcon" alt="" @click="toggleDarkMode" @keydown="toggleDarkMode">
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import LightIcon from './light.svg';
import DarkIcon from './dark.svg';

const darkMode = ref(false);
const darkModeIcon = ref(LightIcon);

const toggleDarkMode = () => {
  console.log('toggleDarkMode');
  console.log(darkMode.value);
  darkMode.value = !darkMode.value;
  darkModeIcon.value = darkMode.value ? DarkIcon : LightIcon;
};
</script>
<style>
.dark-mode-switcher {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  /* box-shadow: 0 0 0 1px #ddd; */
}
</style>
