<template>
  <button
    v-ripple
    :class="[
      $style.root,
      $style[`variant-${props.variant}`],
      $style[`size-${props.size}`],
      disabled && $style.disabled
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
  disabled?: boolean;
}
const props = withDefaults(defineProps<PropsType>(), {
  size: IconButtonSize.MEDIUM,
  color: GlobalColors.DEFAULT,
  variant: IconButtonVariant.TRANSPARENT,
});

const iconButtonColor = computed(() => IconButtonMapColor[props.color]);
const iconButtonColorLight = computed(() => IconButtonMapColorLight[props.color]);
</script>

<style module lang="scss">
@import '@/scss/mixins/mixins';

$sizes: (
    small: 20px,
    medium: 26px,
    large: 42px,
);

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

  transition: background-color var(--transitiom-duration) var(--transition-timing-func);

  &:focus-visible {
    outline: 2px solid var(--icon-button-color);
    outline-offset: 2px;
  }

  path {
    transition: fill var(--transitiom-duration) var(--transition-timing-func);
  }
}

.variant {
  &-filled {
    background-color: var(--icon-button-color);

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
  @each $key, $size in $sizes {
    &-#{$key} {
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
</style>
