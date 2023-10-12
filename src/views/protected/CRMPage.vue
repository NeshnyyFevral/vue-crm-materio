<template>
  <div :class="$style.root">
    <VOffset
      :ml="20"
      :mt="20"
      :class="$style.stats"
    >
      <VCard>
        <div>
          <VOffset :mb="25">
            <VText
              font-weight="600"
              variant="subtitle1"
            >
              Ratings
            </VText>
          </VOffset>

          <VOffset :mb="5">
            <StatisticBase :modify="38">
              13.7k
            </StatisticBase>
          </VOffset>

          <VChip
            :size="ChipSize.SMALL"
            :variant="ChipVariant.LIGHT"
          >
            Year of 2022
          </VChip>
        </div>

        <img
          src="../../assets/images/CRM/girl.png"
          alt="girl"
          :class="$style.image"
        >
      </VCard>
    </VOffset>

    <VOffset
      :ml="20"
      :mt="20"
      :class="$style.stats"
    >
      <VCard>
        <div>
          <VOffset :mb="25">
            <VText
              font-weight="600"
              variant="subtitle1"
            >
              Sessions
            </VText>
          </VOffset>

          <VOffset :mb="5">
            <StatisticBase
              :type="StatisticBasicType.DOWN"
              :modify="22"
            >
              24.5k
            </StatisticBase>
          </VOffset>

          <VChip
            :size="ChipSize.SMALL"
            :variant="ChipVariant.LIGHT"
            :color="GlobalColors.DEFAULT"
          >
            Last Week
          </VChip>
        </div>

        <img
          src="../../assets/images/CRM/boy.png"
          alt="boy"
          :class="$style.image"
        >
      </VCard>
    </VOffset>

    <VOffset
      :ml="20"
      :mt="20"
      :class="$style.transactions"
    >
      <VCard>
        <VOffset>
          <VTitle
            variant="heading6"
          >
            Transactions
          </VTitle>
        </VOffset>

        <VOffset :mb="20">
          <VText variant="body2">
            Total 48.5% growth 😎 this month
          </VText>
        </VOffset>

        <VOffset
          :max-width="450"
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
    </VOffset>
  </div>
</template>

<script setup lang="ts">
import SalesIcon from '@/assets/icons/CRM/ligthning.svg';
import CustomersIcon from '@/assets/icons/CRM/people.svg';
import ProductIcon from '@/assets/icons/CRM/product.svg';
import VCard from '@/components/basic/VCard.vue';
import VChip from '@/components/basic/VChip.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import StatisticBase from '@/components/StatisticBase.vue';
import StatisticIcon from '@/components/StatisticIcon.vue';
import { GlobalColors } from '@/model/Colors';
import { ChipSize, ChipVariant } from '@/model/components/basic/VChip';
import { FlexJustify } from '@/model/components/basic/VFlex';
import { StatisticBasicType } from '@/model/components/StatisticBasic';
</script>

<style module lang="scss">
@import '@/scss/mixins/typography';

.root {
  display: flex;
  flex-flow: wrap;
  align-items: flex-end;
}

.stats {
  width: 25%;
  display: flex;
  height: 80%;
}

.transactions {
  width: calc(50% - 60px);
  display: flex;
}

.image {
  display: block;
  position: absolute;
  bottom: 0;
  right: 20px;
  height: 175px;
  width: auto;
}
</style>
