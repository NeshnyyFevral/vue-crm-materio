<template>
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
        <StatisticBase :type="StatisticBasicType.DOWN">
          <template #value>
            <VTitle variant="heading6">
              24.5k
            </VTitle>
          </template>
          <template #suffix="{ prefix, color }">
            <VText
              :color="color"
              variant="caption"
            >
              {{ prefix }}22%
            </VText>
          </template>
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
      :src="getPathImg('images/crm/boy.png')"
      alt="boy"
      :class="$style.image"
    >
  </VCard>
</template>

<script setup lang="ts">
import VCard from '@/components/basic/VCard.vue';
import VChip from '@/components/basic/VChip.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import StatisticBase from '@/components/dashboards/StatisticBase.vue';
import { GlobalColors } from '@/model/Colors';
import { ChipSize, ChipVariant } from '@/model/components/basic/VChip';
import { StatisticBasicType } from '@/model/components/StatisticBasic';
import { getPathImg } from '@/model/tools/PathTools';
</script>

<style module lang="scss">
.image {
  display: block;
  position: absolute;
  bottom: 0;
  right: 20px;
  height: 175px;
  width: auto;
}
</style>
