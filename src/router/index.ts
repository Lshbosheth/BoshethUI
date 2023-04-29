import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import home from '../components/HelloWorld.vue'
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: home
  },
];


export function setupRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  app.use(router);
}
