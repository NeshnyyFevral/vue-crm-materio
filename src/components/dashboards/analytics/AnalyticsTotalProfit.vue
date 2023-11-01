<template>
  <VCard>
    <VOffset>
      <VTitle variant="heading6">
        $86.4k
      </VTitle>

      <VOffset
        :ml="-27"
        :mt="-30"
      >
        <TotalSalesChart
          :options="options"
          :data="data"
          :height="300"
        />
      </VOffset>

      <VOffset :mt="-20">
        <VText
          font-weight="600"
          variant="body2"
          :align="VTextTextAlign.CENTER"
        >
          Total Profit
        </VText>
      </VOffset>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import VCard from '@/components/basic/VCard.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import TotalSalesChart from '@/components/dashboards/TotalSalesChart.vue';
import { GlobalColorMap } from '@/model/Colors';
import { VTextTextAlign } from '@/model/components/basic/VText';
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
      ticks: {
        callback() {
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
      arr[i] = cur + getRandom(2500, 5000);
    } else {
      arr[i] = cur - getRandom(1000, 2000);
    }
  }
  return arr;
};

const COUNT_LABELS = 20;
const labels = computed(() => Array(COUNT_LABELS).fill(''));

const data = {
  labels: labels.value,
  datasets: [
    {
      data: randomData(8 * 5),
      borderColor: GlobalColorMap['700'].primary,
      backgroundColor: GlobalColorMap['700'].primary,
    },
  ],
};
</script>

<style module lang="scss">
.root {}
</style>
