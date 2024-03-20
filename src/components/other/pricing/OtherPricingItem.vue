<template>
  <VOffset
    :class="[
      $style.root,
      $style[`variant--${props.item.variant}`]
    ]"
  >
    <VChip
      v-if="props.item.variant === PricingVariant.POPULAR"
      :class="$style.chip"
      :variant="ChipVariant.LIGHT"
      :color="isPurchasedPlan ? GlobalColors.SUCCESS : GlobalColors.PRIMARY"
    >
      Popular
    </VChip>

    <VOffset
      :mt="40"
      :mb="20"
    >
      <img
        :src="getPathImg(props.item.icon)"
        :alt="`${props.item.price}_image`"
        :class="$style.image"
      >
    </VOffset>

    <VOffset :mb="5">
      <VTitle
        :align="TextAlign.CENTER"
        variant="heading5"
      >
        {{ props.item.title }}
      </VTitle>
    </VOffset>

    <VOffset :mb="30">
      <VText
        :align="TextAlign.CENTER"
        variant="body1"
        :color="GlobalColorMap['500'].default"
      >
        {{ props.item.subtitle }}
      </VText>
    </VOffset>

    <VOffset :mb="40">
      <OtherPricingPrice
        :justify-content="FlexJustify.CENTER"
        :value="props.item.price"
        :desc="props.item.priceDesc"
      />
    </VOffset>

    <VOffset :mb="40">
      <VOffset
        v-for="ability in props.item.abilities"
        :key="ability"
        :mb="10"
        :class="$style.ability"
      >
        <VText variant="body1">
          {{ ability }}
        </VText>
      </VOffset>
    </VOffset>

    <VOffset>
      <VButton
        max-width
        :disabled="props.disabled"
        :color="isPurchasedPlan ? GlobalColors.SUCCESS : GlobalColors.PRIMARY"
        :variant="props.item.variant === PricingVariant.POPULAR ? ButtonVariant.CONTAINED : ButtonVariant.OUTLINED"
        @click="emits('upgrade', props.item.id)"
      >
        {{ isPurchasedPlan ? 'Your Current Plan' : 'Upgrade' }}
      </VButton>
    </VOffset>
  </VOffset>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VButton from '@/components/basic/VButton.vue';
import VChip from '@/components/basic/VChip.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import OtherPricingPrice from '@/components/other/pricing/OtherPricingPrice.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { ButtonVariant } from '@/model/components/basic/VButton';
import { ChipVariant } from '@/model/components/basic/VChip';
import { FlexJustify } from '@/model/components/basic/VFlex';
import { TextAlign } from '@/model/components/basic/VText';
import { type IPricingItem, PricingVariant } from '@/model/other/Pricing';
import { getPathImg } from '@/model/tools/PathTools';

interface PropsType {
  item: IPricingItem;
  disabled: boolean;
}

interface EmitsType {
  (e: 'upgrade', v: string): void;
}

const props = defineProps<PropsType>();
const emits = defineEmits<EmitsType>();

const isPurchasedPlan = computed(() => props.item.isPurchased);
const popularColor = computed(() => (isPurchasedPlan.value ? GlobalColorMap['700'].success : GlobalColorMap['700'].primary));
</script>

<style module lang="scss">
.root {
  --isPurchased-color: v-bind(popularColor);

  border: 1px solid var(--color-default-200);
  padding: 15px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  position: relative;

  &.variant {
   &--popular {
     border-color: var(--isPurchased-color);
   }
  }
}

.chip {
  position: absolute;
  top: 15px;
  right: 15px;
}

.image {
  height: 120px;
}

.ability {
  display: flex;
  align-items: center;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid var(--color-text);
    margin-right: 10px;
  }
}
</style>
