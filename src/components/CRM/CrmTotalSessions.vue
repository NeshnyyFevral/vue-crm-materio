<template>
  <VCard>
    <VOffset>
      <VText
        font-weight="600"
        variant="subtitle1"
      >
        Total Sales
      </VText>
    </VOffset>

    <VOffset :mb="20">
      <VTitle
        :color="GlobalColorMap['500'].default"
        variant="heading6"
      >
        $21,845
      </VTitle>
    </VOffset>

    <VOffset
      :mt="-40"
      :ml="-15"
    >
      <TotalSalesChart
        :options="options"
        :data="data"
      />
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import VCard from '@/components/basic/VCard.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import TotalSalesChart from '@/components/TotalSalesChart.vue';
import { GlobalColorMap } from '@/model/Colors';
import { getRandom } from '@/model/tools/RandomTools';

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
      suggestedMin: -20000,
      suggestedMax: 20000,
      ticks: {
        callback(value: any) {
          return '';
        },
      },
    },
  },
});

const randomData = (num: number) => {
  const arr: number[] = [];
  let cur = 0;
  for (let i = 0; i < num; i += 1) {
    cur = arr[i - 1] ?? 0;
    if (Math.floor(Math.random() * (1 + 1))) {
      arr[i] = cur + getRandom(500, 5000);
    } else {
      arr[i] = cur - getRandom(500, 5000);
    }
  }
  return arr;
};

const data = {
  labels: [
    'Jan', '', '',
    'Feb', '', '',
    'Mar', '', '',
    'Apr', '', '',
    'May', '', '',
    'Jun', '', '',
    'Jul', '', '',
    'Aug', '', '',
    'Sep', '', '',
    'Oct', '', '',
  ],
  datasets: [
    {
      data: randomData(8 * 5),
      borderColor: GlobalColorMap['700'].success,
      backgroundColor: GlobalColorMap['700'].success,
      tension: 0.6,
    },
  ],
};
</script>
