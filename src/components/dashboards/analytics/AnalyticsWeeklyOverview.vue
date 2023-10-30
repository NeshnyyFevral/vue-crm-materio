<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Refresh" />
      <VMenuItem name="Update" />
      <VMenuItem name="Delete" />
    </template>

    <VOffset :mb="10">
      <VTitle variant="heading6">
        Weekly Overview
      </VTitle>
    </VOffset>

    <VOffset :mb="20">
      <WeeklySalesChart
        :options="options"
        :data="data"
      />
    </VOffset>

    <VOffset :mb="30">
      <VFlex :align="FlexAlign.CENTER">
        <VOffset :mr="20">
          <VTitle
            variant="heading5"
            font-weight="600"
          >
            45%
          </VTitle>
        </VOffset>

        <VOffset>
          <VText
            variant="body2"
            :color="GlobalColorMap['400'].default"
          >
            Your sales performance is 45% 😎 better compared to last month
          </VText>
        </VOffset>
      </VFlex>
    </VOffset>

    <VOffset>
      <VButton max-width>
        Details
      </VButton>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import VButton from '@/components/basic/VButton.vue';
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import WeeklySalesChart from '@/components/dashboards/WeeklySalesChart.vue';
import { GlobalColorMap } from '@/model/Colors';
import { FlexAlign } from '@/model/components/basic/VFlex';
import { getRandom } from '@/model/tools/RandomTools';

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
        display: true,
        color: 'transparent',
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: true,
      },
      ticks: {
        callback(value: any) {
          return value;
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
    const currentRandomValue = getRandom(2000, 2500);

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
    '', '', '',
    '', '', '',
  ],
  datasets: [
    {
      data: randomData(12),
      backgroundColor: GlobalColorMap['700'].primary,
      borderWidth: 1,
      borderRadius: 12,
    },
  ],
};
</script>

<style module lang="scss">

</style>
