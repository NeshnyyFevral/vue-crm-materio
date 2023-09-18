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
            <!--            <p :class="$style.subtitle">
              Ratings
            </p>-->
          </VOffset>

          <VOffset :mb="5">
            <Statistic :modify="38">
              13.7k
            </Statistic>
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
            <Statistic
              :type="StatisticType.DOWN"
              :modify="22"
            >
              24.5k
            </Statistic>
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
      <VCard>123</VCard>
    </VOffset>
  </div>
</template>

<script setup lang="ts">
import VCard from '@/components/basic/VCard.vue';
import VChip from '@/components/basic/VChip.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
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
