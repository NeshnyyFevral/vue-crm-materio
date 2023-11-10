<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Last 28 Days" />
      <VMenuItem name="Last Month" />
      <VMenuItem name="Last Year" />
    </template>

    <VOffset :mb="20">
      <VTitle variant="heading6">
        Sales by Countries
      </VTitle>
    </VOffset>

    <VOffset
      v-for="item in SalesByCountryData"
      :key="item.id"
      :mb="16.5"
    >
      <SalesByCountiesItem
        :type="item.type"
        :count="item.count"
        :desc="item.desc"
        :name="item.name"
        :value="item.value"
        :percentage="item.percentage"
        :color="item.color"
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
import { GlobalColors } from '@/model/Colors';
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
  color: GlobalColors;
}

const SalesByCountryData: SalesByCountry[] = [{
  id: getRandomId(),
  name: 'USA',
  value: '$8,656k',
  percentage: '25.8%',
  type: StatisticBasicType.UP,
  count: '894k',
  desc: 'Sales',
  color: GlobalColors.SUCCESS,
}, {
  id: getRandomId(),
  name: 'UK',
  value: '$2,415k',
  percentage: '6.2%',
  type: StatisticBasicType.DOWN,
  count: '645k',
  desc: 'Sales',
  color: GlobalColors.ERROR,
}, {
  id: getRandomId(),
  name: 'India',
  value: '$865k',
  percentage: '12.4%',
  type: StatisticBasicType.UP,
  count: '148k',
  desc: 'Sales',
  color: GlobalColors.WARNING,
}, {
  id: getRandomId(),
  name: 'Japan',
  value: '$745k',
  percentage: '11.9%',
  type: StatisticBasicType.DOWN,
  count: '86k',
  desc: 'Sales',
  color: GlobalColors.DEFAULT,
}, {
  id: getRandomId(),
  name: 'Korea',
  value: '$45k',
  percentage: '16.2%',
  type: StatisticBasicType.DOWN,
  count: '42k',
  desc: 'Sales',
  color: GlobalColors.ERROR,
},
];
</script>
