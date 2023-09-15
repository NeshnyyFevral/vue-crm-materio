<template>
  <div :class="$style.root">
    <div :class="$style.offset">
      <VCard :class="$style.stats">
        <div :class="$style.statsMain">
          <p :class="$style.subtitle">
            Ratings
          </p>

          <Statistic :modify="38">
            13.7k
          </Statistic>

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
    </div>

    <div :class="$style.offset">
      <VCard :class="$style.stats">
        <div :class="$style.statsMain">
          <p :class="$style.subtitle">
            Sessions
          </p>

          <Statistic
            :type="StatisticType.DOWN"
            :modify="22"
          >
            24.5k
          </Statistic>

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
    </div>
  </div>
</template>

<script setup lang="ts">
import VCard from '@/components/basic/VCard.vue';
import VChip from '@/components/basic/VChip.vue';
import Statistic from '@/components/Statistic.vue';
import { GlobalColors } from '@/model/Colors';
import { ChipSize, ChipVariant } from '@/model/components/basic/VChip';
import { StatisticType } from '@/model/components/Statistic';
</script>

<style module lang="scss">
@import '@/scss/mixins/typography';

.root {
  display: flex;
  flex-flow: wrap;

}

.subtitle {
  @include body1;
  font-weight: 600;
  margin-bottom: 25px;
}

.offset {
  margin-left: 20px;
  margin-top: 20px;
  max-width: 25%;
  width: 25%;
}

.stats {
  display: flex;

  &Main {

  }
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
