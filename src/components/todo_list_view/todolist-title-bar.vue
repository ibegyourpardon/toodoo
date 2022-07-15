<template>
  <div
    class="mt-8 mb-4 text-s w-128
     flex flex-row justify-between items-center font-bold
      text-mako-500
    "
  >
    <span>{{props.title}}</span>
    <div
      class="w-6 h-6 flex flex-col justify-start items-end"
    >
      <div
        class="
      w-6 h-6 rounded
      flex flex-col justify-center items-center
      cursor-pointer
      hover:bg-bColor17
      "
        @click="showMore"
        @keydown="showMore"
      >
        ...
      </div>
      <div
        v-show="ifShowMore"
        class="absolute mt-6 w-24 h-8 bg-bColor21
      flex flex-row justify-center items-center
          shadow-md
          text-right
          z-999
          cursor-pointer
        "
        @click="clearSelfListTodos"
        @keydown="clearSelfListTodos"
      >Clear All</div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, ref } from 'vue';
import useToodooStore from '@/store/store';

const store = useToodooStore();

const ifShowMore = ref(false);

interface Props {
  title: string;
  type?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  type: '',
});

const showMore = () => {
  ifShowMore.value = !ifShowMore.value;
};

const clearSelfListTodos = () => {
  // store.clearSelfListTodos();
  if (props.type === 'uncompleted') {
    store.clearUnfinished();
  } else if (props.type === 'completed') {
    store.clearFinished();
  }
  showMore();
};

</script>

<style scoped>

</style>
