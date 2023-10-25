<template>
  <VFlex
    :align="FlexAlign.CENTER"
    :justify-content="FlexJustify.SPACE_BETWEEN"
  >
    <VFlex
      :align="FlexAlign.CENTER"
      :class="$style.root"
    >
      <VOffset
        :mt="5"
        :mr="10"
        :class="$style.image"
      >
        <slot />
      </VOffset>

      <VOffset>
        <VOffset :mb="5">
          <VText
            variant="body2"
            font-weight="500"
          >
            {{ props.title }}
          </VText>
        </VOffset>

        <VOffset>
          <VText
            variant="caption"
            :color="GlobalColorMap['400'].default"
          >
            {{ props.desc }}
          </VText>
        </VOffset>
      </VOffset>
    </VFlex>

    <VOffset width="80px">
      <VTextField
        :model-value="CVC"
        label="CVC"
        placeholder="***"
        max-width
        :variant="TextFieldVariant.OUTLINED"
        @update:model-value="inputHandler"
      />
    </VOffset>
  </VFlex>
</template>

<script setup lang="ts">
import {
  ref,
  watch,
  watchEffect,
} from 'vue';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTextField from '@/components/form/VTextField.vue';
import { GlobalColorMap } from '@/model/Colors';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { TextFieldVariant } from '@/model/components/form/VTextField';

interface PropsType {
  modelValue: string;
  title?: string;
  desc?: string;
}

interface EmitsType {
  (e: 'update:modelValue', v: string): void;
}

const props = defineProps<PropsType>();
const emits = defineEmits<EmitsType>();

const CVC = ref<string>('');

const inputHandler = (e: string): void => {
  if (e.length > 3) return;

  CVC.value = e.replace(/[^0-9]/g, '');
};

watch(() => CVC.value, () => {
  emits('update:modelValue', CVC.value);
});
</script>

<style module lang="scss">
.root {}

.image img {
  width: 42px;
  height: 30px;
}
</style>
