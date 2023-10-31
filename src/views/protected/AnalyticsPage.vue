<template>
  <div :class="$style.root">
    <VOffset
      v-for="component in components"
      :key="component.id"
      :ml="20"
      :mt="20"
      :class="$style[component.class]"
    >
      <component :is="component.component" />
    </VOffset>
  </div>
</template>

<script setup lang="ts">
import { type Component, markRaw } from 'vue';

import VOffset from '@/components/basic/VOffset.vue';
import AnalyticsCongratulations from '@/components/dashboards/analytics/AnalyticsCongratulations.vue';
import AnalyticsTotalEarning from '@/components/dashboards/analytics/AnalyticsTotalEarning.vue';
import AnalyticsTransactions from '@/components/dashboards/analytics/AnalyticsTransactions.vue';
import AnalyticsWeeklyOverview from '@/components/dashboards/analytics/AnalyticsWeeklyOverview.vue';
import { getRandomId } from '@/model/tools/RandomTools';

interface ComponentsData {
  id: string;
  component: Component;
  class: string;
}

const components = markRaw<ComponentsData[]>([
  {
    id: getRandomId(),
    component: AnalyticsCongratulations,
    class: 'congratulations',
  }, {
    id: getRandomId(),
    component: AnalyticsTransactions,
    class: 'transactions',
  }, {
    id: getRandomId(),
    component: AnalyticsWeeklyOverview,
    class: 'weekly',
  }, {
    id: getRandomId(),
    component: AnalyticsTotalEarning,
    class: 'earning',
  },
]);
</script>

<style module lang="scss">
$heightCard: 375px;
$offsetCard: 60px;

.root {
  display: flex;
  flex-flow: wrap;
  align-items: flex-end;
}

.congratulations,
.weekly {
  width: 33%;
}

.transactions {
  width: calc(67% - $offsetCard);
}

.earning {
  width: calc(33%);
}

</style>
