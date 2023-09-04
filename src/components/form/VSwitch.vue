<template>
  <label
    :class="[
      $style.root,
      $style[`labelPlace-${props.labelPlace}`],
      disabled && $style.hasDisabled,
      hasFocused && $style.hasFocused,
    ]"
  >
    <span
      :class="[
        $style.container,
        $style[`size-${props.size}`],
        switchValue && $style.hasChecked,
      ]"
    >
      <div :class="$style.cycle" />
      <input
        v-model="switchValue"
        :class="$style.input"
        type="checkbox"
        :disabled="disabled"
        @change="changeHandler"
        @focusin="hasFocused = true"
        @focusout="hasFocused = false"
      >
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

import { GlobalColors } from '@/model/Colors';
import {
  SwitchLabelPlacement,
  SwitchMapColor,
  SwitchMapColorLight,
  SwitchSize,
} from '@/model/components/form/VSwitch';

interface PropsType {
  modelValue: boolean;
  color?: GlobalColors;
  size?: SwitchSize;
  disabled?: boolean;
  labelPlace?: SwitchLabelPlacement,
}

interface EmitsType {
  (e: 'update:modelValue', value: boolean): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  color: GlobalColors.PRIMARY,
  size: SwitchSize.NORMAL,
  labelPlace: SwitchLabelPlacement.RIGHT,
  disabled: false,
});
const emits = defineEmits<EmitsType>();

const switchValue = ref<boolean>(false);
const hasFocused = ref<boolean>(false);

const switchColor = computed(() => SwitchMapColor[props.color]);
const switchColorLight = computed(() => SwitchMapColorLight[props.color]);

const changeHandler = (e: InputEvent) => {
  emits('update:modelValue', (e.target as HTMLInputElement).checked);
};

watchEffect(() => {
  switchValue.value = props.modelValue;
});
</script>

<style module lang="scss">
@import "@/scss/mixins/typography";
@import "@/scss/mixins/ripple";

$sizes: (
    small: 11px,
    normal: 14px,
);

.root {
  --switch-color: v-bind(switchColor);
  --switch-color-light: v-bind(switchColorLight);

  cursor: pointer;
  display: flex;
  align-items: center;

  &.hasDisabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.hasFocused .cycle  {
    //outline: 2px solid var(--switch-color);
    //outline-offset: 2px;
  }
}

.container {
  position: relative;
  display: inline-block;
  border-radius: 7px;
  background-color: var(--color-default-300);
  transition: background-color var(--transition-duration) var(--transition-timing-func);

  &.hasChecked {
    background-color: var(--switch-color-light);
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
      width: calc($size + 15px);
      height: $size;

      & .cycle {
        width: calc($size + 5px);
        height: calc($size + 5px);

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: calc($size + 20px);
          height: calc($size + 20px);
          opacity: 0;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background-color: var(--color-default-700);
          transition: opacity var(--transition-duration) var(--transition-timing-func),
            background-color var(--transition-duration) var(--transition-timing-func);
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
}

.cycle {
  position: absolute;
  left: -5px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: var(--color-switch);
  transition: left var(--transition-duration) var(--transition-timing-func),
    background-color var(--transition-duration) var(--transition-timing-func);

  box-shadow: var(--shadow-switch);

  @each $key, $size in $sizes {
    .size-#{$key}.hasChecked & {
      left: calc(100% - $size);
    }
  }

  .hasChecked & {
    background-color: var(--switch-color);

    &::before {
      background-color: var(--switch-color);
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
</style>
