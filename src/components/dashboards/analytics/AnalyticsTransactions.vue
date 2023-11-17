<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Last 28 Days" />
      <VMenuItem name="Last Month" />
      <VMenuItem name="Last Year" />
    </template>

    <VOffset :mb="10">
      <VTitle variant="heading6">
        Transactions
      </VTitle>
    </VOffset>

    <VOffset :mb="22">
      <VFlex>
        <VOffset :mr="5">
          <VText
            variant="body2"
            font-weight="600"
          >
            Total 48.5% growth
          </VText>
        </VOffset>
        <VText variant="body2">
          😎 this month
        </VText>
      </VFlex>
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
import DollarIcon from '@public/assets/icons/dashboards/dollar.svg';
import SalesIcon from '@public/assets/icons/dashboards/lightningUp.svg';
import ProductIcon from '@public/assets/icons/dashboards/product.svg';
import CustomersIcon from '@public/assets/icons/people.svg';

import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import StatisticIcon from '@/components/dashboards/StatisticIcon.vue';
import { GlobalColors } from '@/model/Colors';
import { FlexJustify } from '@/model/components/basic/VFlex';
import { type Transactions } from '@/model/dashboards/Transactions';
import { getRandomId } from '@/model/tools/RandomTools';
import { useResizeTrigger } from '@/model/tools/ResizeTools';

const breakpoint = 625;
const hasChange = useResizeTrigger(breakpoint);

const transactions: Transactions[] = [
  {
    id: getRandomId(),
    title: 'Sales',
    value: '245k',
    icon: SalesIcon,
    color: GlobalColors.PRIMARY,
  }, {
    id: getRandomId(),
    title: 'Customers',
    value: '12.5k',
    icon: CustomersIcon,
    color: GlobalColors.SUCCESS,
  }, {
    id: getRandomId(),
    title: 'Products',
    value: '1.54k',
    icon: ProductIcon,
    color: GlobalColors.WARNING,
  }, {
    id: getRandomId(),
    title: 'Revenue',
    value: '$88k',
    icon: DollarIcon,
    color: GlobalColors.INFO,
  },
];
</script>
