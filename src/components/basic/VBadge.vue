<template>
  <div
    :class="[
      $style.root,
      $style[`size-${props.size}`],
      $style[`position-${props.position}`],
      $style[`variant-${props.variant}`],

      value <= 0 && $style.hasHidden
    ]"
  >
    <VText
      variant="caption"
      :class="$style.badge"
    >
      <span v-if="variant !== BadgeVariant.DOT">{{ displayedValue }}</span>
    </VText>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VText from '@/components/basic/VText.vue';
import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import {
  BadgePosition,
  BadgeSize,
  BadgeVariant,
} from '@/model/components/basic/VBadge';

interface PropsType {
  value?: number;
  color?: GlobalColors;
  size?: BadgeSize;
  variant?: BadgeVariant;
  position?: BadgePosition;
  maxValue?: number;
}

const props = withDefaults(defineProps<PropsType>(), {
  value: 0,
  color: GlobalColors.PRIMARY,
  size: BadgeSize.NORMAL,
  variant: BadgeVariant.DEFAULT,
  position: BadgePosition.RIGHT_TOP,
  maxValue: 9999,
});

const badgeColor = computed(() => GlobalColorMap['700'][props.color]);
const badgeColorLight = computed(() => GlobalColorMap['200'][props.color]);
const displayedValue = computed<string>(() => (props.value >= props.maxValue ? `${props.maxValue}+` : `${props.value}`));
</script>

<style module lang="scss">
$small-size: 'small', // $key
  0px, // $padding
  8px, // $border-radius
  11px, // $size
  9px; // font-size
$normal-size: 'normal', // $key
  6px, // $padding
  10px, // $border-radius
  20px, // $size
  12px; // font-size

.root {
  --badge-color: v-bind(badgeColor);
  --badge-color-light: v-bind(badgeColorLight);

  position: relative;
}

.size {
  @each $key, $padding, $border-radius, $size, $font-size in $small-size, $normal-size {
    $divider: 1.15;

    &-#{$key} .badge {
      border-radius: $border-radius;
      padding: $padding;
      height: $size;
      min-width: $size;
      font-size: $font-size;
    }

    &-#{$key}.position-left-top {
      .badge {
        bottom: calc(100% - $size / $divider);
        right: calc(100% - $size / $divider);
      }
    }

    &-#{$key}.position-right-top {
      .badge {
        bottom: calc(100% - $size / $divider);
        left: calc(100% - $size / $divider);
      }
    }

    &-#{$key}.position-left-bottom {
      .badge {
        top: calc(100% - $size / $divider);
        right: calc(100% - $size / $divider);
      }
    }

    &-#{$key}.position-right-bottom {
      .badge {
        top: calc(100% - $size / $divider);
        left: calc(100% - $size / $divider);
      }
    }
  }
}

.badge {
  position: absolute;
  background-color: var(--badge-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-card);
  color: var(--color-button-text);
  transition: width 0.1s var(--transition-timing-func),
    height 0.1s var(--transition-timing-func),
    min-width 0.1s var(--transition-timing-func),
    transform 0.1s var(--transition-timing-func);
  transform: scale(1);

  .hasHidden & {
    transform: scale(0);
  }
}

.variant {
  &-light .badge {
    --badge-color: v-bind(badgeColorLight);
    --badge-color-light: v-bind(badgeColor);

    color: var(--badge-color-light);
  }
}
</style>
