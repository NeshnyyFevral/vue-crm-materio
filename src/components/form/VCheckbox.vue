<template>
  <label
    :class="[
      $style.root,
      $style[`labelPlace-${props.labelPlace}`],
      disabled && $style.hasDisabled,
      hasFocused && $style.hasFocused
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
        :disabled="disabled"
        @change="changeHandler"
        @focusin="hasFocused = true"
        @focusout="hasFocused = false"
      >

      <SuccessIcon
        v-if="checkboxValue"
        :class="$style.icon"
      />
    </span>
    <VText
      variant="body2"
      :class="$style.label"
    >
      <slot />
    </VText>
  </label>
</template>

<script setup lang="ts">
import SuccessIcon from '@public/assets/icons/checkbox/success.svg';
import {
  computed,
  ref,
  watchEffect,
} from 'vue';

import VText from '@/components/basic/VText.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { CheckboxLabelPlacement, CheckboxSize } from '@/model/components/form/VCheckbox';

interface PropsType {
  color?: GlobalColors;
  size?: CheckboxSize;
  disabled?: boolean;
  labelPlace?: CheckboxLabelPlacement,
}

const modelValue = defineModel<boolean>({ required: true });
const props = withDefaults(defineProps<PropsType>(), {
  color: GlobalColors.PRIMARY,
  size: CheckboxSize.NORMAL,
  labelPlace: CheckboxLabelPlacement.RIGHT,
  disabled: false,
});

const checkboxValue = ref<boolean>(false);
const hasFocused = ref<boolean>(false);

const checkboxColor = computed(() => GlobalColorMap['700'][props.color]);

const changeHandler = (e: InputEvent) => {
  modelValue.value = (e.target as HTMLInputElement).checked;
};

watchEffect(() => {
  checkboxValue.value = modelValue.value;
});
</script>

<style module lang="scss">
@import "@/scss/mixins/ripple";

$position-left: 'left', row-reverse, 'margin-right', 9px;
$position-top: 'top', column-reverse, 'margin-bottom', 5px;
$position-bottom: 'bottom', column, 'margin-top', 5px;
$position-right: 'right', row, margin-left, 9px;

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

  &.hasFocused .container {
    outline: 2px solid var(--checkbox-color);
    outline-offset: 2px;
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
  @each $key, $fl-dir, $offset-rule, $offset in
      $position-left, $position-bottom, $position-right, $position-top {
    &-#{$key} {
      flex-direction: $fl-dir;

      & .label {
        #{$offset-rule}: $offset;
      }
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
        transition: opacity var(--transition-duration) var(--transition-timing-func);
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
