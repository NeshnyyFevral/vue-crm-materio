<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Last 28 Days" />
      <VMenuItem name="Last Month" />
      <VMenuItem name="Last Year" />
    </template>

    <VOffset>
      <VText
        font-weight="600"
        variant="subtitle1"
      >
        Sales Overview
      </VText>
    </VOffset>

    <VOffset>
      <SalesOverviewDoughnut />
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import VCard from '@/components/basic/VCard.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import SalesOverviewDoughnut from '@/components/dashboards/crm/units/SalesOverviewDoughnut.vue';
</script>
