<template>
  <VOffset
    :height="props.height"
    :width="props.width"
    :class="[
      $style.root,
      $style[`variant-${props.variant}`],
    ]"
  >
    <div :class="$style.back" />
    <div :class="$style.front" />
  </VOffset>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VOffset from '@/components/basic/VOffset.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { ProgressVariant } from '@/model/components/basic/VProgress';

interface PropsType {
  percentage: string;
  color?: GlobalColors;
  variant?: ProgressVariant;
  height?: string;
  borderRadius?: string;
  weight?: string;
  width?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  percentage: '0',
  color: GlobalColors.PRIMARY,
  variant: ProgressVariant.HORIZONTAL,
  height: '5px',
  borderRadius: '0',
  weight: '5',
  width: '100%',
});

const fontColor = computed(() => GlobalColorMap['600'][props.color]);
const backColor = computed(() => GlobalColorMap['100'][props.color]);
const frontWidth = computed(() => `${props.percentage}%`);
const borderRadius = computed(() => `${props.borderRadius}px`);
const weight = computed(() => `${props.weight}px`);
</script>

<style module lang="scss">
.root {
  --weight-progress: v-bind(weight);
  --width-progress: v-bind(frontWidth);
  --color-front-progress: v-bind(fontColor);
  --color-back-progress: v-bind(backColor);
  --border-radius-progress: v-bind(borderRadius);
  overflow: hidden;

  position: relative;
}

.variant {
  &-horizontal {
    .front,
    .back {
      left: 0;
      top: 0;
    }

    .back {
      width: 100%;
      height: var(--weight-progress);
    }

    .front {
      width: var(--width-progress);
      height: var(--weight-progress);
      animation: loadHoriz 0.4s cubic-bezier(0.460, 0.155, 0.375, 1.8);
    }
  }

  &-vertical {
    .front,
    .back {
      left: 0;
      bottom: 0;
    }

    .back {
      height: 100%;
      width: var(--weight-progress);
    }

    .front {
      height: var(--width-progress);
      width: var(--weight-progress);
      animation: loadVert 0.4s cubic-bezier(0.460, 0.155, 0.375, 1.8);
    }
  }
}

.back,
.front {
  position: absolute;
  border-radius: var(--border-radius-progress);
}

.back {
  background-color: var(--color-back-progress);
  z-index: 2;
}

.front {
  background-color: var(--color-front-progress);
  z-index: 3;
}

@keyframes loadHoriz {
  from {
    width: 0;
  }
}

@keyframes loadVert {
  from {
    height: 0;
  }
}
</style>
