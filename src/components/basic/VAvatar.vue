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
import {
  computed,
  useSlots,
  watchEffect,
} from 'vue';

import { GlobalColors } from '@/model/Colors';
import {
  AvatarMapColor,
  AvatarMapColorLight,
  AvatarSize,
  AvatarVariant,
} from '@/model/components/VAvatar';

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

const slots = useSlots()?.default();

const slotTagName = slots[0]?.type;
const isVisibleLetter = computed<boolean>(() => !slots);
const letterFormatting = computed<string>(() => {
  const name = props.letter.split(' ');
  const { length } = name;

  if (length >= 2) return `${name[0][0]}${name[1][0]}`.toUpperCase();
  if (length === 1) return name[0][0].toUpperCase();
  return 'N';
});

const avatarColor = computed<string>(() => AvatarMapColor[props.color]);
const avatarColorLight = computed<string>(() => AvatarMapColorLight[props.color]);

watchEffect(() => {
  console.log(slotTagName);
});
</script>

<style module lang="scss">
.root {
  --color-avatar: v-bind(avatarColor);
  --color-avatar-light: v-bind(avatarColorLight);

  pointer-events: none;
}

.withLetter {
  background-color: var(--color-avatar);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-button-text);

  &.variant-cycle {
    border-radius: 50%;
  }

  &.variant-rounded {
    border-radius: 5px;
  }

  &.size-small {
    width: 25px;
    height: 25px;
  }

  &.size-medium {
    width: 40px;
    height: 40px;
  }

  &.size-large {
    width: 56px;
    height: 56px;
  }
}

.light {
  background-color: var(--color-avatar-light);
  color: var(--color-avatar);
}

img {
  .root & {
    display: block;
  }

  .variant-cycle & {
    border-radius: 50%;
  }

  .variant-rounded & {
    border-radius: 5px;
  }

  .size-small & {
    width: 25px;
    height: 25px;
  }

  .size-medium & {
    width: 40px;
    height: 40px;
  }

  .size-large & {
    width: 56px;
    height: 56px;
  }
}
</style>
