<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Select variants and colors extends from <VTextField>"
      desc="Use variant={'outlined' | 'standard'}, color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'}"
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

    <VPreviewComponentCard
      title="Select error and disabled"
      desc="Use {disabled | error}=true."
      :direction="PreviewDirection.COLUMN"
    >
      <VSelect
        v-model="unclicableSelectValue"
        label="Disabled"
        :options="defaultOptions"
        disabled
      />

      <VSelect
        v-model="unclicableSelectValue"
        label="Error"
        :options="defaultOptions"
        error
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Select without label and with placeholder"
      desc="Use props «label» and «placeholder» (string type)."
      :direction="PreviewDirection.COLUMN"
    >
      <VSelect
        v-model="withoutLabelSelectValue"
        :options="defaultOptions"
      />

      <VSelect
        v-model="withoutLabelSelectValue"
        :options="defaultOptions"
        placeholder="Placeholder"
      />

      <VSelect
        v-model="withoutLabelSelectValue"
        :options="defaultOptions"
        label="Label"
      />

      <VSelect
        v-model="withoutLabelSelectValue"
        :options="defaultOptions"
        placeholder="Placeholder"
        label="Label"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Select with help text"
      desc="Use prop help-text."
      :direction="PreviewDirection.COLUMN"
    >
      <VSelect
        v-model="withHelpTextSelectValue"
        :options="defaultOptions"
        help-text="Some important text!"
        label="Label"
        placeholder="Placeholder"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Select multiply"
      desc="Use multiply prop to get multiple selection capability (MUST: use model-value must be an array of strings)."
      :direction="PreviewDirection.COLUMN"
    >
      <VSelect
        v-model="multiplySelectValue"
        :options="defaultOptions"
        label="Label"
        multiply
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
import type { SelectOptions } from '@/model/components/form/VSelect';
import type { TextFieldVariant } from '@/model/components/form/VTextField';

const unclicableSelectValue = ref<string>('');
const withoutLabelSelectValue = ref<string>('');
const withHelpTextSelectValue = ref<string>('');
const multiplySelectValue = ref<string[]>([]);
const variantSelectValue = ref<string>('outlined');
const colorSelectValue = ref<string>('primary');

const defaultOptions = ref<SelectOptions<string>[]>([
  { name: 'Option 1', value: '1' },
  { name: 'Option 2', value: '2' },
  { name: 'Option 3', value: '3' },
  { name: 'Option 4', value: '4' },
]);

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
