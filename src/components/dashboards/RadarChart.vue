<template>
  <RadarChart
    :options="props.options"
    :chart-data="props.data"
  />
</template>

<script setup lang="ts">
import { RadarChart } from 'vue-chart-3';

interface PropsType {
  data: any;
  options: any;
}

const props = defineProps<PropsType>();
</script>
