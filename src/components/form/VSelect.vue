<template>
  <div
    v-click-outside="clickOutside"
    :class="[
      $style.root,
      hasOpened && $style.hasOpened,
    ]"
    @click="hasOpened = !hasOpened"
  >
    <VTextField
      :model-value="selectValue"
      :disabled="disabled"
      :color="color"
      :label="label"
      :error="error"
      :required="required"
      :variant="variant"
      :size="size"
      :help-text="helpText"
      :placeholder="placeholder"
      readonly
    />

    <div
      v-if="hasOpened"
      :class="$style.options"
    >
      <div
        v-for="opt in options"
        :key="opt"
        :class="$style.option"
        @click="selectHandler(opt)"
      >
        {{ opt.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// todo продумать логику, если value в option будут одинаковыми
import { ref, watchEffect } from 'vue';

import VTextField from '@/components/form/VTextField.vue';
import { GlobalColors } from '@/model/Colors';
import {
  type SelectOptions,
  SelectSize,
  SelectVariant,
} from '@/model/components/form/VSelect';
import { TextFieldSize, TextFieldVariant } from '@/model/components/form/VTextField';

interface PropsType {
  modelValue: string;
  options: SelectOptions<any>[];
  name?: string;

  variant?: TextFieldVariant;
  color?: GlobalColors;
  size?: TextFieldSize;

  label?: string;
  placeholder?: string;
  helpText?: string;

  disabled?: boolean;
  error?: boolean;
  required?: boolean;
}

interface EmitsType {
  (e: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<PropsType>(), {
  name: '',

  variant: SelectVariant.OUTLINED,
  color: GlobalColors.PRIMARY,
  size: SelectSize.NORMAL,

  label: '',
  placeholder: '',
  helpText: '',

  disabled: false,
  error: false,
  required: false,
});
const emits = defineEmits<EmitsType>();

const selectValue = ref<string>('');
const hasOpened = ref<boolean>(false);

const selectHandler = (opt: SelectOptions<any>) => {
  selectValue.value = opt.name;
  emits('update:modelValue', opt.value);
};

const clickOutside = (value: boolean) => {
  if (value) {
    hasOpened.value = false;
  }
};

watchEffect(() => {
  selectValue.value = props.options.find((el: SelectOptions<any>) => el.value === props.modelValue)?.name || '';
});
</script>

<style module lang="scss">
@import '@/scss/mixins/typography';

.root {
  position: relative;
  width: 100%;
}

.options {
  z-index: 999;
  position: absolute;
  top: 100%;
  background-color: var(--color-card);
  width: 100%;
  border-radius: 10px;
  box-shadow: var(--shadow-preview-card);

  .hasOpened & {
    animation: opening 0.1s;
  }
}

.option {
  @include subtitle1;

  padding: 5px 10px;

  &:hover {
    background-color: var(--color-card-hover);
    cursor: pointer;
  }
}

@keyframes opening {
  from {
    transform: scale(0.5);
  }

  to {
    transform: scale(1);
  }
}
</style>
