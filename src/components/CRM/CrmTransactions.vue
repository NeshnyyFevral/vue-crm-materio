<template>
  <VCard>
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

    <VOffset
      max-width="450px"
      :mb="10"
    >
      <VFlex :justify-content="FlexJustify.SPACE_BETWEEN">
        <StatisticIcon
          title="Customers"
          value="12.5k"
          :icon="SalesIcon"
          :color="GlobalColors.PRIMARY"
        />

        <StatisticIcon
          title="Sales"
          value="245k"
          :icon="CustomersIcon"
          :color="GlobalColors.SUCCESS"
        />

        <StatisticIcon
          title="Products"
          value="1.54k"
          :icon="ProductIcon"
          :color="GlobalColors.WARNING"
        />
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
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import StatisticIcon from '@/components/StatisticIcon.vue';
import { GlobalColors } from '@/model/Colors';
import { FlexJustify } from '@/model/components/basic/VFlex';
</script>
