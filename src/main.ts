// -- Packages
import { createApp } from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

// -- Modules
import App from './App.vue'
import { store } from './store'

// -- Style
import "bootstrap/scss/bootstrap.scss"

library.add(faExchangeAlt)

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(store);

app.mount('#app')
