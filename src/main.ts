import '@/scss/style.scss';

import createApp from '@/app';
import ripple from '@/model/directives/ripple/VRipple';

const {
  app,
  pinia,
  router,
} = createApp();

app
  .directive('ripple', ripple)
  .use(pinia)
  .use(router)
  .mount('#app');

export { router };
