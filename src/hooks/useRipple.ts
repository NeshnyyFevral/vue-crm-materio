import { reactive } from 'vue';

export const useRipple = () => {
  const items = reactive<any[]>([]);

  const remove = (key: any) => {
    const index = items.findIndex((i) => i.key === key);
    if (index === -1) return;
    items.splice(index, 1);
  };

  const add = (top: any, left: any, color: any) => {
    const key = Math.random().toString(16).substring(0, 8);

    const item = {
      left,
      key,
      top,
      color,
    };

    items.push(item);

    setTimeout(() => {
      remove(item.key);
    }, 800);
  };

  return {
    add,
    items,
  };
};
