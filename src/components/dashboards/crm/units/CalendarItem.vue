<template>
  <VFlex
    :direction="FlexDirection.COLUMN"
    :class="$style.root"
    :justify-content="FlexJustify.CENTER"
    :align="FlexAlign.CENTER"
  >
    <VOffset>
      <VText
        variant="subtitle1"
        font-weight="600"
        :align="VTextTextAlign.CENTER"
      >
        {{ cMonth }}
      </VText>
    </VOffset>

    <VOffset :mt="-5">
      <VTitle
        variant="heading6"
        font-weight="700"
        :align="VTextTextAlign.CENTER"
      >
        {{ cDate }}
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
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
} from '@/model/components/basic/VFlex';
import { VTextTextAlign } from '@/model/components/basic/VText';

interface PropsType {
  month?: string;
  date?: string | number;
  color?: GlobalColors;
}

const props = withDefaults(defineProps<PropsType>(), {
  month: '',
  date: '1',
  color: GlobalColors.PRIMARY,
});

const cMonth = computed(() => (props.month.length <= 3 ? props.month : props.month.substring(0, 3)));
const cDate = computed(() => `${props.date}`);
const colorBg = computed(() => GlobalColorMap['100'][props.color]);
const colorText = computed(() => GlobalColorMap['700'][props.color]);
</script>

<style module lang="scss">
.root {
  --calendar-color-bg: v-bind(colorBg);
  --calendar-color-text: v-bind(colorText);

  background-color: var(--calendar-color-bg);
  color: var(--calendar-color-text);
  border-radius: 12px;
  width: 4rem;
}
</style>
