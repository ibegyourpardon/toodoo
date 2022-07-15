<!--
 * @Date: 2022-06-14 15:54:05
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-07-13 16:19:10
 * @FilePath: /toodoo/src/components/CreateTodo/pop-todo.vue
-->
<template>
  <div
    @click="closeTodoPopup"
    @keydown="closeTodoPopup"
    class="fixed w-full h-full flex flex-col justify-start items-center bg-transparent"
  >
    <div
      @click="stopPropagation"
      @keydown="stopPropagation"
      class="mt-36 shadow-2xl rounded-lg bg-white
       flex flex-col justify-start items-center w-160 h-40"
    >
      <div
        class="flex w-11/12 flex-col justify-start items-start"
      >
        <label for='todo-title'
               class="mt-2 min-w-full text-left border-0 focus:border-none outline-none break-all"
        >
          <input
            type="text"
            placeholder="Task name"
            class="bg-transparent mt-4 min-w-full text-left
             border-0 focus:border-none outline-none break-all"
            name="todo-title"
            id="todo-title"
            v-model="todoTitle"
          >
        </label>
        <label for='todo-description'
               class="mt-2 min-w-full text-left border-0 focus:border-none outline-none break-all"
        >
          <input
            type="text"
            placeholder="description"
            class="bg-transparent mt-1 min-w-full text-left
             border-0 focus:border-none outline-none break-all text-sm"
            id="todo-description"
            name="todo-description"
          >
        </label>
        <div
          id="button-container"
          class="w-full text-right mt-8"
        >
          <button
            @click="closeTodoPopup"
            @keydown="closeTodoPopup"
          >
            取消
          </button>
          <button>
            添加
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import useToodooStore from '@/store/store';

const todoTitle = ref('任务名称');

const newTodo = {
  title: '',
  description: '',
  priority: '',
  dueDate: '',
  completed: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};

console.log(newTodo);
const store = useToodooStore();

const closeTodoPopup = () => {
  store.changeShowEditingPop();
  console.log('close');
};

const stopPropagation = (event: any) => {
  event.stopPropagation();
  console.log('ooo');
};

</script>
