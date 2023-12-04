<template>
  <VOffset :class="$style.root">
    <div
      v-for="(avatar, i) in props.data"
      :key="avatar.id"
    >
      <VAvatar
        v-if="i < 4"
        :class="$style.avatar"
        :size="props.size"
        :style="{
          'z-index': -i + 5,
          'left': `${i * offset[props.size]}px`,
        }"
      >
        <VTooltip
          :title="avatar.tooltip"
          :position="TooltipPosition.BOTTOM"
        >
          <img
            :src="getPathImg(avatar.src)"
            :alt="avatar.alt"
          >
        </VTooltip>
      </VAvatar>
    </div>

    <VAvatar
      v-if="props.data.length > 4"
      :class="$style.more"
      :letter-strong="`+${props.data.length - 4}`"
      :size="props.size"
      :color="GlobalColors.DEFAULT"
      light
      :style="{
        'z-index': -4 + 5,
        'left': `${4 * offset[props.size] + 7}px`,
      }"
    />
  </VOffset>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import VAvatar from '@/components/basic/VAvatar.vue';
import VOffset from '@/components/basic/VOffset.vue';
import VTooltip from '@/components/basic/VTooltip.vue';
import { GlobalColors } from '@/model/Colors';
import { type AvatarGroup, AvatarSize } from '@/model/components/basic/VAvatar';
import { TooltipPosition } from '@/model/components/basic/VTooltip';
import { getPathImg } from '@/model/tools/PathTools';

interface PropsType {
  data: AvatarGroup[],
  size?: AvatarSize,
}

const props = withDefaults(defineProps<PropsType>(), {
  size: AvatarSize.SMALL,
});

const offset = {
  [AvatarSize.SMALL]: 25,
  [AvatarSize.MEDIUM]: 35,
  [AvatarSize.LARGE]: 45,
  [AvatarSize.EXTRA_LARGE]: 90,
};

onMounted(() => {
  console.log(`+${props.data.length - 4}`);
});
</script>

<style module lang="scss">
.root {
  position: relative;
}

.avatar {
  position: absolute;
  border: 3px solid var(--color-card);
  cursor: pointer;
  user-select: auto;
  pointer-events: auto;
  transition: transform var(--transition-duration) var(--transition-timing-func);

  &:hover {
    z-index: 20 !important;
    transform: translateY(-10%);
  }
}

.more {
  position: absolute;
  cursor: pointer;
  user-select: auto;
  pointer-events: auto;
  transition: transform var(--transition-duration) var(--transition-timing-func);
  top: 2px;

  &:hover {
    z-index: 20 !important;
    transform: translateY(-10%);
  }
  //border: 3px solid var(--color-text);
}
</style>
