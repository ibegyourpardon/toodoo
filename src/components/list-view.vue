<!--
 * @Date: 2022-06-08 12:45:33
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-07-14 14:51:00
 * @FilePath: /toodoo/src/components/listview.vue
-->
<template>
  <div class="min-w-128">
    <TodoListTitleBar
      title="Todo List"
      type="uncompleted"
    />
    <div
    v-for="todo in store.todolist"
    :key="todo.id"
    v-show="!todo.finished && todo.title"
    class="flex flex-row justify-between items-center w-128"
    >
      <TodoItemComponent
        finished
        v-bind:item="todo"
      />
    </div>
  </div>
  <hr class="border-solid w-96 border-mako-500 m-4">
  <div>
    <TodoListTitleBar
      title="Completed Todos"
      type="completed"
    />

    <div
    v-for="todo in store.todolist"
    :key="todo.id"
    v-show="todo.finished"
    class="flex flex-row justify-between items-center w-128 opacity-30"
    >
    <TodoItemComponent
      finished
      v-bind:item="todo"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import useToodooStore from '@/store/store';
import { useI18n } from 'vue-i18n';

import TodoListTitleBar from '@/components/todo_list_view/todolist-title-bar.vue';
// import { watch } from 'vue';
import TodoItemComponent from '@/components/todo_list_view/todo-item/todo-item.vue';
import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

const store = useToodooStore();
const languageInstance = useI18n();
console.log(987111);
console.log(languageInstance.t('UncompletedTodos'));

const { todolist, currentTodo, onEditing } = storeToRefs(store);
// console.log(todolist);
const refreshTodos = () => {
  store.getTodos();
};

// const thelist = computed(() => store.todolist);

refreshTodos();
//
// watch(() => store.todolist, () => {
//   console.log('====vvv====');
//   console.log(store.todolist);
//   // refreshTodos();
// });

store.$subscribe((mutation, state) => {
  // localStorage.setItem('store', JSON.stringify(state));
  console.log('====vvv====ttttttttttt');
  console.log(todolist);
  console.log(mutation);
  console.log(state);
});

const markDone = (id: number) => {
  store.markDone(id);
  console.log(id);
  console.log(4444);
};

const markUndone = (id: number) => {
  store.markUndone(id);
  console.log(id);
};

</script>
