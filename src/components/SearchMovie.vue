<template>
  <div>
    <form action="" class="flex justify-center mt-8">
      <div :class="['flex border px-2 rounded shadow-md', inputText.invalid && 'border-red-400']">
        <input type="text" v-model="inputText.input" class="focus:outline-none text-gray-600" />
        <p type="submit" class="cursor-pointer text-sm border-l pl-1" @click="$emit('handle-seach', inputText.input)">
          Search
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'

const inputText = reactive({
  input: '',
  errMsg: '',
  invalid: null
})

defineEmits(['handle-search'])

</script>

<style scoped></style>
