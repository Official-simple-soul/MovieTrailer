<template>
  <div class="flex flex-col h-[95vh] justify-center items-center">
    <div v-if="isLoading" class="text-center">
      <div class="w-14 h-14 border-2 mx-auto mb-3 rounded-md">
        <div class="w-4 h-4 rounded-full bg-red-900 spin"></div>
      </div>
      <p>Chief, biko wait o..</p>
    </div>
    <div v-else class="text-center">
      <div class="text-center">
        <h1 class="text-xl mb-2">Welocme to</h1>
        <h1 class="text-3xl font-bold mb-3">Hub Movie Trailer</h1>
      </div>
      <p>Click the button below to continue</p>
      <RouterLink to="/home"
        ><button
          class="bg-red-900 px-4 py-5 cursor-pointer rounded-full shadow-lg mt-3 border-4 text-white"
        >
          Stream
        </button></RouterLink
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 4000)
  },
  methods: {}
}
</script>
<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>
.spin {
  animation: spins 2s infinite ease-in-out;
}

@keyframes spins {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(calc(220%), 0);
  }
  50% {
    transform: translate(calc(220%), calc(220%));
  }
  75% {
    transform: translate(0, calc(220%));
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
