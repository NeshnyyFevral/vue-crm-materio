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
      <DashboardCardInfoV1
        title="New Project"
        :icon="ChestIcon"
        suffix="18%"
        :type="StatisticBasicType.DOWN"
        value="862"
        desc="Yearly Project"
        :menu-items="['Refresh', 'Share', 'Update']"
        :color="GlobalColors.PRIMARY"
      />
    </VOffset>
  </VFlex>
</template>

<script setup lang="ts">
import ChestIcon from '@/assets/icons/dashboards/CRM/chest.svg';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import CrmTotalGrowth from '@/components/dashboards/crm/CrmTotalGrowth.vue';
import DashboardCardInfoV1 from '@/components/dashboards/DashboardCardInfoV1.vue';
import { GlobalColors } from '@/model/Colors';
import { FlexAlign, FlexDirection } from '@/model/components/basic/VFlex';
import { StatisticBasicType } from '@/model/components/StatisticBasic';
import { useResizeTrigger } from '@/model/tools/ResizeTools';

const breakpoint = 550;
const hasChange = useResizeTrigger(breakpoint);
</script>

<style module lang="scss">
.root {}
</style>
