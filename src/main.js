import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import VueSweetalert2 from 'vue-sweetalert2';
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,ArcElement } from 'chart.js';
Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,ArcElement);


// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import axios from "axios";

axios.defaults.baseURL = "http://146.190.32.176/diplomado/api/"

/* import specific icons */
import { faEye, faPenToSquare, faSquare, faSquareH, faTrash, faUserSecret, faLock } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faEye, faPenToSquare, faTrash, faSquareH, faSquare, faLock)
const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
  };

const app = createApp(App)

app.use(createPinia())
app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.use(VueSweetalert2,options);
app.mount('#app')
