<template>
  <div
    :class="[
      $style.root,
      $style[`variant-${props.variant}`],
      $style[`size-${props.size}`],
      isVisibleLetter && $style.withLetter,
      light && $style.light,
    ]"
  >
    <slot />

    <div v-if="isVisibleLetter">
      {{ letterFormatting }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

import { GlobalColors } from '@/model/Colors';
import {
  AvatarMapColor,
  AvatarMapColorLight,
  AvatarSize,
  AvatarVariant,
} from '@/model/components/basic/VAvatar';

interface PropsType {
  size?: AvatarSize;
  variant?: AvatarVariant;
  letter?: string;
  color?: GlobalColors;
  light?: boolean;
}

const props = withDefaults(defineProps<PropsType>(), {
  size: AvatarSize.MEDIUM,
  variant: AvatarVariant.CYCLE,
  letter: 'Noname',
  color: GlobalColors.PRIMARY,
  light: false,
});

const slots = useSlots();

const isVisibleLetter = computed<boolean>(() => !slots?.default);
const letterFormatting = computed<string>(() => {
  const name = props.letter.split(' ');
  const { length } = name;

  if (length >= 2) return `${name[0][0]}${name[1][0]}`.toUpperCase();
  if (length === 1) return name[0][0].toUpperCase();
  return 'N';
});
const avatarColor = computed<string>(() => AvatarMapColor[props.color]);
const avatarColorLight = computed<string>(() => AvatarMapColorLight[props.color]);
</script>

<style module lang="scss">
$border-radius: 50%;
$sizes: (
    small: 25px,
    medium: 40px,
    large: 56px,
);

.root {
  --color-avatar: v-bind(avatarColor);
  --color-avatar-light: v-bind(avatarColorLight);

  border-radius: $border-radius;
  background-color: var(--color-avatar);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  path {
    fill: var(--color-button-text);
  }
}

.withLetter {
  color: var(--color-button-text);

  &.variant-cycle {
    border-radius: $border-radius;
  }

  &.variant-rounded {
    border-radius: 5px;
  }

  @each $key, $size in $sizes {
    &.size-#{$key} {
      width: $size;
      height: $size;
    }
  }
}

.light {
  background-color: var(--color-avatar-light);
  color: var(--color-avatar);

  path {
    fill: var(--color-avatar);
  }
}

@each $key, $size in $sizes {
  .size-#{$key} {
    width: $size;
    height: $size;
  }
}

img {
  .root & {
    display: block;
  }

  .variant-cycle & {
    border-radius: $border-radius;
  }

  .variant-rounded & {
    border-radius: 5px;
  }

  @each $key, $size in $sizes {
    .size-#{$key} & {
      width: $size;
      height: $size;
    }
  }
}
</style>
