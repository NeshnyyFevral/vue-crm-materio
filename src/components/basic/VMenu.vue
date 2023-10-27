<template>
  <nav
    ref="navRef"
    :class="[
      $style.root,
      $style[`position-${props.position}`],
      modelValue && $style.hasOpened
    ]"
    @click="clickHandler"
  >
    <slot name="body" />

    <div :class="$style.container">
      <slot />
    </div>
  </nav>
</template>

<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue';

import { MenuPosition } from '@/model/components/basic/VMenu';
import { initClickOutside } from '@/model/tools/ClickOutside';

interface PropsType {
  modelValue: boolean;

  position?: MenuPosition;
  width?: number;
}

interface EmitsType {
  (e: 'update:modelValue', value: boolean): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  position: MenuPosition.BOTTOM_RIGHT,
  width: undefined,
});
const emits = defineEmits<EmitsType>();

const navRef = ref<HTMLDivElement | null>(null);

const menuWidth = computed(() => (props.width ? `${props.width}px` : 'auto'));

const clickHandler = async () => {
  emits('update:modelValue', !props.modelValue);
};

const clickOutside = () => {
  emits('update:modelValue', false);
};

onMounted(() => {
  initClickOutside(navRef.value, clickOutside).addClickOutside();
});

onBeforeUnmount(() => {
  initClickOutside(navRef.value, clickOutside).removeClickOutside();
});

</script>

<style module lang="scss">
@import "@/scss/mixins/scroll";

.root {
  --menu-width: v-bind(menuWidth);

  cursor: pointer;
  display: inline-block;
  position: relative;
}

.container {
  @include scroll-style;

  position: absolute;
  padding: 5px 0;
  width:  var(--menu-width);
  max-height: 500px;
  border-radius: 6px;
  //border: 1px solid var(--color-border);
  background-color: var(--color-card);
  box-shadow: rgba(19, 17, 32, 0.2) 0px 5px 6px -3px,
    rgba(19, 17, 32, 0.14) 0px 9px 12px 1px,
    rgba(19, 17, 32, 0.12) 0px 3px 16px 2px;
  transform: scale(0);
  transform-origin: 0 0;
  opacity: 0;
  overflow-y: auto;
  z-index: 99;

  transition: transform var(--transition-duration) 0.15s var(--transition-timing-func),
    opacity var(--transition-duration) 0.15s var(--transition-timing-func),
    height var(--transition-duration) 0.15s var(--transition-timing-func);

  .hasOpened & {
    transform: scale(1);
    opacity: 1;
  }
}

.position {
  &-top-left {
    .container {
      transform-origin: 0 100%;
      bottom: calc(100% + 10px);
      left: 0;
    }
  }

  &-top-right {
    .container {
      transform-origin: 100% 100%;
      bottom: calc(100% + 10px);
      right: 0;
    }
  }

  &-bottom-left {
    .container {
      transform-origin: 0 0;
      top: calc(100% + 10px);
      left: 0;
    }
  }

  &-bottom-right {
    .container {
      transform-origin: 100% 0;
      top: calc(100% + 10px);
      right: 0;
    }
  }
}
</style>
