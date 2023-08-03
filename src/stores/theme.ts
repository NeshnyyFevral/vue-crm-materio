import { defineStore } from 'pinia';
import { ref } from 'vue';

import appStorage from '@/model/tools/StorageTools';

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<0 | 1>(0);
  const changeTheme = () => {
    theme.value = appStorage.get('themeColor');
  };
  return { theme, changeTheme };
});
