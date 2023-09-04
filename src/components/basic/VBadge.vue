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
    <div :class="$style.badge">
      <span v-if="variant !== BadgeVariant.DOT">{{ displayedValue }}</span>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { GlobalColors } from '@/model/Colors';
import {
  BadgeMapColor,
  BadgeMapColorLight,
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

const badgeColor = computed(() => BadgeMapColor[props.color]);
const badgeColorLight = computed(() => BadgeMapColorLight[props.color]);
const displayedValue = computed<string>(() => (props.value >= props.maxValue ? `${props.maxValue}+` : `${props.value}`));
</script>

<style module lang="scss">
@import "@/scss/mixins/typography";

$small-size: 'small', // $key
  0px, // $padding
  8px, // $border-radius
  10px, // $size
  10px; // font-size
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
    $divider: 1.5;
    $dividerHasHidden: $divider * 2;

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

      &.hasHidden .badge {
        bottom: calc(100% - $size / $dividerHasHidden);
        right: calc(100% - $size / $dividerHasHidden);
      }
    }

    &-#{$key}.position-right-top {
      .badge {
        bottom: calc(100% - $size / $divider);
        left: calc(100% - $size / $divider);
      }

      &.hasHidden .badge {
        bottom: calc(100% - $size / $dividerHasHidden);
        left: calc(100% - $size / $dividerHasHidden);
      }
    }

    &-#{$key}.position-left-bottom {
      .badge {
        top: calc(100% - $size / $divider);
        right: calc(100% - $size / $divider);
      }

      &.hasHidden .badge {
        top: calc(100% - $size / $dividerHasHidden);
        right: calc(100% - $size / $dividerHasHidden);
      }
    }

    &-#{$key}.position-right-bottom {
      .badge {
        top: calc(100% - $size / $divider);
        left: calc(100% - $size / $divider);
      }

      &.hasHidden .badge {
        top: calc(100% - $size / $dividerHasHidden);
        left: calc(100% - $size / $dividerHasHidden);
      }
    }
  }
}

.badge {
  @include caption;

  position: absolute;
  background-color: var(--badge-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-button-text);
  transition: width 0.1s var(--transition-timing-func),
    height 0.1s var(--transition-timing-func),
    min-width 0.1s var(--transition-timing-func),
    bottom 0.1s var(--transition-timing-func),
    top 0.1s var(--transition-timing-func),
    left 0.1s var(--transition-timing-func),
    right 0.1s var(--transition-timing-func);

  .hasHidden & {
    padding: 0;
    overflow: hidden;
    min-width: 0;
    width: 0;
    height: 0;
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
