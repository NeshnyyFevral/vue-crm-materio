<template>
  <label
    :class="[
      $style.root,
      $style[`labelPlace-${props.labelPlace}`],
      disabled && $style.hasDisabled,
    ]"
  >
    <span
      :class="[
        $style.container,
        $style[`size-${props.size}`],
        checkboxValue && $style.hasChecked,
      ]"
    >
      <input
        v-model="checkboxValue"
        :class="$style.input"
        type="checkbox"
        @change="changeHandler"
      >

      <SuccessIcon
        v-if="checkboxValue"
        :class="$style.icon"
      />
    </span>
    <span :class="$style.label">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
  watchEffect,
} from 'vue';

import SuccessIcon from '@/assets/icons/checkbox/success.svg';
import { GlobalColors } from '@/model/Colors';
import {
  CheckboxLabelPlacement,
  CheckboxMapColor,
  CheckboxSize,
} from '@/model/components/form/VCheckbox';

interface PropsType {
  modelValue: boolean;
  color?: GlobalColors;
  size?: CheckboxSize;
  disabled?: boolean;
  labelPlace?: CheckboxLabelPlacement,
}

interface EmitsType {
  (e: 'update:modelValue', value: boolean): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  color: GlobalColors.PRIMARY,
  size: CheckboxSize.NORMAL,
  labelPlace: CheckboxLabelPlacement.RIGHT,
  disabled: false,
});
const emits = defineEmits<EmitsType>();

const checkboxValue = ref<boolean>(false);

const checkboxColor = computed(() => CheckboxMapColor[props.color]);

const changeHandler = (e: InputEvent) => {
  emits('update:modelValue', (e.target as HTMLInputElement).checked);
};

watchEffect(() => {
  checkboxValue.value = props.modelValue;
});
</script>

<style module lang="scss">
@import "@/scss/mixins/typography";
@import "@/scss/mixins/ripple";

$sizes: (
  small: 15px,
  normal: 17px,
);

.root {
  --checkbox-color: v-bind(checkboxColor);

  cursor: pointer;
  display: flex;
  align-items: center;

  &.hasDisabled {
    opacity: 0.5;
    pointer-events: none;
  }
}

.container {
  position: relative;
  display: inline-block;
  border: 2px solid var(--checkbox-color);
  border-radius: 5px;

  &.hasChecked {
    background-color: var(--checkbox-color);
  }
}

.labelPlace {
  &-left {
    flex-direction: row-reverse;

    & .label {
      margin-right: 9px;
    }
  }

  &-top {
    flex-direction: column-reverse;

    & .label {
      margin-bottom: 5px;
    }
  }

  &-bottom {
    flex-direction: column;

    & .label {
      margin-top: 5px;
    }
  }

  &-right {
    flex-direction: row;

    & .label {
      margin-left: 9px;
    }
  }
}

.size {
  @each $key, $size in $sizes {
    &-#{$key} {
      width: $size;
      height: $size;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc($size + 15px);
        height: calc($size + 15px);
        opacity: 0;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--checkbox-color);
        transition: opacity 0.2s;
      }

      &:hover::before {
        opacity: 0.1;
      }

      &:active::before {
        opacity: 0.5;
      }
    }
  }
}

.input {
  width: 0;
  height: 0;
  opacity: 0;
}

.label {
  @include body2;
}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 13px;
  height: 13px;
  fill: var(--color-card);
  transform: translate(-50%, -50%);
}
</style>
