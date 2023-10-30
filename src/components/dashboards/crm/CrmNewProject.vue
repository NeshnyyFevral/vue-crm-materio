<template>
  <VCard>
    <template #menu>
      <VMenuItem name="Refresh" />
      <VMenuItem name="Share" />
      <VMenuItem name="Update" />
    </template>

    <VOffset :mb="15">
      <VAvatar>
        <ChestIcon />
      </VAvatar>
    </VOffset>

    <VOffset :mb="10">
      <VText
        variant="body2"
        font-weight="600"
      >
        New Project
      </VText>
    </VOffset>

    <VOffset :mb="10">
      <StatisticBase
        :type="StatisticBasicType.DOWN"
        :modify="18"
        variant="heading6"
      >
        862
      </StatisticBase>
    </VOffset>

    <VText variant="caption">
      Yearly Project
    </VText>
  </VCard>
</template>

<script setup lang="ts">
import ChestIcon from '@/assets/icons/dashboards/CRM/chest.svg';
import VAvatar from '@/components/basic/VAvatar.vue';
import VCard from '@/components/basic/VCard.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import StatisticBase from '@/components/dashboards/StatisticBase.vue';
import { StatisticBasicType } from '@/model/components/StatisticBasic';
</script>

<style module lang="scss">
.root {}
</style>
