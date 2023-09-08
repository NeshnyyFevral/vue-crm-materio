<template>
  <div
    :class="[
      $style.root,

    ]"
  >
    <div :class="$style.target">
      <slot />
    </div>

    <div
      :class="[
        $style.tooltip,
        $style[`position-${position}`]
      ]"
    >
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { GlobalColors } from '@/model/Colors';
import { TooltipMapColor, TooltipPosition } from '@/model/components/basic/VTooltip';

interface PropsType {
  title: string;
  color?: GlobalColors;
  position?: TooltipPosition;
}

const props = withDefaults(defineProps<PropsType>(), {
  color: GlobalColors.DEFAULT,
  position: TooltipPosition.RIGHT,
});

const tooltipColor = computed(() => TooltipMapColor[props.color]);
</script>

<style module lang="scss">
@import "@/scss/mixins/typography";

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
  @include body2;

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
        #{$opp-offset}: calc(100% + 5px);
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
