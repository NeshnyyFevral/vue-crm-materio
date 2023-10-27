<template>
  <VFlex
    :direction="FlexDirection.COLUMN"
    :align="FlexAlign.CENTER"
    :class="$style.root"
  >
    <VOffset
      :height="hasChange ? 'auto' : `${375 / 2 - 20}px`"
      width="100%"
    >
      <CrmTotalGrowth />
    </VOffset>

    <VOffset
      :height="hasChange ? 'auto' : `${375 / 2}px`"
      width="100%"
      :mt="20"
    >
      <CrmNewProject />
    </VOffset>
  </VFlex>
</template>

<script setup lang="ts">
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import CrmNewProject from '@/components/dashboards/crm/CrmNewProject.vue';
import CrmTotalGrowth from '@/components/dashboards/crm/CrmTotalGrowth.vue';
import { FlexAlign, FlexDirection } from '@/model/components/basic/VFlex';
import { useResizeTrigger } from '@/model/tools/ResizeTools';

const breakpoint = 550;
const hasChange = useResizeTrigger(breakpoint);
</script>

<style module lang="scss">
.root {}
</style>
