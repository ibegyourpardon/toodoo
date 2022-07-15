<!--
 * @Date: 2022-06-07 23:02:44
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-07-13 22:50:40
 * @FilePath: \toodoo\src\App.vue
-->
<template>
  <!-- <LeftSideBar /> -->
  <ProjectListScroller />
  <div class="flex flex-col justify-start items-center w-full">
    <HeaderIndex />
    <PopTodo v-if="store.onEditing" />
    <router-view :key="$route.fullPath"/>
    <FooterIndex />
  </div>
</template>

<script setup lang="ts">
import ProjectListScroller from '@/components/project_list_scroller/index';

import HeaderIndex from './components/header/header-index.vue';

import FooterIndex from './components/footer/footer-index.vue';
import PopTodo from './components/create_todo/pop-todo.vue';
import KeyboardDance from './utils/keyboard-interrupt';

import useTodooStore from './store/store';

const store = useTodooStore();

const showPopTodo = () => {
  store.onEditing = true;
};

document.onkeydown = (event) => {
  const theElf = event.target as HTMLElement;
  if (theElf.tagName !== 'INPUT') {
    const whatTodo: string = KeyboardDance(event.key);
    switch (whatTodo) {
      case 'create':
        // store.addTodo();
        showPopTodo();
        break;
      case 'escape':
        store.onEditing = false;
        break;
      default:
        break;
    }
  }
};

// dark mode switch
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
