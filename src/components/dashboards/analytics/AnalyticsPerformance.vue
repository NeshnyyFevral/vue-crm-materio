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
      <PerformanceRadar />
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import VCard from '@/components/basic/VCard.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTitle from '@/components/basic/VTitle.vue';
import PerformanceRadar from '@/components/dashboards/PerformanceRadar.vue';
</script>

<style module lang="scss">

</style>
