import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue';

export const useResizeTrigger = (trigger: number) => {
  const hasChanged = ref<boolean>(trigger > window.innerWidth);

  const resizeHandler = (evt: any, tr: number) => !!(tr && evt?.target?.outerWidth < tr);

  const eventResizeFunc = (e: any) => {
    hasChanged.value = resizeHandler(e, trigger);
  };

  onMounted(() => {
    window.addEventListener('resize', eventResizeFunc);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', eventResizeFunc);
  });

  return hasChanged;
};
