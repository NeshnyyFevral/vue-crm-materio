<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Switch colors"
      desc="Use color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VSwitch> component for different colored inputs."
    >
      <VSwitch
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        v-model="switchColorValue"
        :color="GlobalColors[color]"
      >
        {{ GlobalColors[color] }}
      </VSwitch>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Switch sizes"
      desc="Use size={'small' | 'normal'} prop with <VSwitch> component for different sized inputs."
    >
      <VSwitch
        v-for="size in Object.keys(SwitchSize)"
        :key="size"
        v-model="switchSizeValue"
        :size="SwitchSize[size]"
      >
        {{ SwitchSize[size] }}
      </VSwitch>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Switch label placement"
      desc="Use label-place={'left' | 'right' | 'top' | 'bottom'} prop with <VCheckbox> component for different label placement."
    >
      <VSwitch
        v-for="place in Object.keys(SwitchLabelPlacement)"
        :key="place"
        v-model="switchLabelPlaceValue"
        :label-place="SwitchLabelPlacement[place]"
      >
        {{ SwitchLabelPlacement[place] }}
      </VSwitch>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Switch disabled"
      desc="Use disabled=true."
    >
      <VSwitch
        :model-value="false"
        disabled
      >
        Unchecked
      </VSwitch>

      <VSwitch
        :model-value="true"
        disabled
      >
        Checked
      </VSwitch>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import VSwitch from '@/components/form/VSwitch.vue';
import { GlobalColors } from '@/model/Colors';
import { SwitchLabelPlacement, SwitchSize } from '@/model/components/form/VSwitch';

const switchColorValue = ref<boolean>(false);
const switchSizeValue = ref<boolean>(false);
const switchLabelPlaceValue = ref<boolean>(false);
</script>
