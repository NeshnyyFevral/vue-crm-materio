import '@/scss/style.scss';

import createApp from '@/app';
import clickOutside from '@/model/directives/click-outside';
import ripple from '@/model/directives/ripple';

const {
  app,
  pinia,
  router,
  Toast,
} = createApp();

app
  .directive('ripple', ripple)
  .directive('click-outside', clickOutside)
  .use(pinia)
  .use(router)
  .use(Toast)
  .mount('#app');

export { router };
