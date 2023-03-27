import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
];


export function setupRouter(app: App) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  app.use(router);
}
