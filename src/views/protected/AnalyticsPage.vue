<template>
  <div :class="$style.root">
    <VOffset
      v-for="component in components"
      :key="component.id"
      :ml="20"
      :mt="20"
      :class="$style[component.class]"
    >
      <component
        :is="component.component"
        :overflow-x="component.class === 'userTable'"
      />
    </VOffset>
  </div>
</template>

<script setup lang="ts">
import { type Component, markRaw } from 'vue';

import VOffset from '@/components/basic/VOffset.vue';
import AnalyticsCongratulations from '@/components/dashboards/analytics/AnalyticsCongratulations.vue';
import AnalyticsDepositWithdraw from '@/components/dashboards/analytics/AnalyticsDepositWithdraw.vue';
import AnalyticsJoinProfProj from '@/components/dashboards/analytics/AnalyticsJoinProfProj.vue';
import AnalyticsJoinProfSess from '@/components/dashboards/analytics/AnalyticsJoinProfSess.vue';
import AnalyticsPerformance from '@/components/dashboards/analytics/AnalyticsPerformance.vue';
import AnalyticsSalesByCountries from '@/components/dashboards/analytics/AnalyticsSalesByCountries.vue';
import AnalyticsTotalEarning from '@/components/dashboards/analytics/AnalyticsTotalEarning.vue';
import AnalyticsTransactions from '@/components/dashboards/analytics/AnalyticsTransactions.vue';
import AnalyticsUserTable from '@/components/dashboards/analytics/AnalyticsUserTable.vue';
import AnalyticsWeeklyOverview from '@/components/dashboards/analytics/AnalyticsWeeklyOverview.vue';
import { getRandomId } from '@/model/tools/RandomTools';

interface ComponentsData {
  id: string;
  component: Component;
  class: string;
}

const components = markRaw<ComponentsData[]>([{
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
}, {
  id: getRandomId(),
  component: AnalyticsJoinProfProj,
  class: 'join',
}, {
  id: getRandomId(),
  component: AnalyticsJoinProfSess,
  class: 'join',
}, {
  id: getRandomId(),
  component: AnalyticsPerformance,
  class: 'performance',
}, {
  id: getRandomId(),
  component: AnalyticsDepositWithdraw,
  class: 'depositWithdraw',
}, {
  id: getRandomId(),
  component: AnalyticsSalesByCountries,
  class: 'salesByCountries',
}, {
  id: getRandomId(),
  component: AnalyticsUserTable,
  class: 'userTable',
},
]);
</script>

<style module lang="scss">
$heightCard: 375px;
$offsetCard: 20px;

.root {
  display: flex;
  flex-flow: wrap;
  align-items: flex-end;
}

.congratulations,
.performance,
.salesByCountries {
  width: 33%;

  @media screen and (max-width: 950px) {
    width: calc(100% - $offsetCard);
  }
}

.transactions,
.depositWithdraw,
.userTable {
  width: calc(67% - $offsetCard * 2);

  @media screen and (max-width: 950px) {
    width: calc(100% - $offsetCard);
  }
}

.earning,
.weekly {
  width: 33%;

  @media screen and (max-width: 1125px) {
    width: calc(50% - $offsetCard)
  }

  @media screen and (max-width: 760px) {
    width: calc(100% - $offsetCard);
  }
}

.join {
  width: calc(34% / 2  - $offsetCard * 2);

  @media screen and (max-width: 1125px) {
    width: calc(50% - $offsetCard);
  }

  @media screen and (max-width: 580px) {
    width: calc(100% - $offsetCard);
  }
}
</style>
