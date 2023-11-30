<template>
  <VOffset :class="$style.root">
    <VAvatar
      v-for="(avatar, i) in props.data"
      :key="avatar.id"
      :class="$style.avatar"
      :size="AvatarSize.SMALL"
      :style="{
        'z-index': i + 5,
        'left': `${i * 25}px`,
        'position': 'absolute',
      }"
    >
      <img
        :src="getPathImg(avatar.src)"
        :alt="avatar.alt"
      >
    </VAvatar>
  </VOffset>
</template>

<script setup lang="ts">
import VAvatar from '@/components/basic/VAvatar.vue';
import VOffset from '@/components/basic/VOffset.vue';
import { type AvatarGroup, AvatarSize } from '@/model/components/basic/VAvatar';
import { getPathImg } from '@/model/tools/PathTools';

interface PropsType {
  data: AvatarGroup[],
  size?: AvatarSize,
}

const props = withDefaults(defineProps<PropsType>(), {
  size: AvatarSize.SMALL,
});
</script>

<style module lang="scss">
.root {
  position: relative;
}
</style>
