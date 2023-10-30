<template>
  <VFlex
    :class="[
      $style.root,
      props.active && $style.active
    ]"
    :direction="FlexDirection.COLUMN"
    :justify-content="FlexJustify.CENTER"
    :align="FlexAlign.CENTER"
  >
    <component :is="props.icon" />

    <VText variant="body1">
      {{ props.title }}
    </VText>
  </VFlex>
</template>

<script setup lang="ts">
import type { Component } from 'vue';
import { computed } from 'vue';

import VFlex from '@/components/basic/VFlex.vue';
import VText from '@/components/basic/VText.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
} from '@/model/components/basic/VFlex';

interface PropsType {
  icon: Component;
  title: string;
  active?: boolean;
  color?: GlobalColors;
}

const props = withDefaults(defineProps<PropsType>(), {
  active: false,
  color: GlobalColors.PRIMARY,
});

const color = computed(() => GlobalColorMap['700'][props.color]);
</script>

<style module lang="scss">
.root {
  --icon-status-color: v-bind(color);

  svg path {
    fill: var(--color-text);
    transition: fill var(--transition-duration) var(--transition-timing-func);
  }

  &.active {
    p {
      color: var(--icon-status-color);
    }

    svg path {
      fill: var(--icon-status-color);
    }
  }
}
</style>
