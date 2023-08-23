<template>
  <div
    :class="[
      $style.root,
      $style[`variant-${props.variant}`],
      $style[`size-${props.size}`]
    ]"
  >
    <input
      v-model="inputValue"
      :class="$style.input"
      :placeholder="placeholder"
      @input="inputHandler"
    >
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';

import { GlobalColors } from '@/model/Colors';
import {
  TextFieldSize,
  TextFieldType,
  TextFieldVariant,
} from '@/model/components/form/VTextField';

interface PropsType {
  modelValue: string;
  label?: string;
  type?: TextFieldType;
  color?: GlobalColors;
  variant?: TextFieldVariant;
  size?: TextFieldSize;
  disabled?: boolean;
  readonly?: boolean;
  error?: boolean;
  placeholder?: string;
  name?: string;
}

interface EmitsType {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  label: '',
  type: TextFieldType.TEXT,
  color: GlobalColors.PRIMARY,
  variant: TextFieldVariant.STANDARD,
  size: TextFieldSize.NORMAL,
  disabled: false,
  readonly: false,
  error: false,
  placeholder: '',
  name: '',
});
const emits = defineEmits<EmitsType>();

const inputValue = ref<string>('');

const inputHandler = async (e: Event) => {
  emits('update:modelValue', (e.target as HTMLInputElement).value);
  await nextTick();
  inputValue.value = props.modelValue;
};
</script>

<style module lang="scss">
$sizes: (
  small: 8.5px 14px,
  normal: 16.5px 14px,
);

.root {}

.variant {
  &-standard {}
  &-outlined {
    .input {
      border: 1px solid var(--color-border);
      border-radius: 5px;
    }
  }
}

.size {
  @each $key, $size in $sizes {
    &-#{$key} .input {
      padding: $size;
    }
  }
}

.input {

}
</style>
