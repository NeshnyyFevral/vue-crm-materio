<template>
  <VFlex
    :justify-content="FlexJustify.SPACE_AROUND"
    :align="FlexAlign.CENTER"
    :direction-change-trigger="breakpoint"
  >
    <VOffset
      :mt="30"
      :class="$style.chart"
    >
      <DoughnutChart
        :options="options"
        :chart-data="data"
        :width="225"
        :height="225"
        :plugins="[{
          beforeEvent,
        }]"
      />

      <div :class="$style.hovered">
        <VText
          font-weight="600"
          :align="VTextTextAlign.CENTER"
          variant="body2"
        >
          {{ hoveredElementIndex.value }}
        </VText>
        <VText
          variant="body2"
          :align="VTextTextAlign.CENTER"
        >
          {{ hoveredElementIndex.from }}
        </VText>
      </div>
    </VOffset>

    <VOffset :mt="30">
      <VOffset :mb="10">
        <StatisticIcon
          :variant="StatisticIconVariant.LIGHT"
          :icon="DollarIcon"
          title="Number of Sales"
          value="$86,400"
        />
      </VOffset>

      <VSplitter />

      <VOffset
        :mt="20"
        :class="$style.grid"
      >
        <div
          v-for="item in gridData"
          :key="item.id"
        >
          <VOffset :mb="10">
            <VFlex :align="FlexAlign.CENTER">
              <VOffset :mr="4">
                <div
                  :style="{ backgroundColor: item.color }"
                  :class="$style.gridTitleCycle"
                />
              </VOffset>

              <VText
                :color="GlobalColorMap['400'].default"
                variant="body2"
              >
                {{ item.title }}
              </VText>
            </VFlex>
          </VOffset>

          <VText
            variant="body1"
            font-weight="600"
          >
            {{ item.value }}
          </VText>
        </div>
      </VOffset>
    </voffset>
  </VFlex>
</template>

<script setup lang="ts">
import DollarIcon from '@public/assets/icons/dashboards/dollar.svg';
import { Chart, registerables } from 'chart.js';
import { computed, ref } from 'vue';
import { DoughnutChart } from 'vue-chart-3';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VSplitter from '@/components/basic/VSplitter.vue';
import VText from '@/components/basic/VText.vue';
import StatisticIcon from '@/components/dashboards/StatisticIcon.vue';
import { GlobalColorMap } from '@/model/Colors';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { VTextTextAlign } from '@/model/components/basic/VText';
import { StatisticIconVariant } from '@/model/components/StatisticIcon';
import { formatNumber } from '@/model/tools/NumberTools';
import { getRandomId } from '@/model/tools/RandomTools';

interface HoveredString {
  value: string;
  from: string;
}

interface GridItem {
  id: string;
  color: string;
  value: string;
  title: string;
}

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
});

const data = {
  labels: [
    'Apparel',
    'Electronic',
    'FMCG',
    'Other Sales',
  ],
  datasets: [
    {
      data: [12_150, 24_900, 12_750, 50_200],
      backgroundColor: [
        GlobalColorMap['400'].primary,
        GlobalColorMap['500'].primary,
        GlobalColorMap['600'].primary,
        GlobalColorMap['700'].default,
      ],
    },
  ],
};

const breakpoint = 500;

const gridData = computed(() => {
  const gD: GridItem[] = [];

  data.labels.forEach((e, i) => {
    gD.push({
      id: getRandomId(),
      title: e,
      color: data.datasets[0].backgroundColor[i],
      value: `$${formatNumber(`${data.datasets[0].data[i]}`)}`,
    });
  });

  return gD;
});

const hoveredElementIndex = ref<HoveredString>({
  from: 'Weekly Sales',
  value: '100,000$',
});

const beforeEvent = (chart: any, event: any) => {
  const { tooltip } = event.event.chart;

  if (tooltip && tooltip.body && tooltip.body[0] && tooltip.body[0].lines) {
    const str: string = tooltip.body[0].lines[0];

    const from = str.split(':')[0];
    const value = `${str.split(':')[1].trim().replaceAll(' ', ',')}$`;

    hoveredElementIndex.value = {
      from,
      value,
    };
  }
};
</script>

<style module lang="scss">
.chart {
  position: relative;
}

.hovered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.gridTitleCycle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
</style>
