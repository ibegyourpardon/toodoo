<!--
 * @Date: 2022-06-07 16:25:24
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-07-13 16:20:50
 * @FilePath: /toodoo/src/components/Header/header-index.vue
-->
<template>
  <div class="
  flex flex-row justify-end mt-4
  items-center w-full h-4
  ">
    <LanguageSwitcher></LanguageSwitcher>
<!--  <DarkModeButton />-->
    <!-- <LogoView /> -->
    <!-- <NavigationMenuView /> -->
  </div>
</template>
<script setup lang="ts">
// import LogoView from './logo-view.vue';
// import NavigationMenuView from './NavigationMenu.vue';
import DarkModeButton from './darkmode-switcher/index';
import LanguageSwitcher from './language-switcher/language-switcher.vue';
</script>
