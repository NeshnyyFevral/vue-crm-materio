<template>
  <VOffset
    :class="[
      $style.block,
      props.splitter && $style.hasSplitted
    ]"
  >
    <VOffset :mb="30">
      <VFlex
        :align="FlexAlign.CENTER"
        :justify-content="FlexJustify.SPACE_BETWEEN"
      >
        <VTitle variant="heading6">
          {{ props.title }}
        </VTitle>

        <VText
          variant="caption"
          :color="GlobalColorMap['400'].default"
        >
          View All
        </VText>
      </VFlex>
    </VOffset>

    <VOffset
      v-for="item in props.data"
      :key="item.id"
      :mb="32"
    >
      <TransactionItem
        :type="item.type"
        :title="item.title"
        :value="item.value"
        :desc="item.desc"
      >
        <img
          :src="getImageUrl(`/assets/images/analytics/deposits/${item.imgSrc}`)"
          alt="logo"
        >
      </TransactionItem>
    </VOffset>
  </VOffset>
</template>

<script setup lang="ts">
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import TransactionItem from '@/components/dashboards/analytics/units/TransactionItem.vue';
import { GlobalColorMap } from '@/model/Colors';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import type { TransactionDepositWithdraw } from '@/model/dashboards/Transactions';
import { useResizeTrigger } from '@/model/tools/ResizeTools';
import { getImageUrl } from '@/model/tools/UrlTools';

interface PropsType {
  title: string;
  data: TransactionDepositWithdraw[];
  splitter?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  title: '',
  data: () => [],
  splitter: false,
});

const breakpoint = 630;
const hasChanged = useResizeTrigger(breakpoint);
</script>

<style module lang="scss">
.block {
  width: 50%;

  &:not(:first-child){
    margin-left: 40px;
  }

  &.hasSplitted {
    position: relative;

    &::after {
      position: absolute;
      right: -20px;
      top: 0;
      display: block;
      content: '';
      height: 100%;
      width: 1px;
      background-color: var(--color-default-100);
    }
  }

  @media screen and (max-width: 630px) {
    width: 100%;

    &:not(:first-child){
      margin-left: 0;
      margin-top: 30px;
    }

    &.hasSplitted::after {
      width: 100%;
      height: 1px;
      top: auto;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
