<template>
  <VOffset :mb="10">
    <StatisticIcon
      reverse
      :title="props.title"
      :value="props.description"
      :icon="props.icon"
      :variant="StatisticIconVariant.LIGHT"
      :color="GlobalColors.PRIMARY"
    />
  </VOffset>

  <VOffset
    v-for="q in props.questions"
    :key="q.id"
    :mb="1"
  >
    <VAccordion :title="q.title">
      {{ q.inner }}
    </VAccordion>
  </VOffset>
</template>

<script setup lang="ts">
import VAccordion from '@/components/basic/VAccordion.vue';
import VOffset from '@/components/basic/VOffset.vue';
import StatisticIcon from '@/components/dashboards/StatisticIcon.vue';
import { GlobalColors } from '@/model/Colors';
import type { IAccordion } from '@/model/components/basic/VAccordion';
import { StatisticIconVariant } from '@/model/components/StatisticIcon';

interface PropsType {
  icon: any;
  title: string;
  description: string;
  questions: IAccordion[];
}

const props = defineProps<PropsType>();
</script>

<style module lang="scss">

</style>
