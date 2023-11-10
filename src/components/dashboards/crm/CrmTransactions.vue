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
        <VOffset
          v-for="trans in transactions"
          :key="trans.id"
          :width="hasChange ? 'auto' : '33%'"
        >
          <StatisticIcon
            :title="trans.title"
            :value="trans.value"
            :icon="trans.icon"
            :color="trans.color"
          />
        </VOffset>
      </VFlex>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import SalesIcon from '@/assets/icons/dashboards/lightningUp.svg';
import CustomersIcon from '@/assets/icons/dashboards/people.svg';
import ProductIcon from '@/assets/icons/dashboards/product.svg';
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import StatisticIcon from '@/components/dashboards/StatisticIcon.vue';
import { GlobalColors } from '@/model/Colors';
import { FlexJustify } from '@/model/components/basic/VFlex';
import type { Transactions } from '@/model/dashboards/Transactions';
import { getRandomId } from '@/model/tools/RandomTools';
import { useResizeTrigger } from '@/model/tools/ResizeTools';

const breakpoint = 500;
const hasChange = useResizeTrigger(breakpoint);

const transactions: Transactions[] = [
  {
    id: getRandomId(),
    title: 'Customers',
    value: '12.5k',
    icon: SalesIcon,
    color: GlobalColors.PRIMARY,
  }, {
    id: getRandomId(),
    title: 'Sales',
    value: '245k',
    icon: CustomersIcon,
    color: GlobalColors.SUCCESS,
  }, {
    id: getRandomId(),
    title: 'Products',
    value: '1.54k',
    icon: ProductIcon,
    color: GlobalColors.WARNING,
  },
];
</script>
