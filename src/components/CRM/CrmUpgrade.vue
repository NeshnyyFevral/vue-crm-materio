<template>
  <VCard>
    <VOffset :mb="10">
      <VTitle variant="heading6">
        Upgrade Your Plan
      </VTitle>
    </VOffset>

    <VOffset>
      <VText
        :color="GlobalColorMap['400'].default"
        variant="caption"
      >
        Please make the payment to start enjoying all the features of our premium plan as soon as possible.
      </VText>
    </VOffset>

    <VOffset :mt="20">
      <UpgradePlan
        title="Platinum"
        desc="Upgrade Plan"
        price="5250"
      >
        <img
          src="../../assets/images/CRM/briefcase.png"
          alt="case"
          :class="$style.image"
        >
      </UpgradePlan>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import VCard from '@/components/basic/VCard.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import UpgradePlan from '@/components/UpgradePlan.vue';
import { GlobalColorMap } from '@/model/Colors';
</script>

<style module lang="scss">
.image {
  width: 20px !important;
  height: 20px !important;
}
</style>
