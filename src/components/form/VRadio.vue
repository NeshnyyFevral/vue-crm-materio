<template>
  <label
    :class="[
      $style.root,
      $style[`color-${props.color}`],
      $style[`size-${props.size}`],
      $style[`labelPlace-${props.labelPlace}`],

      hasChecked && $style.hasChecked,
    ]"
  >
    <div :class="$style.container">
      <span :class="$style.cycle" />

      <input
        v-model="radioValue"
        :class="$style.input"
        :name="name"
        type="radio"
        :value="value"
        @change="changeHandler"
      >

      <span :class="$style.label">{{ label }}</span>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { GlobalColors } from '@/model/Colors';
import {
  RadioLabelPlacement,
  RadioMapColor,
  RadioSize,
} from '@/model/components/form/VRadio';

interface PropsType {
  modelValue: string;
  value: string;
  name: string;

  color?: GlobalColors;
  size?: RadioSize;
  labelPlace?: RadioLabelPlacement;

  label?: string;
  disabled?: boolean;
}

interface EmitsType {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  color: GlobalColors.PRIMARY,
  size: RadioSize.NORMAL,
  labelPlace: RadioLabelPlacement.RIGHT,

  label: '',
  disabled: false,
});
const emits = defineEmits<EmitsType>();

const radioValue = ref<string>('');

const radioColor = computed(() => RadioMapColor[props.color]);
const hasChecked = computed(() => props.value === props.modelValue);

const changeHandler = async (e: InputEvent) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<style module lang="scss">
@import '@/scss/mixins/typography';

$offset-cycle: 8px;
$sizes: (
  small: 10px,
  normal: 16px,
);

.root {
  --radio-color: var(--color-text);

  position: relative;
  cursor: pointer;

  &.hasChecked {
    --radio-color: v-bind(radioColor);
  }
}

.container {
  display: flex;
  align-items: center;
}

.size {
  @each $key, $size in $sizes {
    &-#{$key} .cycle {
      position: relative;
      width: $size;
      height: $size;
      border-radius: 50%;
      border: 2px solid var(--radio-color);

      transition: border-color
        var(--transitiom-duration)
        var(--transition-timing-func);

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc($size + $offset-cycle * 1.5);
        height: calc($size + $offset-cycle * 1.5);
        background-color: var(--color-text);
        border-radius: 50%;
        opacity: 0;

        transition: background-color var(--transitiom-duration) var(--transition-timing-func),
          opacity var(--transitiom-duration) var(--transition-timing-func);
      }

      &:hover::before {
        opacity: 0.1;
      }

      &:active::before {
        opacity: 0.2;
      }
    }

    &-#{$key}.hasChecked .cycle {
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc($size - $offset-cycle);
        height: calc($size - $offset-cycle);
        border-radius: 50%;
        background-color: var(--radio-color);

        transition: background-color var(--transitiom-duration) var(--transition-timing-func);
      }

      &::before {
        background-color: var(--radio-color);
      }

      &:hover::before {
        opacity: 0.2;
      }

      &:active::before {
        opacity: 0.3;
      }
    }
  }
}

.input {
  width: 0;
  height: 0;
}

.label {
  @include subtitle2;

  margin-left: 5px;
}
</style>
