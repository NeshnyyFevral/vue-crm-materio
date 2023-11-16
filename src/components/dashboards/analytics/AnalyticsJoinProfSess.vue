<template>
  <VFlex
    :direction="FlexDirection.COLUMN"
    :align="FlexAlign.CENTER"
  >
    <VOffset
      :height="hasChange ? 'auto' : `${390 / 2 - 20}px`"
      width="100%"
    >
      <DashboardCardInfoV1
        title="Total Profit"
        :icon="StatisticIcon"
        suffix="42%"
        :type="StatisticBasicType.UP"
        value="$25.6k"
        desc="Weekly Profit"
        :menu-items="['Refresh', 'Share', 'Update']"
        :color="GlobalColors.DEFAULT"
      />
    </VOffset>

    <VOffset
      :height="hasChange ? 'auto' : `${390 / 2}px`"
      width="100%"
      :mt="20"
    >
      <AnalyticsSessions />
    </VOffset>
  </VFlex>
</template>

<script setup lang="ts">
import StatisticIcon from '@public/assets/icons/dashboards/statistic.svg';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import AnalyticsSessions from '@/components/dashboards/analytics/AnalyticsSessions.vue';
import DashboardCardInfoV1 from '@/components/dashboards/DashboardCardInfoV1.vue';
import { GlobalColors } from '@/model/Colors';
import { FlexAlign, FlexDirection } from '@/model/components/basic/VFlex';
import { StatisticBasicType } from '@/model/components/StatisticBasic';
import { useResizeTrigger } from '@/model/tools/ResizeTools';

const breakpoint = 550;
const hasChange = useResizeTrigger(breakpoint);
</script>
