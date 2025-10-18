import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; /**Impotação dos icons */


createApp(App)
    .use(router) 
    .mount('#app');
