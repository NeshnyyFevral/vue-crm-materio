<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard title="Radio colors">
      <VRadio
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        v-model="colorRadioValue"
        :value="GlobalColors[color]"
        name="color"
        :label="GlobalColors[color]"
        :color="GlobalColors[color]"
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

const colorRadioValue = ref<string>('');
</script>
