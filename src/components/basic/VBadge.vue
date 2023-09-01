<template>
  <div
    :class="[
      $style.root,
      $style[`size-${props.size}`],
      $style[`position-${props.position}`],
      $style[`variant-${props.variant}`],
    ]"
  >
    <div :class="$style.badge">
      {{ props.value }}
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
}

const props = withDefaults(defineProps<PropsType>(), {
  value: 0,
  color: GlobalColors.PRIMARY,
  size: BadgeSize.NORMAL,
  variant: BadgeVariant.DEFAULT,
  position: BadgePosition.LEFT_TOP,
});

const badgeColor = computed(() => BadgeMapColor[props.color]);
const badgeColorLight = computed(() => BadgeMapColorLight[props.color]);
</script>

<style module lang="scss">
@import "@/scss/mixins/typography";

$sizes: (
  small: 14px,
  normal: 20px,
  large: 24px,
);

.root {
  --badge-color: v-bind(badgeColor);
  --badge-color-light: v-bind(badgeColorLight);

  position: relative;
}

.badge {
  @include caption;

  position: absolute;
  border-radius: 50%;
  background-color: var(--badge-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-button);
}

.size {
  @each $key, $size in $sizes {
    &-#{$key} .badge {
      width: $size;
      height: $size;
    }

    &-#{$key}.position-left-top .badge {
      bottom: calc(100% - $size * 0.8);
      right: calc(100% - $size * 0.8);
    }

    &-#{$key}.position-right-top .badge {
      bottom: calc(100% - $size * 0.8);
      left: calc(100% - $size * 0.8);
    }

    &-#{$key}.position-left-bottom .badge {
      top: calc(100% - $size * 0.8);
      right: calc(100% - $size * 0.8);
    }

    &-#{$key}.position-right-bottom .badge {
      top: calc(100% - $size * 0.8);
      left: calc(100% - $size * 0.8);
    }
  }
}

.variant {

}
</style>
