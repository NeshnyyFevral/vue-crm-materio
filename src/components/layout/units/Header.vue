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
      <VSwitch
        v-model="themeValue"
        :color="GlobalColors.DEFAULT"
        :class="$style.theme"
      >
        {{ displayedThemeValue }}
      </VSwitch>

      <VIconButton
        :class="$style.notify"
        :variant="IconButtonVariant.TRANSPARENT"
      >
        <NotifyIcon />
      </VIconButton>

      <VMenu
        v-model="hasUserMenuOpened"
        :width="200"
      >
        <template #body>
          <VBadge
            :variant="BadgeVariant.DOT"
            :size="BadgeSize.SMALL"
            :value="1"
            :position="BadgePosition.RIGHT_BOTTOM"
            :color="GlobalColors.SUCCESS"
          >
            <VAvatar>
              <img
                src="@/assets/avatars/1.png"
                alt="avatar"
              >
            </VAvatar>
          </VBadge>
        </template>

        <VMenuItem>
          <div :class="$style.menuUser">
            <VBadge
              :variant="BadgeVariant.DOT"
              :size="BadgeSize.SMALL"
              :value="1"
              :position="BadgePosition.RIGHT_BOTTOM"
              :color="GlobalColors.SUCCESS"
            >
              <VAvatar>
                <img
                  src="@/assets/avatars/1.png"
                  alt="avatar"
                >
              </VAvatar>
            </VBadge>

            <span :class="$style.menuText">
              <h5 :class="$style.menuUserName">Jhon Doe</h5>
              <p :class="$style.menuUserRole">Admin</p>
            </span>
          </div>
        </VMenuItem>

        <VMenuSplitter />

        <VMenuItem name="Profile">
          <ProfileIcon />
        </VMenuItem>

        <VMenuItem name="Inbox">
          <InboxIcon />
        </VMenuItem>

        <VMenuItem name="Chat">
          <ChatIcon />
        </VMenuItem>

        <VMenuSplitter />

        <VMenuItem name="Settings">
          <SettingsIcon />
        </VMenuItem>

        <VMenuItem name="FAQ">
          <FAQIcon />
        </VMenuItem>

        <VMenuSplitter />

        <VMenuItem name="Logout">
          <LogoutIcon />
        </VMenuItem>
      </VMenu>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  computed,
  onBeforeMount,
  ref,
  watch,
} from 'vue';
import { useRouter } from 'vue-router';

import NotifyIcon from '@/assets/icons/header/notification.svg';
import SearchIcon from '@/assets/icons/header/search.svg';
import ChatIcon from '@/assets/icons/menu/chat.svg';
import FAQIcon from '@/assets/icons/menu/faq.svg';
import InboxIcon from '@/assets/icons/menu/inbox.svg';
import LogoutIcon from '@/assets/icons/menu/logout.svg';
import ProfileIcon from '@/assets/icons/menu/profile.svg';
import SettingsIcon from '@/assets/icons/menu/settings.svg';
import MenuIcon from '@/assets/icons/sidebar/menu.svg';
import VAvatar from '@/components/basic/VAvatar.vue';
import VBadge from '@/components/basic/VBadge.vue';
import VIconButton from '@/components/basic/VIconButton.vue';
import VMenu from '@/components/basic/VMenu.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VMenuSplitter from '@/components/basic/VMenuSplitter.vue';
import VSwitch from '@/components/form/VSwitch.vue';
import { GlobalColors } from '@/model/Colors';
import {
  BadgePosition,
  BadgeSize,
  BadgeVariant,
} from '@/model/components/basic/VBadge';
import { IconButtonVariant } from '@/model/components/basic/VIconButton';
import appStorage from '@/model/tools/StorageTools';
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
const hasUserMenuOpened = ref<boolean>(false);

const themeValue = ref<boolean>(false);
const displayedThemeValue = computed<'Dark' | 'Light'>(() => (themeValue.value ? 'Dark' : 'Light'));

watch(() => themeValue.value, () => {
  appStorage.set('themeColor', themeValue.value ? 1 : 0);
  themeStore.changeTheme();

  if (themeValue.value) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

onBeforeMount(() => {
  themeValue.value = !!appStorage.get('themeColor');
  themeStore.changeTheme();
});
</script>

<style module lang="scss">
@import "@/scss/mixins/typography";

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
  transition: padding var(--transition-duration) var(--transition-timing-func),
    background-color var(--transition-duration) var(--transition-timing-func),
    width var(--transition-duration) var(--transition-timing-func);
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
    transition: opacity var(--transition-duration) var(--transition-timing-func);
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

.active {
  padding: 10px 20px;
  background-color: var(--color-header);
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 8px -4px rgb(94 86 105 / 42%);
}

.menu {
  &User {
    display: flex;
    align-items: center;
  }

  &Text {
    margin-left: 15px;
  }

  &UserName {
    @include subtitle1;

    font-weight: 600;
  }

  &UserRole {
    @include body2;

    opacity: 0.7;
  }
}

.mobileSidebar {
  display: none !important;
  fill: var(--color-text);

  @media screen and (max-width: 1405px) {
    & {
      display: flex !important;
    }
  }
}
</style>
