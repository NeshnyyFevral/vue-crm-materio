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
import CrmActivityTimeline from '@/components/CRM/CrmActivityTimeline.vue';
import CrmJoinGrowthAndProject from '@/components/CRM/CrmJoinGrowthAndProject.vue';
import CrmMeeting from '@/components/CRM/CrmMeeting.vue';
import CrmPlains from '@/components/CRM/CrmPlains.vue';
import CrmRatings from '@/components/CRM/CrmRatings.vue';
import CrmRevenueReport from '@/components/CRM/CrmRevenueReport.vue';
import CrmSalesOverview from '@/components/CRM/CrmSalesOverview.vue';
import CrmSessions from '@/components/CRM/CrmSessions.vue';
import CrmTotalSessions from '@/components/CRM/CrmTotalSessions.vue';
import CrmTransactions from '@/components/CRM/CrmTransactions.vue';
import CrmUpgrade from '@/components/CRM/CrmUpgrade.vue';
import CrmWeeklySales from '@/components/CRM/CrmWeeklySales.vue';

interface ComponentsData {
  id: string;
  component: Component;
  class: string;
}

const components = markRaw<ComponentsData[]>([
  {
    id: Math.random().toString(16).substring(3, 8),
    component: CrmRatings,
    class: 'stats',
  }, {
    id: Math.random().toString(16).substring(3, 8),
    component: CrmSessions,
    class: 'stats',
  }, {
    id: Math.random().toString(16).substring(3, 8),
    component: CrmTransactions,
    class: 'transactions',
  }, {
    id: Math.random().toString(16).substring(3, 8),
    component: CrmTotalSessions,
    class: 'totalSales',
  }, {
    id: Math.random().toString(16).substring(3, 8),
    component: CrmRevenueReport,
    class: 'revenueReport',
  }, {
    id: Math.random().toString(16).substring(3, 8),
    component: CrmSalesOverview,
    class: 'salesOverview',
  }, {
    id: Math.random().toString(16).substring(3, 8),
    component: CrmActivityTimeline,
    class: 'activity',
  }, {
    id: Math.random().toString(16).substring(3, 8),
    component: CrmWeeklySales,
    class: 'weeklySales',
  }, {
    id: Math.random().toString(16).substring(3, 8),
    component: CrmJoinGrowthAndProject,
    class: 'joinGrowthProject',
  }, {
    id: Math.random().toString(16).substring(3, 8),
    component: CrmUpgrade,
    class: 'upgrade',
  }, {
    id: Math.random().toString(16).substring(3, 8),
    component: CrmMeeting,
    class: 'meeting',
  }, {
    id: Math.random().toString(16).substring(3, 8),
    component: CrmPlains,
    class: 'plains',
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

.stats {
  width: 25%;
  display: flex;
  height: 80%;
}

.transactions {
  width: calc(50% - $offsetCard);
  display: flex;
}

.totalSales,
.revenueReport {
  width: 25%;
  height: $heightCard;
}

.salesOverview {
  width: calc(50% - $offsetCard);
  height: $heightCard;
}

.activity {
  height: $heightCard;
  width: calc(50% + $offsetCard / 3);
}

.weeklySales {
  height: $heightCard;
  width: calc(35% - $offsetCard);
}

.joinGrowthProject {
  width: calc(15% - $offsetCard / 3);
  height: $heightCard;
}

.upgrade {
  width: calc(33.333%);
  min-height: $heightCard;
}

.meeting {
  width: calc(33.333% - 60px);
  min-height: $heightCard;
}

.plains {
  width: calc(33.333%);
  height: $heightCard;
}
</style>
