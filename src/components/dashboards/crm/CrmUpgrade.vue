<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Add Cards" />
      <VMenuItem name="Edit Cards" />
      <VMenuItem name="Delete Cards" />
    </template>

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
          src="../../../assets/images/CRM/briefcase.png"
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
          src="../../../assets/images/CRM/logo-MC.png"
          alt="MC"
        >
      </CardCVC>
    </VOffset>

    <VOffset :mb="20">
      <CardCVC
        v-model="creditCard2"
        title="Credit card"
        desc="8990 xxxx xxxx 6852"
      >
        <img
          src="../../../assets/images/CRM/logo-another.png"
          alt="another"
        >
      </CardCVC>
    </VOffset>

    <VOffset :mb="20">
      <RouterLink to="#">
        <VText
          :color="GlobalColorMap['700'].primary"
          variant="caption"
          font-weight="500"
          link
        >
          Add Payment Method
        </VText>
      </RouterLink>
    </VOffset>

    <VOffset :mb="15">
      <VTextField
        v-model="email"
        label="Email Address"
        placeholder="John.doe@email.com"
      />
    </VOffset>

    <VOffset>
      <VButton
        :size="ButtonSize.SMALL"
        max-width
      >
        <VFlex :align="FlexAlign.CENTER">
          <VOffset :mr="5">
            Proceed to payment
          </VOffset>
          <i><ArrowRight /></i>
        </VFlex>
      </VButton>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ArrowRight from '@/assets/icons/dashboards/CRM/arrowRight.svg';
import VButton from '@/components/basic/VButton.vue';
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import CardCVC from '@/components/dashboards/crm/units/CardCVC.vue';
import UpgradePlan from '@/components/dashboards/crm/units/UpgradePlan.vue';
import VTextField from '@/components/form/VTextField.vue';
import { GlobalColorMap } from '@/model/Colors';
import { ButtonSize } from '@/model/components/basic/VButton';
import { FlexAlign } from '@/model/components/basic/VFlex';

const creditCard1 = ref<string>('');
const creditCard2 = ref<string>('');
const email = ref<string>('');
</script>
