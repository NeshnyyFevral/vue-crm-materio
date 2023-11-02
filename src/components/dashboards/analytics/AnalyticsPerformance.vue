<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Last 28 Days" />
      <VMenuItem name="Last Month" />
      <VMenuItem name="Last Year" />
    </template>

    <VOffset>
      <VTitle variant="heading6">
        Performance
      </VTitle>
    </VOffset>

    <VOffset>
      <RadarChart
        :data="data"
        :options="options"
      />
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js';
import { computed, ref } from 'vue';

import VCard from '@/components/basic/VCard.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTitle from '@/components/basic/VTitle.vue';
import RadarChart from '@/components/dashboards/RadarChart.vue';
import { GlobalColorMap } from '@/model/Colors';

Chart.register(...registerables);

const options = ref({
  responsive: true,
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
  interaction: {
    mode: 'index',
    intersect: false,
  },
  radius: 0,
  scales: {
    r: {
      ticks: {
        display: false,
      },
    },
  },
});

const incomeColor = computed(() => `${GlobalColorMap['700'].info}EE`);
const netWorth = computed(() => `${GlobalColorMap['700'].primary}EE`);

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
  ],
  datasets: [
    {
      label: 'Income',
      backgroundColor: incomeColor.value,
      borderColor: incomeColor.value,
      pointBackgroundColor: incomeColor.value,
      pointBorderColor: incomeColor.value,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: GlobalColorMap['700'].default,
      data: [10, 7, 8, 6, 8, 7],
    }, {
      label: 'Net WorthV1',
      backgroundColor: netWorth.value,
      borderColor: netWorth.value,
      pointBackgroundColor: netWorth.value,
      pointBorderColor: netWorth.value,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: GlobalColorMap['700'].default,
      data: [0, 8, 7, 8, 7, 8],
    }, {
      label: 'Net WorthV2',
      backgroundColor: netWorth.value,
      borderColor: netWorth.value,
      pointBackgroundColor: netWorth.value,
      pointBorderColor: netWorth.value,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: GlobalColorMap['700'].default,
      data: [8, 8, 0, 0, 0, 8],
    },
  ],
};
</script>
