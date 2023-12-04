<template>
  <div
    :class="[
      $style.root,
      $style[`variant-${props.variant}`],
      $style[`size-${props.size}`],
      isVisibleLetter && $style.withLetter,
      light && $style.light,
      outlined && $style.hasOutlined,
      filled && $style.filled,
    ]"
  >
    <slot />

    <div v-if="isVisibleLetter">
      {{ letterStrong ? letterStrong : letterFormatting }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

import { GlobalColorMap, GlobalColors } from '@/model/Colors';
import { AvatarSize, AvatarVariant } from '@/model/components/basic/VAvatar';

interface PropsType {
  size?: AvatarSize;
  variant?: AvatarVariant;
  letter?: string;
  color?: GlobalColors;
  light?: boolean;
  outlined?: boolean;
  filled?: boolean;
  letterStrong?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  size: AvatarSize.MEDIUM,
  variant: AvatarVariant.CYCLE,
  letter: 'Noname',
  letterStrong: '',
  color: GlobalColors.PRIMARY,
  light: false,
  outline: false,
  filled: false,
});

const slots = useSlots();

const isVisibleLetter = computed<boolean>(() => {
  if (slots.default && slots.default()[0].children === 'v-if') {
    return true;
  }

  return !slots?.default;
});
const letterFormatting = computed<string>(() => {
  const name = props.letter.split(' ');
  const { length } = name;

  if (length >= 2) return `${name[0][0]}${name[1][0]}`.toUpperCase();
  if (length === 1) {
    return name[0].length >= 2
      ? `${name[0][0]}${name[0][1]}`.toUpperCase()
      : `${name[0][0]}`.toUpperCase();
  }
  return 'N';
});
const avatarColor = computed<string>(() => GlobalColorMap['700'][props.color]);
const avatarColorLight = computed<string>(() => GlobalColorMap['100'][props.color]);
</script>

<style module lang="scss">
$border-radius: 50%;
$sizes: (
    small: 30px,
    medium: 40px,
    large: 56px,
    extra-large: 120px,
);

.root {
  --color-avatar: v-bind(avatarColor);
  --color-avatar-light: v-bind(avatarColorLight);

  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  user-select: none;

  &.filled {
    background-color: var(--color-avatar);
  }

  &.variant-cycle {
    border-radius: $border-radius;
  }

  &.variant-rounded {
    border-radius: 7px;
  }

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

  &.variant-square {
    border-radius: 0;
  }

  @each $key, $size in $sizes {
    &.size-#{$key} {
      width: calc($size + 2px);
      height: calc($size + 2px);
    }
  }
}

.hasOutlined {
  background-color: transparent;
  border: 2px solid var(--color-avatar);
  color: var(--color-text);

  transition: color var(--transition-duration) var(--transition-timing-func);
}

.light {
  background-color: var(--color-avatar-light);
  color: var(--color-text);

  path {
    fill: var(--color-avatar);
  }
}

@each $key, $size in $sizes {
  .size-#{$key} {
    width: calc($size + 5px);
    height: calc($size + 5px);
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

  .variant-square & {
    border-radius: 0;
  }

  @each $key, $size in $sizes {
    .size-#{$key} & {
      width: $size;
      height: $size;
    }
  }
}
</style>
