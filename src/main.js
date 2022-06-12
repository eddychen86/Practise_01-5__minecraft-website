import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"

import "./plugins/fontawesome";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
