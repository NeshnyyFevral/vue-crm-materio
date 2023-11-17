<template>
  <VFlex
    :align="FlexAlign.CENTER"
    :justify-content="FlexJustify.SPACE_BETWEEN"
  >
    <VFlex :align="FlexAlign.CENTER">
      <VOffset :mr="10">
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

        <VFlex :align="FlexAlign.CENTER">
          <VOffset :mr="2">
            <CalendarIcon :class="$style.icon" />
          </VOffset>
          <VText
            variant="caption"
            :color="GlobalColorMap['400'].default"
          >
            {{ props.time }}
          </VText>
        </VFlex>
      </VOffset>
    </VFlex>

    <VOffset>
      <VChip
        :color="props.color"
        :size="ChipSize.SMALL"
        :variant="ChipVariant.LIGHT"
      >
        {{ props.subject }}
      </VChip>
    </VOffset>
  </VFlex>
</template>

<script setup lang="ts">
import CalendarIcon from '@public/assets/icons/calendar.svg';

import VChip from '@/components/basic/VChip.vue';
import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { ChipSize, ChipVariant } from '@/model/components/basic/VChip';
import { FlexAlign, FlexJustify } from '@/model/components/basic/VFlex';

interface PropsType {
  subject?: string;
  title?: string;
  color?: GlobalColors;
  time?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  subject: '',
  title: '',
  color: GlobalColors.PRIMARY,
  time: '',
});
</script>

<style module lang="scss">
.icon {
  width: 0.9rem;
  height: 0.9rem;

  path {
    fill: var(--color-default-400);
  }
}
</style>
