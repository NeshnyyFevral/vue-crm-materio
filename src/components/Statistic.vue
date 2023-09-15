<template>
  <div :class="$style.root">
    <h5 :class="$style.value">
      <slot />
    </h5>
    <p :class="$style.modify">
      {{ displayModify }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { GlobalColors } from '@/model/Colors';
import { StatisticMapColor, StatisticType } from '@/model/components/Statistic';

interface PropsType {
  modify?: number;
  type?: StatisticType;
  suffix?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  modify: 0,
  type: StatisticType.UP,
  suffix: '%',
});

const displayModify = computed<string>(() => {
  const prefix = props.type === StatisticType.UP ? '+' : '-';

  return prefix + props.modify + props.suffix;
});

const colorStatistic = computed(() => {
  const color = (props.type === StatisticType.UP ? GlobalColors.SUCCESS : GlobalColors.ERROR);
  return StatisticMapColor[color];
});
</script>

<style module lang="scss">
@import "@/scss/mixins/typography";

.root {
  --statistic-color: v-bind(colorStatistic);

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.value {
  @include heading5;
}

.modify {
  @include caption;

  color: var(--statistic-color);
}
</style>
