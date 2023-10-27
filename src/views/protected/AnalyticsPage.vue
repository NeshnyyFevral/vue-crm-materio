<template>
  <div :class="$style.root">
    <VOffset
      v-for="component in components"
      :key="component.id"
      :ml="20"
      :mt="20"
      :class="$style[component.class]"
    >
      <component :is="component.component" />
    </VOffset>
  </div>
</template>

<script setup lang="ts">
import { type Component, markRaw } from 'vue';

import VOffset from '@/components/basic/VOffset.vue';
import AnalyticsCongratulations from '@/components/dashboards/analytics/AnalyticsCongratulations.vue';
import { getRandomString } from '@/model/tools/RandomTools';

interface ComponentsData {
  id: string;
  component: Component;
  class: string;
}

const components = markRaw<ComponentsData[]>([
  {
    id: getRandomString(),
    component: AnalyticsCongratulations,
    class: 'stats',
  },
]);
</script>

<style module lang="scss">
$heightCard: 375px;
$offsetCard: 60px;

.root {
  display: flex;
  flex-flow: wrap;
  align-items: flex-end;
}

.stats {
  width: 25%;
  display: flex;
  height: 80%;

  @media screen and (max-width: 1100px) {
    width: calc(50% - 20px);
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    height: auto;
  }
}
</style>
