<template>
  <VFlex
    :align="hasChanged ? FlexAlign.START : FlexAlign.CENTER"
    :justify-content="FlexJustify.SPACE_BETWEEN"
    :direction-change-trigger="breakpoint"
  >
    <VFlex :align="FlexAlign.CENTER">
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

    <VOffset
      :width="hasChanged ? '100%' : '80px'"
      :mt="hasChanged ? 20 : 0"
    >
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
import { ref, watch } from 'vue';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTextField from '@/components/form/VTextField.vue';
import { GlobalColorMap } from '@/model/Colors';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { TextFieldVariant } from '@/model/components/form/VTextField';
import { useResizeTrigger } from '@/model/tools/ResizeTools';

interface PropsType {
  title?: string;
  desc?: string;
}

const modelValue = defineModel<string>({ required: true });
const props = defineProps<PropsType>();

const CVC = ref<string>('');

const inputHandler = (e: string): void => {
  if (e.length > 3) return;

  CVC.value = e.replace(/[^0-9]/g, '');
};

watch(() => CVC.value, () => {
  modelValue.value = CVC.value;
});

const breakpoint = 370;
const hasChanged = useResizeTrigger(breakpoint);
</script>

<style module lang="scss">
.image img {
  width: 42px;
  height: 30px;
}
</style>
