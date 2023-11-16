<template>
  <VCard>
    <VFlex
      :direction-change-trigger="breakpoint"
      :align="FlexAlign.CENTER"
    >
      <TransactionBlock
        title="Deposit"
        :data="deposits"
        splitter
      />
      <TransactionBlock
        title="Withdraw"
        :data="withdrawals"
      />
    </VFlex>
  </VCard>
</template>

<script setup lang="ts">
import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import TransactionBlock from '@/components/dashboards/analytics/units/TransactionBlock.vue';
import { FlexAlign } from '@/model/components/basic/VFlex';
import { StatisticBasicType } from '@/model/components/StatisticBasic';
import { type TransactionDepositWithdraw } from '@/model/dashboards/Transactions';
import { getRandomId } from '@/model/tools/RandomTools';

const breakpoint = 630;

const deposits: TransactionDepositWithdraw[] = [{
  id: getRandomId(),
  title: 'Gumroad Account',
  desc: 'Sell UI Kit',
  value: '$4,650',
  type: StatisticBasicType.UP,
  imgSrc: 'gumroad.png',
}, {
  id: getRandomId(),
  title: 'Mastercard',
  desc: 'Wallet deposit',
  value: '$92,705',
  type: StatisticBasicType.UP,
  imgSrc: 'mastercard.png',
}, {
  id: getRandomId(),
  title: 'Stripe Account',
  desc: 'iOS Application',
  value: '$957',
  type: StatisticBasicType.UP,
  imgSrc: 'stripe.png',
}, {
  id: getRandomId(),
  title: 'American Bank',
  desc: 'Bank Transfer',
  value: '$6,837',
  type: StatisticBasicType.UP,
  imgSrc: 'american-bank.png',
}, {
  id: getRandomId(),
  title: 'Bank Account',
  desc: 'Wallet deposit',
  value: '$446',
  type: StatisticBasicType.UP,
  imgSrc: 'citi-bank.png',
},
];

const withdrawals: TransactionDepositWithdraw[] = [{
  id: getRandomId(),
  title: 'Google Adsense',
  desc: 'Paypal deposit',
  value: '$145',
  type: StatisticBasicType.DOWN,
  imgSrc: 'google.png',
}, {
  id: getRandomId(),
  title: 'Github Enterprise',
  desc: 'Security & compliance',
  value: '$1870',
  type: StatisticBasicType.DOWN,
  imgSrc: 'github.png',
}, {
  id: getRandomId(),
  title: 'Upgrade Slack Plan',
  desc: 'Debit card deposit',
  value: '$450',
  type: StatisticBasicType.DOWN,
  imgSrc: 'slack.png',
}, {
  id: getRandomId(),
  title: 'Digital Ocean',
  desc: 'Cloud Hosting',
  value: '$540',
  type: StatisticBasicType.DOWN,
  imgSrc: 'digital-ocean.png',
}, {
  id: getRandomId(),
  title: 'AWS Account',
  desc: 'Choosing a Cloud Platform',
  value: '$21',
  type: StatisticBasicType.DOWN,
  imgSrc: 'aws.png',
},
];
</script>

<style module lang="scss">
.deposit,
.withdraw {
  width: 50%;

  @media screen and (max-width: 630px) {
    width: 100%;
  }
}

.deposit {
  position: relative;

  &::after {
    position: absolute;
    right: -10px;
    top: 0;
    display: block;
    content: '';
    height: 100%;
    width: 1px;
    background-color: var(--color-default-300);
  }
}
</style>
