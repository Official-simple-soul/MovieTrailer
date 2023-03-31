<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="z-50 fixed w-full px-3 py-2 bg-red-900 text-white font-bold">
    <ul class="flex justify-between items-center">
      <div class="logo border-b-2 border-t-2 border-white underline">HM</div>
      <ul class="flex space-x-4 items-center">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/latest">News</RouterLink>
      </ul>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped></style>
