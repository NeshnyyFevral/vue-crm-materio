<template>
  <label
    :class="[
      $style.root,
      $style[`color-${props.color}`],
      $style[`size-${props.size}`],
      $style[`labelPlace-${props.labelPlace}`],

      hasChecked && $style.hasChecked,
      disabled && $style.hasDisabled,
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
        :disabled="disabled"
        @change="changeHandler"
      >

      <VText
        variant="subtitle2"
        :class="$style.label"
      >
        {{ label }}
      </VText>
    </div>
  </label>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import VText from '@/components/basic/VText.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { RadioLabelPlacement, RadioSize } from '@/model/components/form/VRadio';

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

const radioColor = computed(() => GlobalColorMap['700'][props.color]);
const hasChecked = computed(() => props.value === props.modelValue);

const changeHandler = async (e: InputEvent) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<style module lang="scss">
$offset-cycle: 8px;
$sizes: (
  small: 12px,
  normal: 16px,
  large: 20px,
);

.root {
  --radio-color: var(--color-text);

  position: relative;
  cursor: pointer;

  &.hasChecked {
    --radio-color: v-bind(radioColor);
  }

  &.hasDisabled {
    opacity: 0.6;
    pointer-events: none;
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
        var(--transition-duration)
        var(--transition-timing-func);

      &::after {
        transform: scale(0);

        transition: transform var(--transition-duration) var(--transition-timing-func)git pull;
      }

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

        transition: background-color 0.15s var(--transition-timing-func),
          opacity 0.15s var(--transition-timing-func);
      }

      &:hover::before {
        opacity: 0.2;
      }

      &:active::before {
        opacity: 0.3;
      }
    }

    &-#{$key}.hasChecked .cycle {
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc($size - $offset-cycle);
        height: calc($size - $offset-cycle);
        border-radius: 50%;
        background-color: var(--radio-color);

        transition: background-color var(--transition-duration) var(--transition-timing-func);
        transform: translate(-50%, -50%) scale(1);
        transform-origin: center;
      }

      &::before {
        background-color: var(--radio-color);
      }

      &:hover::before {
        opacity: 0.3;
      }

      &:active::before {
        opacity: 0.4;
      }
    }
  }
}

.input {
  width: 0;
  height: 0;
}

.labelPlace {
  &-left .container {
    flex-direction: row-reverse;

    & .label {
      margin-right: 5px;
    }
  }

  &-top .container {
    flex-direction: column-reverse;

    & .label {
      margin-bottom: 5px;
    }
  }

  &-bottom .container {
    flex-direction: column;

    & .label {
      margin-top: 5px;
    }
  }

  &-right .container {
    flex-direction: row;

    & .label {
      margin-left: 5px;
    }
  }
}

@keyframes appear {
  from {
    transform: translate(-50%, -50%) scale(0);
  }

  to {
    transform:  translate(-50%, -50%) scale(1);
  }
}
</style>
