<template>
  <VCard>
    <VOffset :mb="10">
      <VTitle variant="heading6">
        2,856
      </VTitle>
    </VOffset>

    <VOffset
      :mb="20"
      :ml="-7"
    >
      <VFlex
        :justify-content="FlexJustify.SPACE_AROUND"
        :align="FlexAlign.CENTER"
      >
        <VOffset
          v-for="session in sessionsData"
          :key="session.id"
          width="7"
        >
          <VProgress
            width="7px"
            weight="7"
            border-radius="12"
            height="70px"
            :percentage="session.value"
            :color="session.color"
            :variant="ProgressVariant.VERTICAL"
          />
        </VOffset>
      </VFlex>
    </VOffset>

    <VOffset>
      <VText
        variant="body2"
        :align="TextAlign.CENTER"
        font-weight="600"
      >
        Sessions
      </VText>
    </VOffset>
  </VCard>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';

import VCard from '@/components/basic/VCard.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VProgress from '@/components/basic/VProgress.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import { GlobalColors } from '@/model/Colors';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { ProgressVariant } from '@/model/components/basic/VProgress';
import { TextAlign } from '@/model/components/basic/VText';
import { getRandom, getRandomId } from '@/model/tools/RandomTools';

interface Sessions {
  id: string;
  color: GlobalColors;
  value: string; // %
}

const LENGTH = 5;
const SELECTED_COLORS = [GlobalColors.PRIMARY, GlobalColors.ERROR];

const sessionsData = ref<Sessions[]>([]);

const getRandomColor = (colors: GlobalColors[]) => {
  const { length } = colors;
  const randomIndex = getRandom(0, length - 1);

  return colors[randomIndex];
};

const generateSessionData = () => {
  for (let i = 0; i < LENGTH; i += 1) {
    sessionsData.value.push({
      id: getRandomId(),
      color: getRandomColor(SELECTED_COLORS),
      value: getRandom(30, 85).toString(),
    });
  }
};

onBeforeMount(() => {
  generateSessionData();
});
</script>
