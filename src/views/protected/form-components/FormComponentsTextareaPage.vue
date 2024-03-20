<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Basic textarea"
      desc="Use multiline prop with <VTextField>"
    >
      <VTextField
        v-model="basicTextareaValue"
        multiline
        max-width
        label="Basic"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Multiline textarea"
      desc="Use rows prop with <VTextField>, that to control visible rows."
    >
      <VTextField
        v-model="multilineTextareaValue"
        multiline
        max-width
        label="2 rows"
        rows="2"
      />

      <VTextField
        v-model="multilineTextareaValue"
        multiline
        max-width
        label="3 rows"
        rows="3"
      />

      <VTextField
        v-model="multilineTextareaValue"
        multiline
        max-width
        label="5 rows"
        rows="5"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Textarea variants"
      desc="Use variant={'standard' | 'outlined'}"
    >
      <VTextField
        v-for="variant in Object.values(TextFieldVariant)"
        :key="variant"
        v-model="variantTextareaValue"
        multiline
        max-width
        :label="variant"
        :variant="variant"
        rows="3"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Error with textarea"
      desc="Use error prop."
    >
      <VTextField
        v-model="errorTextareaValue"
        multiline
        max-width
        label="Error"
        error
        rows="2"
      />
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import VTextField from '@/components/form/VTextField.vue';
import { TextFieldVariant } from '@/model/components/form/VTextField';

const basicTextareaValue = ref<string>('');
const multilineTextareaValue = ref<string>('');
const variantTextareaValue = ref<string>('');
const errorTextareaValue = ref<string>('');
</script>
