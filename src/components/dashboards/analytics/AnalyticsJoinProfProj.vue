<template>
  <VFlex
    :direction="FlexDirection.COLUMN"
    :align="FlexAlign.CENTER"
  >
    <VOffset
      :height="hasChange ? 'auto' : `${390 / 2 - 20}px`"
      width="100%"
    >
      <AnalyticsTotalProfit />
    </VOffset>

    <VOffset
      :height="hasChange ? 'auto' : `${390 / 2}px`"
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
import ChestIcon from '@/assets/icons/dashboards/crm/chest.svg';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import AnalyticsTotalProfit from '@/components/dashboards/analytics/AnalyticsTotalProfit.vue';
import DashboardCardInfoV1 from '@/components/dashboards/DashboardCardInfoV1.vue';
import { GlobalColors } from '@/model/Colors';
import { FlexAlign, FlexDirection } from '@/model/components/basic/VFlex';
import { StatisticBasicType } from '@/model/components/StatisticBasic';
import { useResizeTrigger } from '@/model/tools/ResizeTools';

const breakpoint = 550;
const hasChange = useResizeTrigger(breakpoint);
</script>
