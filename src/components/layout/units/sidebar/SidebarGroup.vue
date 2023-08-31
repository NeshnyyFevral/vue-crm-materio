<template>
  <div
    :class="[
      $style.root,
      defaultIcon && $style.defaultIcon
    ]"
  >
    <button
      v-ripple
      :class="[
        $style.button,
        active && !closedItemsGroup && $style.buttonOpen
      ]"
      @click="openList"
    >
      <span :class="$style.prependIcon">
        <component :is="icon" />
      </span>
      <h3 :class="$style.title">
        {{ title }}
      </h3>
      <ArrowIcon :class="$style.arrowIcon" />
    </button>
    <div
      ref="listItems"
      :class="[
        $style.listItems,
        active && !closedItemsGroup && $style.listOpen,
      ]"
    >
      <SidebarItem
        v-for="item in props.list"
        :key="item.title"
        :title="item.title"
        :to="item.route"
        default-icon
        :active-link="activeLink"
        @choiceLink="choiceLink(item.title)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import ArrowIcon from '@/assets/icons/chevron-down.svg';
import SidebarItem from '@/components/layout/units/sidebar/SidebarItem.vue';
import type { SidebarList } from '@/model/Sidebar';

interface PropsType {
  title: string;
  defaultIcon?: boolean;
  closedItemsGroup: boolean;
  count: number;
  activeList: string;
  list: SidebarList[];
  activeLink: string;
  icon: any;
}

interface EmitsType {
  (e: 'toggle', value: string): void;
  (e: 'choiceLink', value: string): void;
}

const props = defineProps<PropsType>();
const emits = defineEmits<EmitsType>();

const listItems = ref(null);
const listHeight = ref(`${props.count * 49}px`);

const active = computed(() => (props.activeList === props.title));

const openList = () => {
  if (active.value) {
    emits('toggle', '');
  } else {
    emits('toggle', props.title);
  }
};

const choiceLink = (title: string) => { emits('choiceLink', title); };
</script>

<style module lang="scss">
@import "@/scss/mixins/ripple";

  .root {
    position: relative;
    z-index: 100;
    width: 100%;
    min-width: 230px;
  }

  .button {
    @include ripple-block;

    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 18px 10px 22px;
    margin-bottom: 5px;
    overflow: hidden;
    font-size: 16px;
    color: var(--color-text);
    cursor: pointer;
    background-color: var(--color-bg);
    border: none;
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    transition: background-color var(--transitiom-duration) var(--transition-timing-func);

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      display: block;
      content: '';
      background: none;
      opacity: 0;
    }

    &:hover {
      background-color: rgb(94 86 105 / 8%);
    }
  }

  .arrowIcon, .prependIcon {
    width: 24px;
    height: 24px;
    fill: var(--color-text);
  }

  .buttonOpen {
    background-color: rgb(94 86 105 / 8%);

    &:hover {
      background-color: rgb(94 86 105 / 20%);
    }
  }

  .arrowIcon {
    position: absolute;
    top: 25%;
    right: 10px;
    transition: transform var(--transitiom-duration) var(--transition-timing-func);
    transform: rotate(-90deg);
  }

  .buttonOpen .arrowIcon {
    transform: rotate(0deg);
  }

  .title {
    position: relative;
    font-weight: 400;
    color: var(--color-text);
  }

  .prependIcon {
    margin-right: 10px;
  }

  .listItems {
    height: 0;
    overflow-y: hidden;
    transition: height var(--transitiom-duration) var(--transition-timing-func);
  }

  .listOpen {
    --list-height: v-bind(listHeight);

    height: var(--list-height);
    margin-bottom: 5px;
  }

  .defaultIcon .button .title {
    margin-left: 7px;

    &::before {
      position: absolute;
      top: 50%;
      left: -33px;
      width: 10px;
      height: 10px;
      content: '';
      border: 1px solid currentColor;
      border-radius: 50%;
      transform: translateY(-50%);
    }
  }
</style>
