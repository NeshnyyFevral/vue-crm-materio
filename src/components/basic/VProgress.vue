<template>
  <VOffset :class="$style.root">
    <div :class="$style.back" />
    <div :class="$style.front" />
  </VOffset>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VOffset from '@/components/basic/VOffset.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';

interface PropsType {
  percentage?: string;
  color: GlobalColors;
}

const props = withDefaults(defineProps<PropsType>(), {
  percentage: '0',
  color: GlobalColors.PRIMARY,
});

const fontColor = computed(() => GlobalColorMap['700'][props.color]);
const backColor = computed(() => GlobalColorMap['100'][props.color]);
const frontWidth = computed(() => `${props.percentage}%`);
</script>

<style module lang="scss">
$height: 5px;

.root {
  --width-progress: v-bind(frontWidth);
  --color-front-progress: v-bind(fontColor);
  --color-back-progress: v-bind(backColor);

  position: relative;
}

.back,
.front {
  position: absolute;
  left: 0;
  top: 0;
}

.back {
  width: 100%;
  height: $height;
  background-color: var(--color-back-progress);
  z-index: 2;
}

.front {
  background-color: var(--color-front-progress);
  height: $height;
  width: var(--width-progress);
  z-index: 3;
  animation: load var(--transition-duration) var(--transition-timing-func);
}

@keyframes load {
  from {
    width: 0;
  }
}
</style>
