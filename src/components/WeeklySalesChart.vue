<template>
  <div :class="$style.root">
    <BarChart
      :chart-data="data"
      :options="options"
      :height="175"
    />
  </div>
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js';
import { ref } from 'vue';
import { BarChart } from 'vue-chart-3';

import { GlobalColorMap } from '@/model/Colors';
import { getRandom } from '@/model/tools/RandomTools';

Chart.register(...registerables);

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
        callback(value: any) {
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
      data: randomData(8 * 5),
      backgroundColor: GlobalColorMap['700'].primary,
      tension: 0.6,
    },
  ],
};
</script>

<style module lang="scss">
.root {}
</style>
