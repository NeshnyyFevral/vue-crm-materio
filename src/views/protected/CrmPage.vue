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
import CrmActivityTimeline from '@/components/dashboards/crm/CrmActivityTimeline.vue';
import CrmJoinGrowthAndProject from '@/components/dashboards/crm/CrmJoinGrowthAndProject.vue';
import CrmMeeting from '@/components/dashboards/crm/CrmMeeting.vue';
import CrmPlains from '@/components/dashboards/crm/CrmPlains.vue';
import CrmRatings from '@/components/dashboards/crm/CrmRatings.vue';
import CrmRevenueReport from '@/components/dashboards/crm/CrmRevenueReport.vue';
import CrmSalesOverview from '@/components/dashboards/crm/CrmSalesOverview.vue';
import CrmSessions from '@/components/dashboards/crm/CrmSessions.vue';
import CrmTotalSales from '@/components/dashboards/crm/CrmTotalSales.vue';
import CrmTransactions from '@/components/dashboards/crm/CrmTransactions.vue';
import CrmUpgrade from '@/components/dashboards/crm/CrmUpgrade.vue';
import CrmWeeklySales from '@/components/dashboards/crm/CrmWeeklySales.vue';
import { getRandomString } from '@/model/tools/RandomTools';

interface ComponentsData {
  id: string;
  component: Component;
  class: string;
}

const components = markRaw<ComponentsData[]>([
  {
    id: getRandomString(),
    component: CrmRatings,
    class: 'stats',
  }, {
    id: getRandomString(),
    component: CrmSessions,
    class: 'stats',
  }, {
    id: getRandomString(),
    component: CrmTransactions,
    class: 'transactions',
  }, {
    id: getRandomString(),
    component: CrmTotalSales,
    class: 'totalSales',
  }, {
    id: getRandomString(),
    component: CrmRevenueReport,
    class: 'revenueReport',
  }, {
    id: getRandomString(),
    component: CrmSalesOverview,
    class: 'salesOverview',
  }, {
    id: getRandomString(),
    component: CrmActivityTimeline,
    class: 'activity',
  }, {
    id: getRandomString(),
    component: CrmWeeklySales,
    class: 'weeklySales',
  }, {
    id: getRandomString(),
    component: CrmJoinGrowthAndProject,
    class: 'joinGrowthProject',
  }, {
    id: getRandomString(),
    component: CrmUpgrade,
    class: 'upgrade',
  }, {
    id: getRandomString(),
    component: CrmMeeting,
    class: 'meeting',
  }, {
    id: getRandomString(),
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

  @media screen and (max-width: 1100px) {
    width: calc(50% - 20px);
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    height: auto;
  }
}

.transactions {
  width: calc(50% - $offsetCard);
  display: flex;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: auto;
  }
}

.totalSales,
.revenueReport {
  width: 25%;
  height: $heightCard;

  @media screen and (max-width: 1100px) {
    width: calc(50% - 20px);
  }

  @media screen and (max-width: 1100px) {
    width: calc(50% - 20px);
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    height: auto;
  }
}

.salesOverview {
  width: calc(50% - $offsetCard);
  height: $heightCard;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: auto;
  }
}

.activity {
  height: $heightCard;
  width: calc(50% + $offsetCard / 3);

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: auto;
  }
}

.weeklySales {
  height: $heightCard;
  width: calc(35% - $offsetCard);

  @media screen and (max-width: 1100px) {
    width: calc(60% - 20px);
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    height: auto;
  }
}

.joinGrowthProject {
  width: calc(15% - $offsetCard / 3);
  height: $heightCard;

  @media screen and (max-width: 1100px) {
    width: calc(40% - 20px);
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    height: auto;
  }
}

.upgrade,
.plains {
  width: calc(33.333% - 20px);

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: auto;
  }
}

.meeting {
  width: calc(33.333% - 20px);

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: auto;
  }
}
</style>
