<template>
  <VFlex
    :class="$style.root"
    :align="FlexAlign.CENTER"
    :justify-content="FlexJustify.SPACE_BETWEEN"
  >
    <VFlex :align="FlexAlign.CENTER">
      <VOffset
        width="27px"
        height="27px"
        :mr="20"
      >
        <slot />
      </VOffset>

      <VOffset>
        <VOffset :mb="4.5">
          <VText
            font-weight="600"
            variant="body2"
          >
            {{ props.title }}
          </VText>
        </VOffset>

        <VText
          variant="caption"
          :color="GlobalColorMap['400'].default"
        >
          {{ props.desc }}
        </VText>
      </VOffset>
    </VFlex>

    <VOffset>
      <VText
        :color="color"
        variant="body2"
        font-weight="600"
      >
        {{ prefix }}{{ props.value }}
      </VText>
    </VOffset>
  </VFlex>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import { GlobalColorMap } from '@/model/Colors';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';
import { StatisticBasicType } from '@/model/components/StatisticBasic';

interface PropsType {
  value?: string;
  title?: string;
  type?: StatisticBasicType;
  desc?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  value: '',
  title: '',
  type: StatisticBasicType.UP,
  desc: '',
});

const prefix = computed(() => (props.type === StatisticBasicType.UP
  ? '+'
  : '-'
));
const color = computed(() => (props.type === StatisticBasicType.UP
  ? GlobalColorMap['700'].success
  : GlobalColorMap['700'].error
));
</script>

<style module lang="scss">
.root {
  img {
    width: 100%;
    height: 100%;
    display: block;

  }
}
</style>
