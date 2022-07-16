<!-- eslint-disable max-len -->
<!--
 * @Date: 2022-07-01 12:39:30
 * @LastEditors: ibegyourpardon
 * @LastEditTime: 2022-07-13 16:19:23
 * @FilePath: /toodoo/src/components/ProjectListScroller/ProjectListScroller.vue
-->
<template>
  <div class="invisible
    lg:visible bg-bColor2 flex flex-col justify-start items-center w-[300px] h-screen
      fixed top-0 left-0 z-10 p-0">
    <LogoView />
    <ul class="w-[300px]">
      <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300
              hover:text-black   hover:bg-gray-300  hover:font-bold rounded-lg">
        <span>
          <svg class="fill-current h-5 w-5 " viewBox="0 0 24 24">
            <path d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"></path>
          </svg>
        </span>
        <a href="#">
          <span class="ml-2">All Tasks</span>
        </a>
      </li>

      <li class="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300
              hover:text-black   hover:bg-gray-300  hover:font-bold rounded-lg">
        <span>
          <svg class="fill-current h-5 w-5 " viewBox="0 0 24 24">
            <path d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"></path>
          </svg>
        </span>
        <a href="#">
          <span class="ml-2">Today</span>
        </a>
      </li>

    </ul>

  </div>
</template>

<script setup lang="ts">
import LogoView from './logo-view.vue';
</script>

<style scoped>

</style>
