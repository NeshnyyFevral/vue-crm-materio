<template>
  <VCard>
    <VOffset
      :mt="40"
      :mb="15"
    >
      <VTitle
        :align="TextAlign.CENTER"
        variant="heading4"
      >
        Pricing Plans
      </VTitle>
    </VOffset>

    <VOffset :mb="30">
      <VText
        :align="TextAlign.CENTER"
        variant="body1"
      >
        All plans include 40+ advanced tools and features to boost your product.
      </VText>
      <VText
        :align="TextAlign.CENTER"
        variant="body1"
      >
        Choose the best plan to fit your needs.
      </VText>
    </VOffset>

    <VOffset :mb="30">
      <VFlex
        :justify-content="FlexJustify.CENTER"
        :align="FlexAlign.CENTER"
      >
        <VOffset :mr="10">
          <VText variant="body2">
            Monthly
          </VText>
        </VOffset>
        <VOffset :class="$style.parent">
          <VSwitch v-model="variant">
            Annually
          </VSwitch>

          <VChip
            :class="$style.chip"
            :size="ChipSize.DEFAULT"
            :variant="ChipVariant.LIGHT"
          >
            Save up to 20%
          </VChip>
        </VOffset>
      </VFlex>
    </VOffset>

    <VOffset>
      <VFlex
        :align="FlexAlign.CENTER"
        :justify-content="FlexJustify.SPACE_AROUND"
        :direction-change-trigger="breakpoint"
      >
        <OtherPricingItem
          v-for="(item, i) in pricingData"
          :key="item.id"
          :item="item"
          :disabled="purchasedItemNumber > i"
          :class="[
            $style.item,
            hasChange && $style.itemColumn
          ]"
          @upgrade="upgrade"
        />
      </VFlex>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import {
  onBeforeMount,
  ref,
  watch,
} from 'vue';

import VCard from '@/components/basic/VCard.vue';
import VChip from '@/components/basic/VChip.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import VSwitch from '@/components/form/VSwitch.vue';
import OtherPricingItem from '@/components/other/pricing/OtherPricingItem.vue';
import { ChipSize, ChipVariant } from '@/model/components/basic/VChip';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { TextAlign } from '@/model/components/basic/VText';
import { type IPricingItem, PricingVariant } from '@/model/other/Pricing';
import { getRandomId } from '@/model/tools/RandomTools';
import { useResizeTrigger } from '@/model/tools/ResizeTools';

const breakpoint = 980;
const hasChange = useResizeTrigger(breakpoint);

const variant = ref<boolean>(false);
const purchasedItemNumber = ref<number>(-1);
const pricingData = ref<IPricingItem[]>([
  {
    id: getRandomId(),
    icon: 'images/other/pricing-basic.png',
    title: 'Basic',
    subtitle: 'A simple start for everyone',
    price: 0,
    variant: PricingVariant.DEFAULT,
    abilities: [
      '100 responses a month',
      'Unlimited forms and surveys',
      'Unlimited fields',
      'Basic form creation tools',
      'Up to 2 subdomains',
    ],
    isPurchased: true,
  }, {
    id: getRandomId(),
    icon: 'images/other/pricing-standard.png',
    title: 'Standard',
    subtitle: 'For small to medium businesses',
    price: 49,
    variant: PricingVariant.POPULAR,
    abilities: [
      'Unlimited responses',
      'Unlimited forms and surveys',
      'Instagram profile page',
      'Google Docs integration',
      'Custom “Thank you” page',
    ],
    isPurchased: false,
  }, {
    id: getRandomId(),
    icon: 'images/other/pricing-enterprise.png',
    title: 'Enterprise',
    subtitle: 'Solution for big organizations',
    price: 99,
    variant: PricingVariant.DEFAULT,
    abilities: [
      'PayPal payments',
      'Logic Jumps',
      'File upload with 5GB storage',
      'Custom domain support',
      'Stripe integration',
    ],
    isPurchased: false,
  },
]);

const getPurchasedItem = () => {
  purchasedItemNumber.value = pricingData.value.findIndex((el) => el.isPurchased);
};
const upgrade = (id: string) => {
  pricingData.value = pricingData.value.map((el) => ({ ...el, isPurchased: false }));
  const newPurchasedItem = pricingData.value.find((el) => el.id === id);
  if (newPurchasedItem !== undefined) {
    newPurchasedItem.isPurchased = true;
    getPurchasedItem();
  }
};

onBeforeMount(() => {
  getPurchasedItem();
});

watch(() => variant.value, () => {
  pricingData.value = pricingData.value.map((el, i) => (
    {
      ...el,
      // placeholder :)
      price: variant.value
        ? Math.round(el.price - el.price * 0.19)
        : Math.round(el.price + el.price * 0.235),
      priceDesc: variant.value && i > 0
        ? `UDS ${Math.round((el.price - el.price * 0.19)) * 12}/year`
        : undefined,
    }));
});
</script>

<style module lang="scss">
.chip {
  top: -15px;
  position: absolute;
  left: 100%;
}

.parent {
  position: relative;
}

.item {
  & + & {
    margin-left: 20px;
  }

  &Column {
    & + & {
      margin-left: 0;
      margin-top: 20px;
    }
  }
}
</style>
