<template>
  <div
    :class="[
      $style.root,

    ]"
  >
    <div :class="$style.target">
      <slot />
    </div>

    <VText
      v-if="title"
      :class="[
        $style.tooltip,
        $style[`position-${position}`]
      ]"
      variant="body2"
    >
      {{ title }}
    </VText>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VText from '@/components/basic/VText.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { TooltipPosition } from '@/model/components/basic/VTooltip';

interface PropsType {
  title: string | undefined;
  color?: GlobalColors;
  position?: TooltipPosition;
}

const props = withDefaults(defineProps<PropsType>(), {
  color: GlobalColors.DEFAULT,
  position: TooltipPosition.RIGHT,
});

const tooltipColor = computed(() => GlobalColorMap['700'][props.color]);
</script>

<style module lang="scss">
$top: 'top', // $key
  'left', // $centered-prop
  translateX(-50%), // $centered-value
  'left', // $start-prop
  'right', // $end-prop
  'bottom', // $opp-offset
  50% bottom; // $transform-origin

$right: 'right', // $key
  'top', // $centered-prop
  translateY(-50%), // $centered-value
  'top', // $start-prop
  'bottom', // $end-prop
  'left', // $opp-offset
  left 50%; // $transform-origin

$left: 'left', // $key
  'top', // $centered-prop
  translateY(-50%), // $centered-value
  'top', // $start-prop
  'bottom', // $end-prop
  'right', // $opp-offset
  right 50%; // $transform-origin

$bottom: 'bottom', // $key
  'left', // $centered-prop
  translateX(-50%), // $centered-value
  'left', // $start-prop
  'right', // $end-prop
  'top', // $opp-offset
  50% top; // $transform-origin

.root {
  --tooptip-color: v-bind(tooltipColor);

  position: relative;
}

.tooltip {
  position: absolute;
  padding: 2px 5px 3px;
  background-color: var(--tooptip-color);
  color: var(--color-button-text);
  border-radius: 4px;
  opacity: 0;
  transition: opacity var(--transition-duration) var(--transition-timing-func),
    transform var(--transition-duration) var(--transition-timing-func);
  white-space: nowrap;
  pointer-events: none;
}

.position {
  @each $key,
    $centered-prop,
    $centered-value,
    $start-prop,
    $end-prop,
    $opp-offset,
    $transform-origin in $top, $right, $bottom, $left {
    &-#{$key} {
      #{$centered-prop}: 50%;
      transform: $centered-value scale(0.8);

      &-start {
        #{$start-prop}: 0;
        transform: scale(0.8);
      }

      &-end {
        #{$end-prop}: 0;
        transform: scale(0.8);
      }

      &,
      &-start,
      &-end {
        #{$opp-offset}: calc(100% + 10px);
        transform-origin: $transform-origin;

        .target:hover + & {
          opacity: 0.8;
          transform: scale(1);
        }
      }

      & {
        .target:hover + & {
          transform: $centered-value scale(1);
        }
      }
    }
  }
}
</style>
