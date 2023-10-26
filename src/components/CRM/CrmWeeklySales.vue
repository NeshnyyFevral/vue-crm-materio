<template>
  <VCard>
    <VOffset>
      <VOffset :mb="10">
        <VTitle variant="heading6">
          Weekly Sales
        </VTitle>
      </VOffset>

      <VOffset>
        <VText
          variant="body2"
          font-weight="400"
          :color="GlobalColorMap['500'].default"
        >
          Total 85.4k Sales
        </VText>
      </VOffset>

      <VOffset
        :ml="-30"
        :mb="25"
      >
        <WeeklySalesChart />
      </VOffset>

      <VFlex
        :direction-change-trigger="breakpoint"
        :justify-content="FlexJustify.SPACE_AROUND"
      >
        <VOffset>
          <StatisticIcon
            reverse
            title="Sales"
            value="34.6k"
            :icon="ArrowUpIcon"
            :variant="StatisticIconVariant.LIGHT"
          />
        </VOffset>

        <VOffset>
          <StatisticIcon
            reverse
            title="Total Profit"
            value="$482k"
            :icon="DollarIcon"
            :variant="StatisticIconVariant.LIGHT"
            :color="GlobalColors.SUCCESS"
          />
        </VOffset>
      </VFlex>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import DollarIcon from '@/assets/icons/CRM/dollar.svg';
import ArrowUpIcon from '@/assets/icons/CRM/lightningUp.svg';
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import StatisticIcon from '@/components/StatisticIcon.vue';
import WeeklySalesChart from '@/components/WeeklySalesChart.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { FlexJustify } from '@/model/components/basic/VFlex';
import { StatisticIconVariant } from '@/model/components/StatisticIcon';

const breakpoint = 550;
</script>
