<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Last 28 Days" />
      <VMenuItem name="Last Month" />
      <VMenuItem name="Last Year" />
    </template>

    <VOffset>
      <VOffset :mb="10">
        <VTitle variant="heading6">
          Weekly Sales
        </VTitle>
      </VOffset>

      <VOffset>
        <VText
          variant="body2"
          font-weight="400"
          :color="GlobalColorMap['400'].default"
        >
          Total 85.4k Sales
        </VText>
      </VOffset>

      <VOffset :mb="25">
        <WeeklySalesChart
          :options="options"
          :data="data"
        />
      </VOffset>

      <VFlex
        :direction-change-trigger="breakpoint"
        :justify-content="FlexJustify.SPACE_AROUND"
      >
        <VOffset>
          <StatisticIcon
            reverse
            title="Sales"
            value="34.6k"
            :icon="ArrowUpIcon"
            :variant="StatisticIconVariant.LIGHT"
          />
        </VOffset>

        <VOffset>
          <StatisticIcon
            reverse
            title="Total Profit"
            value="$482k"
            :icon="DollarIcon"
            :variant="StatisticIconVariant.LIGHT"
            :color="GlobalColors.SUCCESS"
          />
        </VOffset>
      </VFlex>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import DollarIcon from '@/assets/icons/dashboards/dollar.svg';
import ArrowUpIcon from '@/assets/icons/dashboards/lightningUp.svg';
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import StatisticIcon from '@/components/dashboards/StatisticIcon.vue';
import WeeklySalesChart from '@/components/dashboards/WeeklySalesChart.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { FlexJustify } from '@/model/components/basic/VFlex';
import { StatisticIconVariant } from '@/model/components/StatisticIcon';
import { getRandom } from '@/model/tools/RandomTools';

const breakpoint = 550;

const options = ref({
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        usePointStyle: true,
        font: {
          size: 0,
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        color: 'transparent',
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        callback() {
          return '';
        },
      },
    },
  },
  backgroundColor: GlobalColorMap['700'].primary,
});

const randomData = (num: number) => {
  const arr: number[] = [];
  let cur = 0;
  for (let i = 0; i < num; i += 1) {
    cur = arr[i - 1] ?? 0;
    const currentRandomValue = getRandom(500, 2500);

    if (Math.floor(Math.random() * (1 + 1))) {
      arr[i] = cur + currentRandomValue;
    } else {
      arr[i] = cur - currentRandomValue < 0 ? cur + currentRandomValue : cur - currentRandomValue;
    }
  }
  return arr;
};

const data = {
  labels: [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec',
  ],
  datasets: [
    {
      data: randomData(12),
      backgroundColor: GlobalColorMap['700'].primary,
      tension: 0.6,
    },
  ],
};
</script>
