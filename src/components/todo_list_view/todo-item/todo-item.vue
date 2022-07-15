<!--
 * @Date: 2022-07-13 23:26:25
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-07-14 00:36:16
 * @FilePath: \toodoo\src\components\todo_list_view\todo-item\todo-item.vue
-->
<template>
  <div
    class="flex flex-row justify-start items-center min-w-128"
  >

  <label v-if="props.item.finished" for="checkbox" class="mr-4">
    <input
      type="checkbox"
      checked
      @change="markUndone(props.item.id)"
    >
  </label>
  <label v-else for="checkbox" class="mr-4">
      <input
        type="checkbox"
        @change="markDone(props.item.id)"
      >
  </label>

    <div v-if="props.item.finished" class="text-left break-words line-through">
      {{props.item.title}}
    </div>
    <div v-else class="text-left break-words">
      {{props.item.title}}
    </div>
  </div>
  <div class="flex flex-row justify-start items-center">
    <div class="text-left">
      {{props.item.createdTime}}
    </div>
    <div
      class="
      w-6 h-6 rounded
      flex flex-col justify-center items-center
      cursor-pointer
      hover:bg-bColor17
      pb-2
      "
      @click="togglePopUp"
      @keydown="togglePopUp"
    >
<!--      <img src="./down-arrow.png" alt="" class="w-4 h-4">-->
      ...
    </div>

    <ul
      ref="thePopUp"
      v-if="ifShowPopUp"
      class="absolute mt-6 w-24 h-20 bg-bColor2
      flex flex-col justify-around items-start
          shadow-md
          text-right
          z-999
          cursor-pointer
          border-solid
          border-2
          rounded-lg
        "
    >
<!--      <ul>-->
        <li class="flex flex-row justify-start items-center pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 fill-mako-100"><path d="M15.586 3a2 2 0 0 1 2.828 0L21 5.586a2 2 0 0 1 0 2.828L19.414 10 14 4.586 15.586 3zm-3 3-9 9A2 2 0 0 0 3 16.414V19a2 2 0 0 0 2 2h2.586A2 2 0 0 0 9 20.414l9-9L12.586 6z"></path></svg>
          <span class="ml-2 hover:text-white hover:font-bold">edit</span>
        </li>
        <li class="flex flex-row justify-start items-center pl-2"
          @click="store.deleteTodo(props.item.id)"
          @keydown="store.deleteTodo(props.item.id)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-4 fill-mako-100"><g id="32843b47-c45c-4436-b212-99015eb713a5" data-name="delete"><path d="M23,2H17V0H7V2H1A1,1,0,0,0,0,3V5A1,1,0,0,0,1,6H23a1,1,0,0,0,1-1V3A1,1,0,0,0,23,2Z"></path><path d="M18.28,24H5.82a2,2,0,0,1-2-1.75L2,8H22L20.27,22.25A2,2,0,0,1,18.28,24Z"></path></g></svg>
          <span class="ml-2 hover:text-white">delete</span>
        </li>
<!--      </ul>-->
    </ul>
  </div>
</template>
<script setup lang="ts">
import {
  defineProps, ref, watch, onBeforeUnmount, onMounted,
} from 'vue';
import useToodooStore from '@/store/store';

const ifShowPopUp = ref(false);

const store = useToodooStore();

// get dom through ref
const thePopUp = ref(null);

const props = defineProps({
  // finished: Boolean,
  item: Object,
});

const bodyCloseMenus = (e: any) => {
  if (ifShowPopUp.value === true && !thePopUp?.value?.contains(e.target)) {
    console.log(666);
    ifShowPopUp.value = false;
  }
  // if (ifShowPopUp.value === true && !thePopUp?.value?.contains(e.target)) {
  //   // thePopUp.value.style.display = 'none';
  //   console.log(thePopUp.value);
  //   console.log(e.target);
  //   console.log(ifShowPopUp.value);
  //   // togglePopUp();
  // }
};

// onMounted(() => {
//   // props.finished = props.item.finished;
//   console.log('mounted');
//   document.addEventListener('click', bodyCloseMenus);
// });

// onBeforeUnmount(() => {
//   ifShowPopUp.value = false;
//   document.removeEventListener('click', bodyCloseMenus);
// });

watch(() => store.todolist, () => {
  console.log('store.todolist changed');
});

const togglePopUp = () => {
  // ifShowPopUp.value = !ifShowPopUp.value;
  console.log('togglePopUp');
  // document.addEventListener('click', bodyCloseMenus);
  console.log(thePopUp.value);
  if (ifShowPopUp.value) {
    ifShowPopUp.value = !ifShowPopUp.value;
    document.removeEventListener('click', (e) => { bodyCloseMenus(e); }, true);
  } else {
    ifShowPopUp.value = !ifShowPopUp.value;
    document.addEventListener('click', (e) => { bodyCloseMenus(e); }, true);
    // document.addEventListener('click', bodyCloseMenus);
  }
};

// const finish = ref(props?.item?.finished);
// const finish = ref(props?.item?.finished);

const markDone = (id: number) => {
  store.markDone(id);
};

const markUndone = (id: number) => {
  store.markUndone(id);
};

</script>
