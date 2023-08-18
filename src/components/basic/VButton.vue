<template>
  <button
    :class="[
      $style.root,
      $style[`variant-${props.variant}`],
      $style[`size-${props.size}`],
      maxWidth && $style.block,
      disabled && $style.disabled,
      loading && $style.loading
    ]"
  >
    <div
      v-if="loading && !preload"
      :style="{
        width: `${contentWidth}px`,
        height: `${contentHeight}px`
      }"
    >
      <VLoader />
    </div>
    <div
      v-else
      ref="content"
      :class="$style.content"
    >
      <div
        v-if="isVisiblePrepend"
        :class="$style.prepend"
      >
        <slot name="iconPrepend" />
      </div>

      <slot />

      <div
        v-if="isVisibleAppend"
        :class="$style.append"
      >
        <slot name="iconAppend" />
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import {
  computed,
  onMounted,
  ref,
  useSlots,
} from 'vue';

import VLoader from '@/components/basic/VLoader.vue';
import { GlobalColors } from '@/model/Colors';
import {
  ButtonMapColor,
  ButtonMapColorHover,
  ButtonSize,
  ButtonVariant,
} from '@/model/components/VButton';

interface PropsType {
  variant?: ButtonVariant;
  color?: GlobalColors;
  size?: ButtonSize;
  maxWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  variant: ButtonVariant.CONTAINED,
  color: GlobalColors.PRIMARY,
  size: ButtonSize.MEDIUM,
});

const slots = useSlots();
const content = ref<HTMLDivElement | null>(null);
const preload = ref<boolean>(true);

let contentWidth = 0;
let contentHeight = 0;

const isVisiblePrepend = computed<boolean>(() => !!slots.iconPrepend);
const isVisibleAppend = computed<boolean>(() => !!slots.iconAppend);
const buttonColor = computed<string>(() => ButtonMapColor[props.color]);
const buttonColorHover = computed<string>(() => ButtonMapColorHover[props.color]);

const buttonColorDisabledText = computed<string>(() => ButtonMapColor.default);
const buttonColorDisabled = computed<string>(() => ButtonMapColorHover.default);

onMounted(() => {
  contentWidth = content.value?.getBoundingClientRect().width || 0;
  contentHeight = content.value?.getBoundingClientRect().height || 0;

  preload.value = false;
});
</script>

<style module lang="scss">
  @import '@/scss/mixins/mixins';

  .root {
    @include button;

    --color-button: v-bind(buttonColor);
    --color-button-hover: v-bind(buttonColorHover);

    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    overflow: hidden;
  }

  .variant {
    &-contained {
      background-color: var(--color-button);
      color: var(--color-button-text);
      box-shadow: 0 4px 8px -4px var(--color-button);
      transition: box-shadow .25s,
      opacity .25s;

      &:hover {
        box-shadow: 0 6px 20px -8px var(--color-button);
        opacity: 0.9;
      }
    }

    &-outlined {
      --color-button-text: var(--color-button);

      border: 1px solid var(--color-button);
      color: var(--color-button-text);
      transition: background-color 0.25s;

      &:hover {
        background-color: var(--color-button-hover);
      }
    }

    &-text {
      --color-button-text: var(--color-button);

      color: var(--color-button-text);
      transition: background-color 0.25s;

      &:hover {
        background-color: var(--color-button-hover);
      }
    }
  }

  .disabled {
    --color-button: v-bind(buttonColorDisabled);
    --color-button-text: v-bind(buttonColorDisabledText);

    color: var(--color-button-text);
    pointer-events: none;
  }

  .loading {
    pointer-events: none;
  }

  .size {
    $sizes: (
      small: 7px 15px,
      medium: 10px 20px,
      large: 13px 35px,
    );

    @each $key, $size in $sizes {
      &-#{$key} {
        padding: $size;
      }
    }
  }

  .content {
    display: flex;
    align-items: center;
  }

  .block {
    display: block;
    width: 100%;

    .content {
      justify-content: center;
    }
  }

  .prepend,
  .append {
    display: flex;
  }

  .prepend {
    margin-right: 5px;
  }

  .append {
    margin-left: 5px;
  }
</style>
