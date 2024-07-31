<template>
  <div
    :class="[
      $style.skeleton,
      $style[`skeleton--${props.variant}`]
    ]"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { SkeletonVariant } from '@/model/components/basic/VSkeleton';

interface PropsType {
  variant?: SkeletonVariant;
  height?: string;
  width?: string;
  rounded?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  rounded: '4px',
  height: '10px',
  width: '10px',
});

const width = computed(() => `${props.width}`);
const height = computed(() => `${props.height}`);
const rounded = computed(() => `${props.rounded}`);
</script>

<style module lang="scss">
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;

  --skeleton-width: v-bind(width);
  --skeleton-height: v-bind(height);
  --skeleton-rounded: v-bind(rounded);

  width: var(--skeleton-width);
  min-width: var(--skeleton-width);
  height: var(--skeleton-height);
  min-height: var(--skeleton-height);
  border-radius: var(--skeleton-rounded);

  &--circle {
    height: 36px;
    width: 36px;
    border-radius: 50% !important;
  }

  &--field {
    border-radius: 16px !important;
    height: 40px;
    box-sizing: border-box;
    width: 244px;
  }

  &--paragraph {
    width: 162px;
    height: 16px;
  }

  &--button {
    width: 80px;
    height: 36px;
    border-radius: 18px !important;
  }
}

@keyframes skeleton-loading {
  0% {
    background-color: var(--color-default-100);
  }

  100% {
    background-color: var(--color-default-300);
  }
}
</style>
