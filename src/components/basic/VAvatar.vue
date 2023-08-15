<template>
  <div
    :class="[
      $style.root,
      $style[`variant-${props.variant}`],
      $style[`size-${props.size}`],
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { AvatarSize, AvatarVariant } from '@/model/components/VAvatar';

interface PropsType {
  size?: AvatarSize;
  variant?: AvatarVariant;
}

const props = withDefaults(defineProps<PropsType>(), {
  size: AvatarSize.MEDIUM,
  variant: AvatarVariant.CYCLE,
});
</script>

<style module lang="scss">
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
