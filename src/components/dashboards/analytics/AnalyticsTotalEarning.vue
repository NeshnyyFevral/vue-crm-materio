<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Last 28 Days" />
      <VMenuItem name="Last Month" />
      <VMenuItem name="Last Year" />
    </template>

    <VOffset :mb="30">
      <VTitle variant="heading6">
        Total Earning
      </VTitle>
    </VOffset>

    <VOffset :mb="10">
      <StatisticBase :icon="ArrowIcon">
        <template #value>
          <VTitle
            font-weight="600"
            variant="heading4"
          >
            $24,895
          </VTitle>
        </template>
        <template #suffix="{ color }">
          <VText
            :color="color"
            font-weight="600"
            variant="body2"
          >
            10%
          </VText>
        </template>
      </StatisticBase>
    </VOffset>

    <VOffset :mb="30">
      <VText
        variant="caption"
        :color="GlobalColorMap['400'].default"
      >
        Compared to $84,325 last year
      </VText>
    </VOffset>

    <VOffset
      v-for="ear in earningData"
      :key="ear.id"
      :mb="20"
    >
      <TotalEarning
        :title="ear.title"
        :value="ear.value"
        :desc="ear.desc"
        :percentage="ear.percentage"
        :color="ear.color"
      >
        <img
          :src="getPathImg(`images/analytics/${ear.avatar}`)"
          :alt="`avatar-${ear.avatar}`"
        >
      </TotalEarning>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import ArrowIcon from '@public/assets/icons/triangle.svg';

import VCard from '@/components/basic/VCard.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import TotalEarning from '@/components/dashboards/analytics/units/TotalEarning.vue';
import StatisticBase from '@/components/dashboards/StatisticBase.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { getPathImg } from '@/model/tools/PathTools';
import { getRandomId } from '@/model/tools/RandomTools';

interface Earning {
  id: string;
  title: string;
  value: string;
  desc: string;
  percentage: string;
  avatar: string;
  color: GlobalColors;
}

const earningData: Earning[] = [{
  id: getRandomId(),
  title: 'Zipcar',
  value: '$24,895.65',
  desc: 'Vuejs, React & HTML',
  percentage: '75',
  avatar: 'zipcar.png',
  color: GlobalColors.PRIMARY,
}, {
  id: getRandomId(),
  title: 'Bitbank',
  value: '$8,650.20',
  desc: 'Sketch, Figma & XD',
  percentage: '45',
  avatar: 'bitbank.png',
  color: GlobalColors.INFO,
}, {
  id: getRandomId(),
  title: 'Aviato',
  value: '$1,245.80',
  desc: 'HTML & Angular',
  percentage: '15',
  avatar: 'aviato.png',
  color: GlobalColors.DEFAULT,
},
];
</script>
