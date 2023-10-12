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
    <VOffset>
      <VOffset :mb="5">
        <VText
          :color="getColorValue(GlobalColors.DEFAULT, '500')"
          variant="caption"
        >
          {{ props.title }}
        </VText>
      </VOffset>
      <VTitle
        font-weight="600"
        variant="heading5"
      >
        {{ props.value }}
      </VTitle>
    </VOffset>
  </VFlex>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import VTitle from '@/components/basic/VTitle.vue';
import {
  getColorValue,
  GlobalColorMap,
  GlobalColors,
} from '@/model/Colors';
import { FlexAlign } from '@/model/components/basic/VFlex';
import { StatisticIconVariant } from '@/model/components/StatisticIcon';

interface PropsType {
  title?: string;
  value?: string;
  icon?: any;
  color?: GlobalColors;
  variant?: StatisticIconVariant;
}

const props = withDefaults(defineProps<PropsType>(), {
  title: '',
  value: '',
  icon: null,
  color: GlobalColors.PRIMARY,
  variant: StatisticIconVariant.DEFAULT,
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
