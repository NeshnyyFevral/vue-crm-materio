import type { DirectiveBinding } from 'vue';

export default {
  mounted(el: any, binding: DirectiveBinding, vnode: any) {
    el.clickOutsideEvent = (event: any) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode?.ctx?.setupState[binding.value.name](true);
      } else {
        vnode?.ctx?.setupState[binding.value.name](false);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el: any) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};
