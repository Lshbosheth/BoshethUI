import { createApp } from 'vue';
import './style.css';
import { setupStore } from './store';
import { setupRouter } from './router';
import App from './App.vue';
import naive from 'naive-ui'

const app = createApp(App);
setupStore(app);
setupRouter(app)
app.use(naive)
app.mount('#app');
