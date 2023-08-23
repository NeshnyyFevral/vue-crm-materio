<template>
  <div :class="$style.root">
    <VPreviewComponentCard
      title="Input variant"
      desc="Use variant={'outlined' | 'filled' | 'standard'}"
    >
      <VTextField
        v-for="variant in Object.keys(TextFieldVariant)"
        :key="variant"
        v-model="inputVariantValue[TextFieldVariant[variant]]"
        :variant="TextFieldVariant[variant]"
      />
    </VPreviewComponentCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VTextField from '@/components/form/VTextField.vue';
import { TextFieldVariant } from '@/model/components/form/VTextField';

const inputVariantValue = ref<any>({
  outlined: '',
  standard: '',
});
</script>

<style module lang="scss">
@import "@/scss/mixins/mixins";

.root {
  @include grid;
}
</style>
