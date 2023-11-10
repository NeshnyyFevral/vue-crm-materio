<template>
  <VCard>
    <template #menu>
      <VOffset v-if="props.menuItems">
        <VMenuItem
          v-for="item in props.menuItems"
          :key="item"
          :name="item"
        />
      </VOffset>
    </template>

    <VOffset :mb="15">
      <VAvatar :color="props.color">
        <component :is="props.icon" />
      </VAvatar>
    </VOffset>

    <VOffset :mb="10">
      <VText
        variant="body2"
        font-weight="600"
      >
        {{ props.title }}
      </VText>
    </VOffset>

    <VOffset :mb="10">
      <StatisticBase :type="props.type">
        <template #value>
          <VTitle
            variant="heading6"
            font-weight="600"
          >
            {{ props.value }}
          </VTitle>
        </template>
        <template #suffix="{color, prefix}">
          <VOffset :ml="5">
            <VText
              :color="color"
              variant="caption"
            >
              {{ prefix }}{{ props.suffix }}
            </VText>
          </VOffset>
        </template>
      </StatisticBase>
    </VOffset>

    <VText variant="caption">
      {{ props.desc }}
    </VText>
  </VCard>
</template>

<script setup lang="ts">
import VAvatar from '@/components/basic/VAvatar.vue';
import VCard from '@/components/basic/VCard.vue';
import VMenuItem from '@/components/basic/VMenuItem.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import StatisticBase from '@/components/dashboards/StatisticBase.vue';
import type { GlobalColors } from '@/model/Colors';
import { StatisticBasicType } from '@/model/components/StatisticBasic';

interface PropsType {
  menuItems?: string[];
  icon: any;
  title: string;
  value: string;
  suffix: string;
  type: StatisticBasicType;
  desc: string;
  color: GlobalColors;
}

const props = defineProps<PropsType>();
</script>

<style module lang="scss">
.root {}
</style>
