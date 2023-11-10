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
import CrmJoinGrowthProj from '@/components/dashboards/crm/CrmJoinGrowthProj.vue';
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
import { getRandomId } from '@/model/tools/RandomTools';

interface ComponentsData {
  id: string;
  component: Component;
  class: string;
}

const components = markRaw<ComponentsData[]>([
  {
    id: getRandomId(),
    component: CrmRatings,
    class: 'stats',
  }, {
    id: getRandomId(),
    component: CrmSessions,
    class: 'stats',
  }, {
    id: getRandomId(),
    component: CrmTransactions,
    class: 'transactions',
  }, {
    id: getRandomId(),
    component: CrmTotalSales,
    class: 'totalSales',
  }, {
    id: getRandomId(),
    component: CrmRevenueReport,
    class: 'revenueReport',
  }, {
    id: getRandomId(),
    component: CrmSalesOverview,
    class: 'salesOverview',
  }, {
    id: getRandomId(),
    component: CrmActivityTimeline,
    class: 'activity',
  }, {
    id: getRandomId(),
    component: CrmWeeklySales,
    class: 'weeklySales',
  }, {
    id: getRandomId(),
    component: CrmJoinGrowthProj,
    class: 'joinGrowthProject',
  }, {
    id: getRandomId(),
    component: CrmUpgrade,
    class: 'upgrade',
  }, {
    id: getRandomId(),
    component: CrmMeeting,
    class: 'meeting',
  }, {
    id: getRandomId(),
    component: CrmPlains,
    class: 'plains',
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

.stats {
  width: 25%;
  display: flex;
  height: 80%;

  @media screen and (max-width: 1100px) {
    width: calc(50% - $offsetCard);
  }

  @media screen and (max-width: 550px) {
    width: calc(100% - $offsetCard);
    height: auto;
  }
}

.transactions {
  width: calc(50% - $offsetCard * 3);
  display: flex;

  @media screen and (max-width: 1100px) {
    width: calc(100% - $offsetCard);
    height: auto;
  }
}

.totalSales,
.revenueReport {
  width: 25%;
  height: $heightCard;

  @media screen and (max-width: 1100px) {
    width: calc(50% - $offsetCard);
  }

  @media screen and (max-width: 1100px) {
    width: calc(50% - $offsetCard);
  }

  @media screen and (max-width: 550px) {
    width: calc(100% - $offsetCard);
    height: auto;
  }
}

.salesOverview {
  width: calc(50% - $offsetCard * 3);
  height: $heightCard;

  @media screen and (max-width: 1100px) {
    width: calc(100% - $offsetCard);
    height: auto;
  }
}

.activity {
  height: $heightCard;
  width: calc(50% + $offsetCard);

  @media screen and (max-width: 1100px) {
    width: calc(100% - $offsetCard);
    height: auto;
  }
}

.weeklySales {
  height: $heightCard;
  width: calc(35% - $offsetCard * 3);

  @media screen and (max-width: 1100px) {
    width: calc(60% - $offsetCard);
  }

  @media screen and (max-width: 550px) {
    width: calc(100% - $offsetCard);
    height: auto;
  }
}

.joinGrowthProject {
  width: calc(15% - $offsetCard);
  height: $heightCard;

  @media screen and (max-width: 1100px) {
    width: calc(40% - $offsetCard);
  }

  @media screen and (max-width: 550px) {
    width: calc(100% - $offsetCard);
    height: auto;
  }
}

.upgrade,
.plains {
  width: calc(33.333% - $offsetCard);

  @media screen and (max-width: 1100px) {
    width: calc(100% - $offsetCard);
    height: auto;
  }
}

.meeting {
  width: calc(33.333% - $offsetCard);

  @media screen and (max-width: 1100px) {
    width: calc(100% - $offsetCard);
    height: auto;
  }
}
</style>
