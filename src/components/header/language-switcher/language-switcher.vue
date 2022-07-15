<template>
  <div
    @click="changeLanguage"
    @keydown="changeLanguage"
    class="mr-4"
  >
<!--    {{languageInstance.locale.value}}-->
    <img
      src="./translate.png"
      alt="language switcher icon"
      class="w-4"
    >
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const languageInstance = useI18n();
console.log(languageInstance.locale.value);

const changeLanguage = () => {
  languageInstance.locale.value = (languageInstance.locale.value === 'en_US') ? 'zh_CN' : 'en_US';
  window.localStorage.setItem('language', languageInstance.locale.value);
};

</script>

<style scoped>

</style>
