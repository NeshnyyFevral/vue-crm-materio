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
      <!--      <VIconButton
        :class="$style.search"
        :variant="IconButtonVariant.TRANSPARENT"
      >
        <SearchIcon />
      </VIconButton>-->
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
                :src="getPathImg('avatars/1.png')"
                alt="avatar"
              >
            </VAvatar>
          </VBadge>
        </template>

        <VMenuItem>
          <VFlex :align="FlexAlign.CENTER">
            <VBadge
              :variant="BadgeVariant.DOT"
              :size="BadgeSize.SMALL"
              :value="1"
              :position="BadgePosition.RIGHT_BOTTOM"
              :color="GlobalColors.SUCCESS"
            >
              <VAvatar>
                <img
                  :src="getPathImg('avatars/1.png')"
                  alt="avatar"
                >
              </VAvatar>
            </VBadge>

            <VOffset :ml="15">
              <VText
                variant="subtitle1"
                font-weight="600"
              >
                Jhon Doe
              </VText>
              <VText
                variant="body2"
                :color="GlobalColorMap['400'].default"
              >
                Admin
              </VText>
            </VOffset>
          </VFlex>
        </VMenuItem>

        <VSplitter />

        <VMenuItem
          name="Profile"
          @click-elem="selectUserMenu"
        >
          <ProfileIcon />
        </VMenuItem>

        <VSplitter />

        <VMenuItem name="Settings">
          <SettingsIcon />
        </VMenuItem>

        <VMenuItem name="FAQ">
          <FAQIcon />
        </VMenuItem>

        <VSplitter />

        <VMenuItem name="Logout">
          <LogoutIcon />
        </VMenuItem>
      </VMenu>
    </div>
  </header>
</template>

<script setup lang="ts">
import NotifyIcon from '@public/assets/icons/header/notification.svg';
import ChatIcon from '@public/assets/icons/menu/chat.svg';
import FAQIcon from '@public/assets/icons/menu/faq.svg';
import InboxIcon from '@public/assets/icons/menu/inbox.svg';
import LogoutIcon from '@public/assets/icons/menu/logout.svg';
import ProfileIcon from '@public/assets/icons/menu/profile.svg';
import SettingsIcon from '@public/assets/icons/menu/settings.svg';
import MenuIcon from '@public/assets/icons/sidebar/menu.svg';
import {
  computed,
  onBeforeMount,
  ref,
  watch,
} from 'vue';
import { useRouter } from 'vue-router';

import VAvatar from '@/components/basic/VAvatar.vue';
import VBadge from '@/components/basic/VBadge.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VIconButton from '@/components/basic/VIconButton.vue';
import VMenu from '@/components/basic/VMenu.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VSplitter from '@/components/basic/VSplitter.vue';
import VText from '@/components/basic/VText.vue';
import VSwitch from '@/components/form/VSwitch.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import {
  BadgePosition,
  BadgeSize,
  BadgeVariant,
} from '@/model/components/basic/VBadge';
import { FlexAlign } from '@/model/components/basic/VFlex';
import { IconButtonVariant } from '@/model/components/basic/VIconButton';
import { getPathImg } from '@/model/tools/PathTools';
import appStorage from '@/model/tools/StorageTools';
import { Routes } from '@/router';
import { useThemeStore } from '@/stores/theme';

interface PropsType {
  active: boolean;
}

interface EmitsType {
  (e: 'switchSidebar'): void;
}

defineProps<PropsType>();

const themeStore = useThemeStore();
const router = useRouter();

const emits = defineEmits<EmitsType>();
const hasUserMenuOpened = ref<boolean>(false);

const themeValue = ref<boolean>(false);
const displayedThemeValue = computed<'Dark' | 'Light'>(() => (themeValue.value ? 'Dark' : 'Light'));

const selectUserMenu = (page: 'Profile') => {
  switch (page) {
  case 'Profile': router.push({ name: Routes.USER_PROFILE_PROFILE }); break;
  default:
  }
};

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

  svg path {
    fill: var(--color-default-600)
  }
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
