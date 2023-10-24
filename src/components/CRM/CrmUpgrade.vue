<template>
  <VCard>
    <VOffset :mb="10">
      <VTitle variant="heading6">
        Upgrade Your Plan
      </VTitle>
    </VOffset>

    <VOffset :mb="20">
      <VText
        :color="GlobalColorMap['400'].default"
        variant="caption"
      >
        Please make the payment to start enjoying all the features of our premium plan as soon as possible.
      </VText>
    </VOffset>

    <VOffset :mb="10">
      <UpgradePlan
        title="Platinum"
        desc="Upgrade Plan"
        price="5250"
      >
        <img
          src="../../assets/images/CRM/briefcase.png"
          alt="case"
        >
      </UpgradePlan>
    </VOffset>

    <VOffset :mb="10">
      <VText
        variant="body2"
        font-weight="700"
      >
        Payment details
      </VText>
    </VOffset>

    <VOffset :mb="15">
      <CardCVC
        v-model="creditCard1"
        title="Credit card"
        desc="2566 xxxx xxxx 8908"
      >
        <img
          src="../../assets/images/CRM/logo-MC.png"
          alt="MC"
        >
      </CardCVC>
    </VOffset>

    <VOffset>
      <CardCVC
        v-model="creditCard2"
        title="Credit card"
        desc="8990 xxxx xxxx 6852"
      >
        <img
          src="../../assets/images/CRM/logo-another.png"
          alt="another"
        >
      </CardCVC>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import VCard from '@/components/basic/VCard.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import CardCVC from '@/components/CardCVC.vue';
import UpgradePlan from '@/components/UpgradePlan.vue';
import { GlobalColorMap } from '@/model/Colors';

const creditCard1 = ref<string>('');
const creditCard2 = ref<string>('');
</script>

<style module lang="scss"></style>
