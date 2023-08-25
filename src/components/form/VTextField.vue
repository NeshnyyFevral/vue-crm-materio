<template>
  <div
    :class="[
      $style.root,
      $style[`variant-${props.variant}`],
      $style[`size-${props.size}`],
      hasFocused && $style.hasFocused,
      hasFilled && $style.hasFilled,
      disabled && $style.hasDisabled,
      isError && $style.isError,
      hasExistPrefix && $style.isPrefix,
      hasExistSuffix && $style.isSuffix,
    ]"
  >
    <div
      v-if="hasExistPrefix"
      ref="prefixRef"
      :class="$style.prefix"
    >
      <slot name="prefix" />
    </div>

    <p
      :class="$style.label"
      @click="clickLabel"
    >
      {{ props.label }}
    </p>

    <input
      ref="inputRef"
      v-model="inputValue"
      :class="$style.input"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :type="type"
      @input="inputHandler"
      @focus="hasFocused = true"
      @focusout="hasFocused = false"
    >

    <p :class="$style.helpText">
      {{ props.helpText }}
    </p>

    <div
      v-if="hasExistSuffix"
      ref="suffixRef"
      :class="$style.suffix"
    >
      <slot name="suffix" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  ref,
  useSlots,
  watchEffect,
} from 'vue';

import { GlobalColors } from '@/model/Colors';
import {
  TextFieldMapColor,
  TextFieldSize,
  TextFieldType,
  TextFieldVariant,
} from '@/model/components/form/VTextField';

interface PropsType {
  modelValue: string;
  name?: string;

  label?: string;
  placeholder?: string;
  helpText?: string;

  type?: TextFieldType;
  variant?: TextFieldVariant;
  color?: GlobalColors;
  size?: TextFieldSize;

  disabled?: boolean;
  error?: boolean;
  required?: boolean;
}

interface EmitsType {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  label: '',
  type: TextFieldType.TEXT,
  color: GlobalColors.PRIMARY,
  variant: TextFieldVariant.OUTLINED,
  size: TextFieldSize.NORMAL,
  disabled: false,
  error: false,
  placeholder: '',
  name: '',
  required: false,
  helpText: '',
});
const emits = defineEmits<EmitsType>();
const slots = useSlots();

const inputRef = ref<HTMLInputElement | null>(null);
const prefixRef = ref<HTMLDivElement | null>(null);
const suffixRef = ref<HTMLDivElement | null>(null);
const prefixWidth = ref<string>('');
const suffixWidth = ref<string>('');
const inputValue = ref<string>('');
const hasFocused = ref<boolean>(false);

const hasFilled = computed(() => !!inputValue.value || !!props.placeholder);
const isError = computed(() => props.error);
const textFieldColor = computed(() => (isError.value ? TextFieldMapColor.error : TextFieldMapColor[props.color]));
const hasExistPrefix = computed(() => !!slots.prefix);
const hasExistSuffix = computed(() => !!slots.suffix);

const inputHandler = async (e: Event) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value);
  await nextTick();
  inputValue.value = props.modelValue;
};

const clickLabel = () => {
  if (inputRef.value) {
    inputRef.value!.focus();
  }
};

onMounted(() => {
  if (prefixRef.value) {
    prefixWidth.value = `${prefixRef.value!.getBoundingClientRect().width + 10}px`;
  }
  if (suffixRef.value) {
    suffixWidth.value = `${suffixRef.value!.getBoundingClientRect().width + 10}px`;
  }
});

watchEffect(() => {
  inputValue.value = props.modelValue;
});
</script>

<style module lang="scss">
@import '@/scss/mixins/typography';

$sizes: (
  small: 8.5px 14px,
  normal: 12.5px 14px,
);

.root {
  --text-field-color: v-bind(textFieldColor);
  --input-padding-left: v-bind(prefixWidth);
  --input-padding-right: v-bind(suffixWidth);

  position: relative;
  display: flex;
  margin-bottom: 10px;

  &.hasDisabled {
    opacity: 0.7;
  }

  &.isError .input {
    border-color: var(--text-field-color);
  }
}

.size {
  @each $key, $size in $sizes {
    &-#{$key} .input {
      padding: $size;
    }
  }
}

.variant {
  &-standard {
    position: relative;

    .input {
      padding-left: 0;
      padding-right: 0;
      outline: none;
      border: none;
      border-bottom: 1px solid var(--color-text-input);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      z-index: 10;
      width: 0;
      height: 2px;
      background-color: var(--text-field-color);
      left: 50%;
      transition: width 0.2s, left 0.2s;
    }

    &.hasFocused::after {
      width: 100%;
      left: 0;
    }

    &.hasDisabled {
      .input {
        border-bottom-style: dashed;
      }
    }
  }

  &-outlined {
    .input {
      border: 1px solid var(--color-text-input);
      border-radius: 5px;
    }
  }
}

.label {
  @include subtitle2;

  font-weight: 400;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%) scale(1.2);
  background-color: var(--color-card);
  color: var(--color-text-input);
  padding: 0 5px;
  transition: transform 0.2s,
    top 0.2s,
    color 0.1s;
  transform-origin: left;
  cursor: text;

  .hasFocused &,
  .hasFilled &,
  .isPrefix & {
    top: 0;
    transform: translateY(-50%) scale(0.9);
  }

  .hasFocused &,
  .isError & {
    color: var(--text-field-color);
  }

  .variant-standard & {
    padding: 0;
    left: 0;
  }
}

.input {
  @include body2;

  width: 100%;
  font-family: Inter, sans-serif;
  outline-color: var(--text-field-color);
  background-color: transparent;
  color: var(--color-text);

  .isPrefix & {
    padding-left: var(--input-padding-left);
  }

  .isSuffix & {
    padding-right: var(--input-padding-right);
  }
}

.helpText {
  @include body2;

  position: absolute;
  color: var(--color-default-500);
  top: calc(100%);
  left: 5%;

  .isError & {
    color: var(--text-field-color);
    animation: animationErrorHelpText 0.4s;
  }
}

.suffix {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;

  svg path {
    fill: var(--color-text-input);
  }
}

.prefix {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);

  svg path {
    fill: var(--color-text-input);
  }
}

@keyframes animationErrorHelpText {
  33% {
    transform: translate(-5px);
  }

  66% {
    transform: translate(5px);
  }

  100% {
    transform: translate(0);
  }
}
</style>
