<template>
  <nav :class="$style.root">
    <ul :class="$style.container">
      <li>
        <VIconButton
          :size="size as IconButtonSize"
          :disabled="modelValue === 1"
          :rounded="rounded"
          @click="changePage('decrease')"
        >
          <ArrowIcon :class="$style.arrowLeft" />
        </VIconButton>
      </li>

      <li
        v-for="item in items"
        :key="item"
      >
        <VIconButton
          :variant="modelValue === item ? variant as IconButtonVariant : IconButtonVariant.TRANSPARENT"
          :color="color"
          :size="size as IconButtonSize"
          :class="$style.item"
          :rounded="rounded"
          @click="changePage('target', item)"
        >
          {{ item }}
        </VIconButton>
      </li>

      <li>
        <VIconButton
          :size="size as IconButtonSize"
          :disabled="modelValue === count"
          :rounded="rounded"
          @click="changePage('increase')"
        >
          <ArrowIcon :class="$style.arrowRight" />
        </VIconButton>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import ArrowIcon from '@public/assets/icons/chevron-down.svg';
import { computed } from 'vue';

import VIconButton from '@/components/basic/VIconButton.vue';
import { GlobalColors } from '@/model/Colors';
import { IconButtonSize, IconButtonVariant } from '@/model/components/basic/VIconButton';
import { PaginationSize, PaginationVariant } from '@/model/components/basic/VPagination';

interface PropsType {
  modelValue: number;
  count: number;

  color?: GlobalColors;
  size?: PaginationSize;
  variant?: PaginationVariant;

  disabled?: boolean;
  rounded?: boolean;
}

interface EmitsType {
  (e: 'update:modelValue', value: number): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  count: 1,

  color: GlobalColors.PRIMARY,
  size: PaginationSize.MEDIUM,
  variant: PaginationVariant.FILLED,

  disabled: false,
  rounded: false,
});
const emits = defineEmits<EmitsType>();

const items = computed<Array<number | string>>(() => {
  const VISIBLE_COUNT = 3;

  if (VISIBLE_COUNT + 5 < props.count) {
    if (props.modelValue <= VISIBLE_COUNT) {
      return [1, 2, 3, 4, 5, '...', props.count];
    }

    if (props.modelValue > VISIBLE_COUNT && props.modelValue + VISIBLE_COUNT <= props.count) {
      return [1, '...', props.modelValue - 1, props.modelValue, props.modelValue + 1, '...', props.count];
    }

    if (props.modelValue + VISIBLE_COUNT > props.count) {
      return [1, '...', props.count - 4, props.count - 3, props.count - 2, props.count - 1, props.count];
    }
  }

  return Array.from({ length: props.count }, (_, index) => index + 1);
});

const changePage = (type: 'decrease' | 'increase' | 'target', target?: number | string) => {
  switch (type) {
  case 'decrease': emits('update:modelValue', props.modelValue - 1); break;
  case 'increase': emits('update:modelValue', props.modelValue + 1); break;
  case 'target':
    if (target && typeof target === 'number') {
      emits('update:modelValue', target);
    } break;
  default: break;
  }
};
</script>

<style module lang="scss">
.root {}

.container {
  display: flex;
}

.arrowLeft {
  transform: rotateZ(90deg);
}

.arrowRight {
  transform: rotateZ(-90deg);
  margin-left: 5px;
}

.item {
  margin-left: 5px;
  transition: none;
}
</style>
