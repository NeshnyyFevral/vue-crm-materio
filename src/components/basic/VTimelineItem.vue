<template>
  <div :class="$style.root">
    <VOffset>
      <VFlex
        :direction="FlexDirection.COLUMN"
        :align="FlexAlign.CENTER"
        :class="$style.bar"
      >
        <div :class="$style.dot" />
        <div :class="$style.line" />
      </VFlex>
    </VOffset>
    <VOffset :ml="14">
      <div :class="$style.content">
        <VOffset
          :mt="-6"
          :mb="5"
        >
          <VFlex
            :justify-content="FlexJustify.SPACE_BETWEEN"
            :align="FlexAlign.CENTER"
          >
            <VText
              variant="body2"
              font-weight="600"
            >
              {{ title }}
            </VText>

            <VText
              v-if="date"
              variant="caption"
              :color="GlobalColorMap['300'].default"
            >
              {{ date }}
            </VText>
          </VFlex>
        </VOffset>

        <div
          :class="[
            $style.contentBody,
            !isWithoutPadding && $style['contentBody--withoutPaddings']
          ]"
        >
          <slot />
        </div>
      </div>
    </VOffset>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

import VFlex from '@/components/basic/VFlex.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VText from '@/components/basic/VText.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import {
  FlexAlign,
  FlexDirection,
  FlexJustify,
} from '@/model/components/basic/VFlex';

interface PropsType {
  color?: GlobalColors;
  title?: string;
  date?: string | Date | null;
}

const props = withDefaults(defineProps<PropsType>(), {
  color: GlobalColors.PRIMARY,
  title: '',
  date: null,
});

const slots = useSlots();

const color = computed<string>(() => GlobalColorMap['700'][props.color]);
const lineColor = computed<string>(() => GlobalColorMap['300'].default);
const isWithoutPadding = computed<boolean>(() => !!slots.default);
</script>

<style module lang="scss">
$sizeDot: 10px;

.root {
  --color-dot: v-bind(color);
  --color-line: v-bind(lineColor);

  display: grid;
  grid-template-columns: auto 1fr;
  margin-top: 10px;
}

.bar {
  height: 100%;
}

.dot {
  width: $sizeDot;
  height: $sizeDot;
  border-radius: 50%;
  background-color: var(--color-dot);
}

.line {
  height: calc(100% - $sizeDot - 10px);
  width: 2px;
  margin-top: auto;
  border-radius: 50%;
  background-color: var(--color-line);
}

.content {}

.contentBody {
  display: grid;
  grid-gap: 7px;
  padding: 7px 0;

  &--withoutPaddings {
    padding: 0;
  }
}
</style>
