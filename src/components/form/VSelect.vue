<template>
  <div
    v-click-outside="clickOutside"
    :class="[
      $style.root,
      hasOpened && $style.hasOpened,
      disabled && $style.hasDisabled,
      hasNoSpaced && $style.hasNoSpaced
    ]"
    @click="hasOpened = !hasOpened"
  >
    <div :class="$style.textField">
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
        :class="$style.input"
      />

      <div :class="$style.icon">
        <ArrowIcon />
      </div>
    </div>

    <div
      v-if="hasOpened && !disabled"
      ref="optionsRef"
      :class="$style.options"
    >
      <div
        v-for="opt in displayedOptions"
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
import {
  computed,
  nextTick,
  ref,
  watch,
  watchEffect,
} from 'vue';

import ArrowIcon from '@/assets/icons/chevron-down.svg';
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

const optionsRef = ref<HTMLDivElement | null>(null);
const selectValue = ref<string>('');
const hasOpened = ref<boolean>(false);
const hasNoSpaced = ref<boolean>(false);

const displayedOptions = computed<SelectOptions<any>[]>(
  () => [{ name: '', value: '' }, ...props.options],
);

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

watch(() => hasOpened.value, async () => {
  hasNoSpaced.value = false;

  await nextTick();
  if (optionsRef.value) {
    const selectHeight = optionsRef.value.offsetHeight;
    const selectRectTop = optionsRef.value.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    hasNoSpaced.value = selectHeight + selectRectTop > windowHeight;
  }
});
</script>

<style module lang="scss">
@import '@/scss/mixins/mixins';

.root {
  position: relative;
  width: 100%;
  cursor: pointer;

  &.hasDisabled {
    pointer-events: none;
  }
}

.options {
  @include scroll-style;

  z-index: 999;
  position: absolute;
  top: calc(100% + 10px);
  background-color: var(--color-card);
  width: 100%;
  max-height: 350px;
  overflow-y: auto;
  border-radius: 10px;
  box-shadow: var(--shadow-select-options);

  .hasOpened & {
    animation: opening 0.1s;
  }

  .hasNoSpaced & {
    bottom: calc(100% + 10px);
    top: auto;
  }
}

.option {
  @include subtitle1;

  min-height: 38px;
  padding: 5px 10px;

  &:hover {
    background-color: var(--color-card-hover);
    cursor: pointer;
  }
}

.textField {
  position: relative;

  & .input {
    margin: 0;
  }

  & input {
    cursor: pointer;
  }
}

.icon {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;

  transition: transform 0.4s;
  pointer-events: none;
  fill: var(--color-text);

  .hasOpened & {
    transform: translateY(-50%) rotateZ(540deg);
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
