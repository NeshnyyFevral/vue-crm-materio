<template>
  <button
    :class="[
      $style.root,
      $style[`variant-${props.variant}`],
      $style[`size-${props.size}`],
      maxWidth && $style.block
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import {
  ButtonColor,
  ButtonMapColor,
  ButtonMapColorHover,
  ButtonSize,
  ButtonVariant,
} from '@/model/components/VButton';

interface PropsType {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  maxWidth?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  variant: ButtonVariant.CONTAINED,
  color: ButtonColor.PRIMARY,
  size: ButtonSize.MEDIUM,
});

const buttonColor = computed(() => ButtonMapColor[props.color]);
const buttonColorHover = computed(() => ButtonMapColorHover[props.color]);
</script>

<style module lang="scss">
@import "@/scss/functions/functions.scss";
  .root {
    --color-button: v-bind(buttonColor);
    --color-button-hover: v-bind(buttonColorHover);

    background-color: transparent;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    overflow: hidden;

  }

  .variant {
    &-contained {
      background-color: var(--color-button);
      color: var(--color-text-button);
      box-shadow: 0 4px 8px -4px var(--color-button);
      transition: box-shadow .25s,
      opacity .25s;

      &:hover {
        box-shadow: 0 6px 20px -8px var(--color-button);
        opacity: 0.9;
      }
    }

    &-outlined {
      border: 1px solid var(--color-button);
      color: var(--color-button);
      transition: background-color 0.25s;

      &:hover {
        background-color: var(--color-button-hover);
      }
    }

    &-text {
      color: var(--color-button);
      transition: background-color 0.25s;

      &:hover {
        background-color: var(--color-button-hover);
      }
    }
  }

  .size {
    &-small {
      padding: 7px 15px;
    }

    &-medium {
      padding: 10px 20px;
    }

    &-large {
      padding: 13px 35px;
    }
  }

  .block {
    display: block;
    width: 100%;
  }
</style>
