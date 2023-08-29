<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Select variants"
      desc="Use variant={'outlined' | 'standard'}"
      :direction="PreviewDirection.COLUMN"
    >
      <VSelect
        v-model="variantSelectValue"
        :variant="variantSelectValue as TextFieldVariant"
        label="Variant"
        :options="variantOptions"
      />

      <VSelect
        v-model="colorSelectValue"
        :color="colorSelectValue as GlobalColors"
        label="Color"
        :options="colorOptions"
      />
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import VSelect from '@/components/form/VSelect.vue';
import type { GlobalColors } from '@/model/Colors';
import { PreviewDirection } from '@/model/components/basic/VPreviewComponentCard';
import { type SelectOptions } from '@/model/components/form/VSelect';
import type { TextFieldVariant } from '@/model/components/form/VTextField';

const variantSelectValue = ref<string>('outlined');
const colorSelectValue = ref<string>('primary');

const variantOptions = ref<SelectOptions<string>[]>([
  { name: 'Outlined', value: 'outlined' },
  { name: 'Standard', value: 'standard' },
]);

const colorOptions = ref<SelectOptions<string>[]>([
  { name: 'Primary', value: 'primary' },
  { name: 'Success', value: 'success' },
  { name: 'Info', value: 'info' },
  { name: 'Warning', value: 'warning' },
  { name: 'Error', value: 'error' },
  { name: 'Default', value: 'default' },
]);
</script>

<style module lang="scss">
</style>
