<template>
  <div>
    <LineChart
      :chart-data="props.data"
      :options="props.options"
      :height="height ?? undefined"
    />
  </div>
</template>

<script lang="ts" setup>
import { Chart, registerables } from 'chart.js';
import { LineChart } from 'vue-chart-3';

Chart.register(...registerables);

interface PropsType {
  options: any;
  data: any;
  height?: string;
}

const props = defineProps<PropsType>();
</script>

<style lang="scss">
// f
</style>
