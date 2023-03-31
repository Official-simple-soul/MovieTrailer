<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="pt-10">
    <form action="" class="flex justify-center mb-8">
      <div :class="['flex border pr-2 rounded shadow-md', inputText.invalid && 'border-red-400']">
        <input type="text" v-model="inputText.input" placeholder="Enter Search" class="focus:outline-none text-gray-600 pl-2 placeholder:text-[12px]" />
        <p
          type="submit"
          class="cursor-pointer text-sm border-l pl-1"
          @click="handleClick(inputText)"
        >
          Search
        </p>
      </div>
    </form>
    <div v-if="searchArr.length > 0" class="">
    <div v-if="!loading" class="">
      <div class="px-2 mb-4" v-for="vid in searchArr" :key="vid">
        <vue-plyr>
          <div data-plyr-provider="youtube" :data-plyr-embed-id="vid.key"></div>
        </vue-plyr>
        <div class="text-center">
        <p class="font-bold mt-1">{{ vid?.name }}</p>
        <p>{{ vid?.type }}</p>
      </div>
      </div>
      
    </div>
    <div v-else class="w-full mt-20">
      <div class="rounded-full w-8 h-8 border-b-2 border-r-4 border-t-6 animate-spin mx-auto"></div>
      <p class="text-center mt-3 text-gray-400">Searching...</p>
    </div>
</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'searchBody',
  data() {
    return {
      searchArr: [],
      queryS: '',
      currentVideo: null,
      loading: false
    }
  },
  mounted() {
    
  },

  methods: {
    getSearchArr(input) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=d41e5cc98e9bc500e752b81980bee6c5&language=en-US&page=1&query=${input}`
        )
        .then((res) => {
          const moviesId = res.data.results.map((e) => e.id)
          const promise = moviesId.map((id) => {
            return axios.get(
              `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d41e5cc98e9bc500e752b81980bee6c5&language=en-US`
            )
          })
          Promise.all(promise).then((responses) => {
            const videoKeys = responses
              .map((res) => res.data.results[0])
              .filter((result) => result != null)
              .map((result) => result)

            this.searchArr = videoKeys
            this.$emit('search-b', this.searchArr.length)
          })
        })
    },
    handleClick(inputObj) {
      inputObj.invalid = false

      if (inputObj.input === '') {
        inputObj.errMsg = 'Input cannot be empty'
        inputObj.invalid = true
      }
      this.loading = true
      this.getSearchArr(encodeURIComponent(inputObj.input))
      
      setTimeout(() => {
        this.loading = false
    }, 5000)
      inputObj.input = ''
    }
  }
}

</script>

<script setup>
import { reactive } from 'vue'

const inputText = reactive({
  input: '',
  errMsg: '',
  invalid: null
})
</script>

<style lang="scss" scoped></style>
