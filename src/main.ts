import '@/scss/style.scss';

import createApp from '@/app';

const {
  app,
  pinia,
  router,
} = createApp();

app
  .use(pinia)
  .use(router)
  .mount('#app');

export { router };
