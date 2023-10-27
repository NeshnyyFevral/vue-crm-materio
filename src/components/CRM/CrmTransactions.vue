<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Refresh" />
      <VMenuItem name="Share" />
      <VMenuItem name="Update" />
    </template>

    <VOffset>
      <VTitle variant="heading6">
        Transactions
      </VTitle>
    </VOffset>

    <VOffset :mb="20">
      <VText variant="body2">
        Total Sales
      </VText>
    </VOffset>

    <VOffset :mb="10">
      <VFlex
        :direction-change-trigger="breakpoint"
        :justify-content="FlexJustify.SPACE_BETWEEN"
      >
        <VOffset :width="hasChange ? 'auto' : '33%'">
          <StatisticIcon
            title="Customers"
            value="12.5k"
            :icon="SalesIcon"
            :color="GlobalColors.PRIMARY"
          />
        </VOffset>

        <VOffset :width="hasChange ? 'auto' : '33%'">
          <StatisticIcon
            title="Sales"
            value="245k"
            :icon="CustomersIcon"
            :color="GlobalColors.SUCCESS"
          />
        </VOffset>

        <VOffset :width="hasChange ? 'auto' : '33%'">
          <StatisticIcon
            title="Products"
            value="1.54k"
            :icon="ProductIcon"
            :color="GlobalColors.WARNING"
          />
        </VOffset>
      </VFlex>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import SalesIcon from '@/assets/icons/CRM/ligthning.svg';
import CustomersIcon from '@/assets/icons/CRM/people.svg';
import ProductIcon from '@/assets/icons/CRM/product.svg';
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import StatisticIcon from '@/components/StatisticIcon.vue';
import { GlobalColors } from '@/model/Colors';
import { FlexJustify } from '@/model/components/basic/VFlex';
import { useResizeTrigger } from '@/model/tools/ResizeTools';

const breakpoint = 500;

const hasChange = useResizeTrigger(breakpoint);
</script>
