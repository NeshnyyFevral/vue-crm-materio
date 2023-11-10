<template>
  <VFlex
    :align="flexAlign"
    :class="$style.root"
  >
    <slot name="value" />
    <VOffset
      v-if="props.icon"
      :class="[
        $style.arrow,
        type === StatisticBasicType.DOWN && $style.reverse,
      ]"
    >
      <component :is="props.icon" />
    </VOffset>
    <slot
      name="suffix"
      :prefix="prefix"
      :color="colorStatistic"
    />
  </VFlex>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import { GlobalColorMap } from '@/model/Colors';
import { FlexAlign } from '@/model/components/basic/VFlex';
import { StatisticBasicType } from '@/model/components/StatisticBasic';

interface PropsType {
  type?: StatisticBasicType;
  icon?: any;
}

const props = withDefaults(defineProps<PropsType>(), {
  type: StatisticBasicType.UP,
  icon: undefined,
});

const flexAlign = computed(() => (props.icon ? FlexAlign.CENTER : FlexAlign.START));
const prefix = computed(() => (props.type === StatisticBasicType.UP ? '+' : '-'));

const colorStatistic = computed(
  () => (props.type === StatisticBasicType.UP
    ? GlobalColorMap['700'].success
    : GlobalColorMap['700'].error
  ),
);
</script>

<style module lang="scss">
.root {
  --color-statistic: v-bind(colorStatistic);

  flex-wrap: wrap;
}

.arrow {
  svg {
    width: 30px;
    height: 30px;

    path {
      fill: var(--color-statistic);
    }
  }

  &.reverse {
    transform: rotateX(180deg);
  }
}
</style>
