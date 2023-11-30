<template>
  <VOffset>
    <VTitle variant="heading5">
      Teams
    </VTitle>

    <VAvatarGroup :data="avatarGroup" />
  </VOffset>
</template>

<script setup lang="ts">
import VAvatarGroup from '@/components/basic/VAvatarGroup.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTitle from '@/components/basic/VTitle.vue';
import type { AvatarGroup } from '@/model/components/basic/VAvatar';
import { getRandomId } from '@/model/tools/RandomTools';

const avatarGroup: AvatarGroup[] = [
  { id: getRandomId(), src: 'avatars/2.png', alt: '1' },
  { id: getRandomId(), src: 'avatars/2.png', alt: '1' },
  { id: getRandomId(), src: 'avatars/2.png', alt: '1' },
];
</script>

<style module lang="scss">
// f
</style>
