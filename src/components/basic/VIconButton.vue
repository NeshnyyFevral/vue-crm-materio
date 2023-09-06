<template>
  <button
    v-ripple
    :class="[
      $style.root,
      $style[`variant-${props.variant}`],
      $style[`size-${props.size}`],
      disabled && $style.disabled,
      rounded && $style.rounded,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { GlobalColors } from '@/model/Colors';
import {
  IconButtonMapColor,
  IconButtonMapColorLight,
  IconButtonSize,
  IconButtonVariant,
} from '@/model/components/basic/VIconButton';

interface PropsType {
  size?: IconButtonSize;
  color?: GlobalColors;
  variant?: IconButtonVariant;
  rounded?: boolean;
  disabled?: boolean;
}
const props = withDefaults(defineProps<PropsType>(), {
  size: IconButtonSize.MEDIUM,
  color: GlobalColors.DEFAULT,
  variant: IconButtonVariant.TRANSPARENT,
  disabled: false,
  rounded: false,
});

const iconButtonColor = computed(() => IconButtonMapColor[props.color]);
const iconButtonColorLight = computed(() => IconButtonMapColorLight[props.color]);
</script>

<style module lang="scss">
@import '@/scss/mixins/mixins';

$size-small: 'small', // $key
  20px, // $size
  12px; // $font-size
$size-medium: 'medium', // $key
  26px, // $size
  14px; // $font-size
$size-large: 'large', // $key
  42px, // $size
  20px; // $font-size

.root {
  @include ripple-block;

  --icon-button-color: v-bind(iconButtonColor);
  --icon-button-color-light: v-bind(iconButtonColorLight);

  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text);

  transition: background-color var(--transition-duration) var(--transition-timing-func);

  &:focus-visible {
    outline: 2px solid var(--icon-button-color);
    outline-offset: 2px;
  }

  path {
    transition: fill var(--transition-duration) var(--transition-timing-func);
  }
}

.variant {
  &-filled {
    background-color: var(--icon-button-color);
    color: var(--color-button-text);

    path {
      fill: var(--color-button-text);
    }

    &:hover {
      background-color: var(--icon-button-color-light);

      path {
        fill: var(--icon-button-color);
      }
    }
  }

  &-light {
    background-color: var(--icon-button-color-light);
    color: var(--color-default-700);

    path {
      fill: var(--icon-button-color);
    }

    &:hover {
      background-color: var(--icon-button-color);

      path {
        fill: var(--color-button-text);
      }
    }
  }

  &-transparent {
    path {
      fill: var(--icon-button-color);
    }

    &:hover {
      background-color: var(--color-default-100);
    }
  }
}

.size {
  @each $key, $size, $font-size in $size-small, $size-medium, $size-large {
    &-#{$key} {
      font-size: $font-size;
      width: calc($size + 10px);
      height: calc($size + 10px);

      svg {
        width: $size;
        height: $size;
      }
    }
  }
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.rounded {
  border-radius: 8px;
}
</style>
