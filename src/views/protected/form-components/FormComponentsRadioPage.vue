<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Radio colors"
      desc="se color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VRadio> component for different colored inputs."
    >
      <VRadio
        v-for="color in Object.values(GlobalColors)"
        :key="color"
        v-model="colorRadioValue"
        :value="color"
        name="color"
        :label="color"
        :color="color"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Radio sizes"
      desc="Use size={'small' | 'normal'} prop with <VRadio> component for different sized inputs."
    >
      <VRadio
        v-for="size in Object.values(RadioSize)"
        :key="size"
        v-model="sizeRadioValue"
        :value="size"
        name="size"
        :label="size"
        :size="size"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Radio label placement"
      desc="Use label-place={'left' | 'right' | 'top' | 'bottom'} prop with <VRadio> component for different label placement."
    >
      <VRadio
        v-for="place in Object.values(RadioLabelPlacement)"
        :key="place"
        v-model="labelPlacementRadioValue"
        :value="place"
        name="labelPlacement"
        :label="place"
        :label-place="place"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Radio disabled"
      desc="Use disabled=true."
    >
      <VRadio
        v-model="disabledRadioValue"
        value="Unchecked"
        name="size"
        label="Unchecked"
        disabled
      />

      <VRadio
        v-model="disabledRadioValue"
        value="Checked"
        name="size"
        label="Checked"
        disabled
      />
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import VRadio from '@/components/form/VRadio.vue';
import { GlobalColors } from '@/model/Colors';
import { RadioLabelPlacement, RadioSize } from '@/model/components/form/VRadio';

const colorRadioValue = ref<string>('');
const sizeRadioValue = ref<string>('');
const labelPlacementRadioValue = ref<string>('');
const disabledRadioValue = ref<string>('Checked');
</script>
