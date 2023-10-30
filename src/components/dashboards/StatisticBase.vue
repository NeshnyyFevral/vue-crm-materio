<template>
  <div :class="$style.root">
    <VTitle :variant="props.variant">
      <slot />
    </VTitle>
    <VText
      :color="colorStatistic"
      variant="caption"
    >
      {{ displayModify }}
    </VText>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import { GlobalColorMap } from '@/model/Colors';
import type { TitleVariant } from '@/model/components/basic/VTitle';
import { StatisticBasicType } from '@/model/components/StatisticBasic';

interface PropsType {
  modify?: number;
  type?: StatisticBasicType;
  suffix?: string;
  variant?: TitleVariant;
}

const props = withDefaults(defineProps<PropsType>(), {
  modify: 0,
  type: StatisticBasicType.UP,
  suffix: '%',
  variant: 'heading5',
});

const displayModify = computed<string>(() => {
  const prefix = props.type === StatisticBasicType.UP ? '+' : '-';

  return prefix + props.modify + props.suffix;
});

const colorStatistic = computed(
  () => (props.type === StatisticBasicType.UP
    ? GlobalColorMap['700'].success
    : GlobalColorMap['700'].error
  ),
);
</script>

<style module lang="scss">
.root {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
