<template>
  <nav
    ref="navRef"
    :class="[
      $style.root,
      modelValue && $style.hasOpened
    ]"
  >
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
  watch,
} from 'vue';

import { initClickOutside } from '@/model/tools/ClickOutside';

interface PropsType {
  modelValue: boolean;
}

interface EmitsType {
  (e: 'update:modelValue', value: boolean): void;
}

const props = defineProps<PropsType>();
const emits = defineEmits<EmitsType>();
const navRef = ref<HTMLDivElement | null>(null);

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
  width: 100%;
  display: inline-block;
  margin-top: 10px;
  position: relative;
}

.container {
  @include scroll-style;

  border-radius: 6px;
  position: absolute;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-switch);
  transform: scale(0);
  transform-origin: 0 0;
  opacity: 0;
  background-color: var(--color-card);
  padding: 5px 0;
  max-height: 500px;
  overflow-y: auto;

  transition: transform var(--transition-duration) var(--transition-timing-func),
    opacity var(--transition-duration) var(--transition-timing-func),
    height var(--transition-duration) var(--transition-timing-func);

  .hasOpened & {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
