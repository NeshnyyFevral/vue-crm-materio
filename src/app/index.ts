import 'vue-toastification/dist/index.css';

import type { Pinia } from 'pinia';
import { createPinia as _createPinia } from 'pinia';
import { createApp as _createApp } from 'vue';
import type { Router } from 'vue-router';
import Toast from 'vue-toastification';

import App from '@/App.vue';
import appStorage from '@/model/tools/StorageTools';
import createRouter from '@/router';

export default function createApp() {
  const app: App<Element> = _createApp(App);
  const pinia: Pinia = _createPinia();
  const router: Router = createRouter();

  pinia.state.value = { theme: { theme: appStorage.get('themeColor') || 1 } };

  return {
    app,
    pinia,
    router,
    Toast,
  };
}
