import type { Pinia } from 'pinia';
import { createPinia as _createPinia } from 'pinia';
import { createApp as _createApp } from 'vue';
import type { Router } from 'vue-router';

import App from '@/App.vue';
import createRouter from '@/router';

export default function createApp() {
  const app: App<Element> = _createApp(App);
  const pinia: Pinia = _createPinia();
  const router: Router = createRouter();

  return {
    app,
    pinia,
    router,
  };
}
