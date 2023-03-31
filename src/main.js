import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './tailwind.css'
import './assets/main.css'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

const app = createApp(App)

app.use(VuePlyr, {
    plyr: {}
  })
  
app.use(createPinia())
app.use(router)

app.mount('#app')
