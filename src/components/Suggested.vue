<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pt-8 mx-2">
    <p class="mb-2">Suggested for you</p>
    <div v-if="isLoading" class="text-center">Please hold while the video loads</div>
    <div class="flex relative">
      <Icon
        icon="carbon:previous-filled"
        color="white"
        class="absolute z-50 top-20 cursor-pointer text-4xl shadow-lg"
        @click="handleNext()"
      />
      <div class="">
        <div class="flex" v-for="(vid, idx) in getKeys" :key="vid">
          <div
            :class="[
              'div absolute w-full transition-all ease-in-out duration-500',
              idx + 1 === num ? 'scale-100 opacity-100 z-40' : 'scale-50 opacity-50'
            ]"
          >
            <div class="">
              <vue-plyr>
                <div data-plyr-provider="youtube" :data-plyr-embed-id="vid.key"></div>
              </vue-plyr>
            </div>
            <div :class="['text-center mt-6', idx + 1 === num ? 'block' : 'hidden']">
              <p class="font-bold mt-1">{{ vid?.name }}</p>
              <p>{{ vid?.type }}</p>
            </div>
          </div>
        </div>
      </div>
      <Icon
        icon="carbon:next-filled"
        color="white"
        class="absolute right-0 z-50 top-20 cursor-pointer text-4xl shadow"
        @click="handleNext()"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'movieList',
  data() {
    return {
      getKeys: [],
      moviesId: [],
      num: 1,
      isLoading: true
    }
  },
  mounted() {
    this.getMovieList(),
      setTimeout(() => {
        this.isLoading = false
      }, 15000)
  },
  methods: {
    getMovieList() {
      axios
        .get(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=d41e5cc98e9bc500e752b81980bee6c5'
        )
        .then((res) => {
          const moviesId = res.data.results.map((e) => e.id)
          const promises = moviesId.map((id) => {
            return axios.get(
              `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d41e5cc98e9bc500e752b81980bee6c5&language=en-US`
            )
          })
          Promise.all(promises).then((responses) => {
            const videoKeys = responses
              .map((res) => res.data.results[0])
              .filter((result) => result != null)
              .map((result) => result)

            this.getKeys = videoKeys
          })
        })
    },
    handleNext() {
      this.num = 1 * Math.floor(Math.random() * this.getKeys.length)
      console.log(this.num)
    }
  }
}
</script>

<script setup>
import { Icon } from '@iconify/vue'
</script>
