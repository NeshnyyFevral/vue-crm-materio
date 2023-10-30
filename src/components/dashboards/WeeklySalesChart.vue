<template>
  <div :class="$style.root">
    <BarChart
      :chart-data="props.data"
      :options="props.options"
      :height="175"
    />
  </div>
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js';
import { BarChart } from 'vue-chart-3';

Chart.register(...registerables);

interface PropsType {
  options: any;
  data: any;
}

const props = defineProps<PropsType>();
</script>

<style module lang="scss">
.root {}
</style>
