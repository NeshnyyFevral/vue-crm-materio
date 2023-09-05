<template>
  <div :class="$style.root">
    <div :class="$style.container">
      <VIconButton :disabled="props.page === 1">
        <ArrowIcon :class="$style.arrowLeft" />
      </VIconButton>

      <VIconButton
        v-for="item in items"
        :key="item"
        :variant="props.page === item ? IconButtonVariant.FILLED : IconButtonVariant.TRANSPARENT"
        :color="color"
        :size="size"
      >
        {{ item }}
      </VIconButton>

      <VIconButton :disabled="props.page === props.count">
        <ArrowIcon :class="$style.arrowRight" />
      </VIconButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import ArrowIcon from '@/assets/icons/chevron-down.svg';
import VIconButton from '@/components/basic/VIconButton.vue';
import { GlobalColors } from '@/model/Colors';
import { IconButtonVariant } from '@/model/components/basic/VIconButton';
import {
  PaginationMapColor,
  PaginationSize,
  PaginationVariant,
} from '@/model/components/basic/VPagination';

interface PropsType {
  page: number;
  count: number;

  color?: GlobalColors;
  size?: PaginationSize;
  variant?: PaginationVariant;
  disabled?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  page: 1,
  count: 1,

  color: GlobalColors.PRIMARY,
  size: PaginationSize.MEDIUM,
  variant: PaginationVariant.DEFAULT,
  disabled: false,
});

const items = computed(() => Array.from({ length: props.count }, (_, index) => index + 1));
const paginationColor = computed(() => PaginationMapColor[props.color]);
</script>

<style module lang="scss">
.root {
  --pagination-color: v-bind(paginationColor);
}

.container {
  display: flex;
}

.arrowLeft {
  transform: rotateZ(90deg);
}

.arrowRight {
  transform: rotateZ(-90deg);
}
</style>
