<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Checkbox colors"
      desc="Use color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VCheckbox> component for different colored inputs."
    >
      <VCheckbox
        v-for="color in Object.values(GlobalColors)"
        :key="color"
        v-model="checkboxColorValue"
        :color="color"
      >
        {{ color }}
      </VCheckbox>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Checkbox sizes"
      desc="Use size={'small' | 'normal'} prop with <VCheckbox> component for different sized inputs."
    >
      <VCheckbox
        v-for="size in Object.values(CheckboxSize)"
        :key="size"
        v-model="checkboxSizeValue"
        :size="size"
      >
        {{ size }}
      </VCheckbox>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Checkbox label placement"
      desc="Use label-place={'left' | 'right' | 'top' | 'bottom'} prop with <VCheckbox> component for different label placement."
    >
      <VCheckbox
        v-for="place in Object.values(CheckboxLabelPlacement)"
        :key="place"
        v-model="checkboxLabelPlaceValue"
        :label-place="place"
      >
        {{ place }}
      </VCheckbox>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Checkbox disabled"
      desc="Use disabled=true."
    >
      <VCheckbox
        :model-value="false"
        disabled
      >
        Unchecked
      </VCheckbox>

      <VCheckbox
        :model-value="true"
        disabled
      >
        Checked
      </VCheckbox>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import VCheckbox from '@/components/form/VCheckbox.vue';
import { GlobalColors } from '@/model/Colors';
import { CheckboxLabelPlacement, CheckboxSize } from '@/model/components/form/VCheckbox';

const checkboxColorValue = ref<boolean>(false);
const checkboxSizeValue = ref<boolean>(false);
const checkboxLabelPlaceValue = ref<boolean>(false);
</script>
