<!--
 * @Date: 2022-06-07 23:42:44
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-07-14 14:50:14
 * @FilePath: /toodoo/src/components/new-todo.vue
-->
<template>
<div class="flex flex-row justify-between items-center mt-8">
  <label for="newtodo">
    <input
      class="border py-2 px-3 text-grey-darkest rounded-lg w-96"
      type="text"
      id="newtodo"
      v-model="store.currentTodo.title"
      @keydown.enter="createTodo"
      placeholder="新建 todo"
    />
  </label>
  <div
    class="flex flex-row justify-center items-center
    bg-main ml-3 py-2 rounded-lg px-4 cursor-pointer"
    @click="createTodo"
    @keydown="createTodo"
  >
    {{ $t('addNewTodo') }}
  </div>
</div>

</template>
<script setup lang="ts">
// import { useI18n } from 'vue-i18n';
import useToodooStore from '../store/store';

const store = useToodooStore();

const createTodo = () => {
  // store.currentTodo.title = '';
  store.addTodo();
};
</script>
