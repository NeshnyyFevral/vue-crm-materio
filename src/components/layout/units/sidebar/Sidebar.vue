<template>
  <div
    :class="[
      $style.root,
      modelValue && $style.open,
      !modelValue && active && $style.active
    ]"
  >
    <VOffset
      :mt="20"
      :mb="20"
    >
      <VFlex :align="FlexAlign.CENTER">
        <VOffset
          :ml="18"
          :mr="25"
        >
          <LogoIcon />
        </VOffset>
        <div :class="$style.headerWrapper">
          <VTitle variant="heading5">
            MATERIO
          </VTitle>
          <button
            :class="$style.headerButton"
            @click="toggle"
          >
            <CrossIcon />
          </button>
        </div>
      </VFlex>
    </VOffset>
    <VOffset
      height="90%"
      :class="$style.container"
    >
      <VOffset :mr="10">
        <div
          v-for="node in SidebarTree"
          :key="node.title"
        >
          <div
            v-if="node.title"
            :class="[
              $style.titleWrapper,
              !modelValue && $style.titleWrapperHide,
              active && $style.titleWrapperShow
            ]"
          >
            <div :class="$style.line" />
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
            @toggle="activeList = $event"
          />
        </div>
      </VOffset>
    </VOffset>
  </div>
</template>

<script setup lang="ts">
import CrossIcon from '@public/assets/icons/cross.svg';
import LogoIcon from '@public/assets/icons/sidebar/logo.svg';
import { computed, ref } from 'vue';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTitle from '@/components/basic/VTitle.vue';
import SidebarGroup from '@/components/layout/units/sidebar/SidebarGroup.vue';
import { FlexAlign } from '@/model/components/basic/VFlex';
import SidebarTree from '@/model/Sidebar';

interface PropsType {
  modelValue: boolean;
  active: boolean;
}

interface EmitsType {
  (e: 'update:modelValue', value: boolean): void;
}

const props = defineProps<PropsType>();
const emits = defineEmits<EmitsType>();

const activeLink = ref<string>('');
const activeList = ref<string>('');

const toggle = () => { emits('update:modelValue', !props.modelValue); };

const closedItemsGroup = computed(() => !props.modelValue && !props.active);

</script>

<style module lang="scss">
@import "@/scss/mixins/scroll";
$widthOpen: 260px;

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
  transition: width var(--transition-duration) var(--transition-timing-func),
    transform var(--transition-duration) var(--transition-timing-func),
    background-color var(--transition-duration) var(--transition-timing-func);

  @media screen and (max-width: 1405px) {
    overflow: visible;
    transform: translateX(-300px);
  }
}

.open {
  width: $widthOpen;

  & .headerButton {
    &::after {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1405px) {
    transform: translateX(0);
  }
}

.active {
  width: $widthOpen;
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
  opacity: 0;

  @media screen and (max-width: 1405px) {
    opacity: 1;
  }
}

.headerButton {
  position: absolute;
  display: block;
  top: 50%;
  left: calc(100% + 30px);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid var(--color-title);
  transition: right var(--transition-duration) var(--transition-timing-func),
    background-color var(--transition-duration) var(--transition-timing-func);
  fill: none;
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
    transition: opacity var(--transition-duration) var(--transition-timing-func),
      background-color var(--transition-duration) var(--transition-timing-func);
    transform: translate3d(-50%, -50%, 0);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 1405px) {
    padding: 0;
    width: 20px;
    height: 20px;
    border: none;
    fill: var(--color-title);

    &::after {
      display: none;
    }
  }
}

.container {
  @include scroll-style;

  overflow-x: hidden;
  overflow-y: hidden;
}

.open,
.active {
  padding-right: 3px;

  & .container {
    overflow-x: hidden;
    overflow-y: scroll;
  }

  & .headerWrapper {
    opacity: 1;
  }
}

.content {
  height: 100%;
  padding-right: 10px;
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
  transition: background-color var(--transition-duration) var(--transition-timing-func);
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

.titleWrapperHide {
  & .title {
    opacity: 0;
  }

  & .line {
    left: 15px;
    line-height: 12px;
  }
}

.titleWrapperShow {
  & .title {
    opacity: 1;
  }

  & .line {
    left: 0;
  }
}
</style>
