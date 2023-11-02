<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Last 28 Days" />
      <VMenuItem name="Last Month" />
      <VMenuItem name="Last Year" />
    </template>

    <VOffset>
      <VTitle variant="heading6">
        Sales by Countries
      </VTitle>
    </VOffset>

    <VOffset
      v-for="item in SalesByCountryData"
      :key="item.id"
    >
      <SalesByCountiesItem
        :type="item.type"
        :count="item.count"
        :desc="item.desc"
        :name="item.name"
        :value="item.value"
        :percentage="item.percentage"
      />
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import VCard from '@/components/basic/VCard.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTitle from '@/components/basic/VTitle.vue';
import SalesByCountiesItem from '@/components/dashboards/analytics/units/SalesByCountiesItem.vue';
import { StatisticBasicType } from '@/model/components/StatisticBasic';
import { getRandomId } from '@/model/tools/RandomTools';

interface SalesByCountry {
  id: string;
  name: string;
  value: string;
  percentage: string; // %
  type: StatisticBasicType;
  count: string;
  desc: string;
}

const SalesByCountryData: SalesByCountry[] = [{
  id: getRandomId(),
  name: 'USA',
  value: '$8,656k',
  percentage: '25.8',
  type: StatisticBasicType.UP,
  count: '894k',
  desc: 'Sales',
}, {
  id: getRandomId(),
  name: 'USA',
  value: '$8,656k',
  percentage: '25.8',
  type: StatisticBasicType.DOWN,
  count: '894k',
  desc: 'Sales',
},
];
</script>
