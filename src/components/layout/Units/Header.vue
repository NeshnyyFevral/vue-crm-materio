<template>
  <header
    :class="[
      $style.root,
      active && $style.active
    ]"
  >
    <div :class="$style.left">
      <VIconButton
        :class="$style.mobileSidebar"
        :variant="IconButtonVariant.TRANSPARENT"
        @click="emits('switchSidebar')"
      >
        <MenuIcon />
      </VIconButton>
      <VIconButton
        :class="$style.search"
        :variant="IconButtonVariant.TRANSPARENT"
      >
        <SearchIcon />
      </VIconButton>
    </div>
    <div :class="$style.right">
      <VIconButton
        :class="$style.notify"
        :variant="IconButtonVariant.TRANSPARENT"
      >
        <NotifyIcon />
      </VIconButton>

      <VAvatar>
        <img
          src="@/assets/avatars/1.png"
          alt="avatar"
        >
      </VAvatar>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  ref,
  watch,
} from 'vue';
import { useRouter } from 'vue-router';

import NotifyIcon from '@/assets/icons/header/notification.svg';
import SearchIcon from '@/assets/icons/header/search.svg';
import MenuIcon from '@/assets/icons/sidebar/menu.svg';
import VAvatar from '@/components/basic/VAvatar.vue';
import VIconButton from '@/components/basic/VIconButton.vue';
import { IconButtonVariant } from '@/model/components/VIconButton';
import appStorage from '@/model/tools/StorageTools';
import { Routes } from '@/router';
import { useThemeStore } from '@/stores/theme';

interface PropsType {
  active: boolean;
  language?: string;
}

interface EmitsType {
  (e: 'switchSidebar'): void;
}

const router = useRouter();
const themeStore = useThemeStore();

const props = defineProps<PropsType>();
const emits = defineEmits<EmitsType>();

const themeValue = ref<boolean>(false);
const displayedThemeValue = computed<'Dark' | 'Light'>(() => (themeValue.value ? 'Dark' : 'Light'));

watch(() => themeValue.value, () => {
  appStorage.set('themeColor', themeValue.value ? 1 : 0);
  themeStore.changeTheme();
});

const languageIcon = computed(() => new URL(`../../../assets/icons/Header/${props.language}.png`, import.meta.url));

onMounted(() => {
  themeValue.value = !!appStorage.get('themeColor');
  themeStore.changeTheme();
});

const exit = () => {
  appStorage.removeItem('authUser');
  router.push(Routes.LOGIN);
};

</script>

<style module lang="scss">
  .root {
    width: calc(100% - 30px);
    position: fixed;
    top: 0;
    z-index: 8888;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    margin-bottom: 40px;
    transition: padding 0.2s cubic-bezier(.25,.8,.5,1),
      background-color 0.3s cubic-bezier(.25,.8,.5,1),
      width 0.2s cubic-bezier(.25,.8,.5,1);
  }

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .search {
    margin-left: 10px;
  }

  .languageButton,
  .theme,
  .notify {
    margin-right: 15px;
  }

  .button {
    position: relative;
    color: var(--color-text);
    cursor: pointer;
    background: transparent;
    border: none;
    fill: var(--color-text);

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 30px;
      height: 30px;
      content: '';
      background-color: var(--color-text);
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.2s linear;
      transform: translate3d(-50%, -50%, 0);
    }

    &:hover::after {
      opacity: 0.1;
    }
  }

  .languageButton {
    position: relative;
    margin-left: 40px;
    color: var(--color-text);
    cursor: pointer;
    background: transparent;
    border: none;
  }

  .languageIcon {
    position: absolute;
    top: 50%;
    left: -27px;
    width: 22px;
    height: 14px;
    transform: translateY(-50%);
  }

  .search,
  .theme,
  .notify {
    svg {
      width: 25px;
    }
  }

  .active {
    padding: 10px 20px;
    background-color: var(--color-header);
    border-radius: 0 0 10px 10px;
    box-shadow: 0 4px 8px -4px rgb(94 86 105 / 42%);
  }

  .mobileSidebar {
    display: none;
    fill: var(--color-text);

    @media screen and (max-width: 1405px) {
      & {
        display: flex;
      }
    }
  }
</style>
