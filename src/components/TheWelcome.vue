<script setup>
import Suggested from './Suggested.vue'
import SearchBody from './SearchBody.vue'

let searchlength = 0
const searchB = (list) => {
  searchlength = list
}
</script>


<template>
  <div class="pt-10 pb-5">
      <SearchBody @search-b="searchB" />
    
      <div v-if="searchlength < 1" class="">
      <Suggested />
    </div>
    <div v-else class="">

    </div>
  </div>
</template>
