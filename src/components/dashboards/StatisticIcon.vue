<template>
  <VFlex
    :class="[
      $style.root,
      $style[`variant-${props.variant}`]
    ]"
    :align="FlexAlign.CENTER"
  >
    <VOffset :mr="10">
      <div :class="$style.icon">
        <component :is="props.icon" />
      </div>
    </VOffset>
    <VFlex :direction="!props.reverse ? FlexDirection.COLUMN : FlexDirection.COLUMN_REVERSE">
      <VOffset :mb="5">
        <VText
          :color="GlobalColorMap['400'].default"
          variant="caption"
        >
          {{ props.title }}
        </VText>
      </VOffset>
      <VTitle
        font-weight="600"
        variant="heading6"
      >
        {{ props.value }}
      </VTitle>
    </VFlex>
  </VFlex>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { FlexAlign, FlexDirection } from '@/model/components/basic/VFlex';
import { StatisticIconVariant } from '@/model/components/StatisticIcon';

interface PropsType {
  title?: string;
  value?: string;
  icon?: any;
  color?: GlobalColors;
  variant?: StatisticIconVariant;
  reverse?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  title: '',
  value: '',
  icon: null,
  color: GlobalColors.PRIMARY,
  variant: StatisticIconVariant.DEFAULT,
  reverse: false,
});

const color = computed(() => GlobalColorMap['700'][props.color]);
const lightColor = computed(() => GlobalColorMap['200'][props.color]);
</script>

<style module lang="scss">
.root {
  --color-statistic: v-bind(color);
  --color-light-statistic: v-bind(lightColor);
}

.icon {
  width: 45px;
  height: 45px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.variant {
  &-default {
    & .icon {
      background-color: var(--color-statistic);

      svg path {
        fill: #FFFFFF;
      }
    }
  }

  &-light {
    & .icon {
      background-color: var(--color-light-statistic);

      svg path {
        fill: var(--color-statistic);
      }
    }
  }
}
</style>
