<template>
  <VFlex
    :direction="FlexDirection.COLUMN"
    :align="FlexAlign.CENTER"
    :class="$style.root"
  >
    <VOffset
      width="100%"
    >
      <CrmTotalGrowth />
    </VOffset>

    <VOffset
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
import CrmNewProject from '@/components/CRM/CrmNewProject.vue';
import CrmTotalGrowth from '@/components/CRM/CrmTotalGrowth.vue';
import { FlexAlign, FlexDirection } from '@/model/components/basic/VFlex';
</script>

<style module lang="scss">
.root {}
</style>
