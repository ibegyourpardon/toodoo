<!--
 * @Date: 2022-06-11 10:23:59
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-06-11 10:25:36
 * @FilePath: \toodoo\src\views\home-view.vue
-->
<template>
  <div>
    <NewTodoVue />
    <ListView />
  </div>
</template>
<script setup lang="ts">
import NewTodoVue from '@/components/new-todo.vue';
import ListView from '@/components/list-view.vue';
</script>
