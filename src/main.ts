import { createApp } from 'vue';
import './style.css';
import { setupStore } from './store';
import { setupRouter } from './router';
import App from './App.vue';

const app = createApp(App);
setupStore(app);
setupRouter(app)
app.mount('#app');
