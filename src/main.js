import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.use(router);

axios.defaults.baseURL = 'http://localhost:5000/' 

app.mount('#app');