<template>
  <div
    :class="[
      $style.root,
      open && $style.open,
      !open && active && $style.active
    ]"
  >
    <div :class="$style.header">
      <LogoIcon :class="$style.logo" />
      <div :class="$style.headerWrapper">
        <h1 :class="$style.titleLogo">
          materio
        </h1>
        <button
          :class="[
            $style.headerButton,
            $style.menu
          ]"
          @click="toggle"
        >
          <CrossIcon />
        </button>
      </div>
    </div>
    <div :class="$style.container">
      <div :class="$style.content">
        <div
          v-for="node in SidebarTree"
          :key="node.title"
        >
          <div
            v-if="node.title"
            :class="[
              $style.titleWrapper,
              !open && $style.titleWrapperHide,
              active && $style.titleWrapperShow
            ]"
          >
            <span :class="$style.line" />
            <h3 :class="$style.title">
              {{ node.title }}
            </h3>
          </div>
          <SidebarGroup
            v-for="item in node.group"
            :key="item.title"
            :title="item.title"
            :list="item.list"
            :icon="item.icon"
            :count="item.list.length"
            :active-list="activeList"
            :closed-items-group="closedItemsGroup"
            :active-link="activeLink"
            @toggle="toggleList"
            @choiceLink="choiceLink"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import CrossIcon from '@/assets/icons/cross.svg';
import LogoIcon from '@/assets/icons/sidebar/logo.svg';
import SidebarGroup from '@/components/layout/Units/sidebar/SidebarGroup.vue';
import SidebarTree from '@/model/Sidebar';

interface PropsType {
  open: boolean;
  active: boolean;
}

interface EmitsType {
  (e: 'toggle'): void;
}

const props = defineProps<PropsType>();
const emits = defineEmits<EmitsType>();

const activeLink = ref<string>('');
const activeList = ref<string>('');

const toggle = () => { emits('toggle'); };

const choiceLink = (title: string) => { activeLink.value = title; };
const toggleList = (title: string) => {
  activeList.value = title;
};

const closedItemsGroup = computed(() => !props.open && !props.active);

</script>

<style module lang="scss">
  .root {
    position: fixed;
    top: 0;
    z-index: 9999;
    left: 0;
    width: 55px;
    height: 100vh;
    padding: 0;
    overflow: hidden;
    background-color: var(--color-bg);
    transition: width 0.3s cubic-bezier(.25,.8,.5,1),
      transform 0.3s cubic-bezier(.25,.8,.5,1),
      background-color 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .open {
    width: 260px;
    padding-right: 3px;
  }

  .active {
    width: 260px;
    padding-right: 3px;
    box-shadow: 0 5px 6px -3px rgb(94 86 105 / 20%),
      0 3px 16px 2px rgb(94 86 105 / 12%),
      0 9px 12px 1px rgb(94 86 105 / 14%);
  }

  .header {
    position: relative;
    display: flex;
    margin: 22px 0 15px 18px;
  }

  .headerWrapper {
    position: relative;
    margin-left: 42px;
    opacity: 0;
  }

  .titleLogo {
    display: block;
    font-size: 20px;
    color: var(--color-title);
    text-transform: uppercase;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

  .headerButton {
    position: absolute;
    top: 50%;
    right: -85px;
    display: block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid var(--color-title);
    border-radius: 50%;
    transition: right 0.3s cubic-bezier(.25,.8,.5,1),
      background-color 0.3s cubic-bezier(.25,.8,.5,1);
    transform: translateY(-50%);

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 5px;
      height: 5px;
      content: '';
      background-color: var(--color-title);
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.2s cubic-bezier(.25,.8,.5,1),
        background-color 0.3s cubic-bezier(.25,.8,.5,1);
      transform: translate3d(-50%, -50%, 0);
    }
  }

  .menu {
    fill: none;
  }

  .active .headerWrapper,
  .open .headerWrapper,
  .open .headerButton::after {
    opacity: 1;
  }

  .container {
    height: 90%;
    overflow-x: hidden;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(199 199 199);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #999;
    }

    &::-webkit-scrollbar-track {
      background-color: #eee;
      border-radius: 5px;
    }
  }

  .open .container,
  .active .container {
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .content {
    height: 100%;
    padding-right: 10px;
    font-size: 16px;
    color: var(--color-title);
  }

  .titleWrapper {
    position: relative;
    margin: 15px 0 20px;
  }

  .title {
    position: relative;
    z-index: 11;
    display: inline-block;
    padding: 0 5px;
    margin-left: 20px;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    white-space: nowrap;
    background-color: var(--color-sidebar);
    transition: background-color 0.3s cubic-bezier(.25,.8,.5,1);
  }

  .line {
    position: absolute;
    top: 55%;
    z-index: 10;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform: translateY(-50%);
  }

  .titleWrapperHide .title {
    opacity: 0;
  }

  .titleWrapperHide .line {
    left: 15px;
    line-height: 12px;
  }

  .titleWrapperShow .title {
    opacity: 1;
  }

  .titleWrapperShow .line {
    left: 0;
  }

  @media screen and (max-width: 1270px) {
    .root {
      overflow: visible;
      transform: translateX(-300px);
    }

    .open {
      transform: translateX(0);
    }

    .headerWrapper {
      opacity: 1;
    }

    .headerButton {
      width: 28px;
      height: 28px;
      border: none;
      fill: var(--color-title);

      &::after {
        display: none;
      }
    }

    .menu {
      fill: var(--color-title);
    }
  }
</style>
