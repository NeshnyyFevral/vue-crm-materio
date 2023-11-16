<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Badge colors"
      desc="Use color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VBadge> component for different colored badge."
    >
      <VBadge
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        :value="4"
        :color="GlobalColors[color]"
      >
        <VAvatar>
          <img
            :src="getPathImg('avatars/1.png')"
            alt="1"
          >
        </VAvatar>
      </VBadge>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Badge sizes"
      desc="Use size={'small' | 'normal} prop with <VBadge> component for different sized badge."
    >
      <VBadge
        v-for="size in Object.keys(BadgeSize)"
        :key="size"
        :value="3"
        :size="BadgeSize[size]"
      >
        <VAvatar>
          <img
            :src="getPathImg('avatars/2.png')"
            alt="1"
          >
        </VAvatar>
      </VBadge>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Badge positions"
      desc="Use position={'right-top' | 'right-bottom' | 'left-bottom' | 'left-top'} prop with <VBadge> component   for different positioned badge."
    >
      <VBadge
        v-for="position in Object.keys(BadgePosition)"
        :key="position"
        :value="1"
        :position="BadgePosition[position]"
      >
        <VAvatar>
          <img
            :src="getPathImg('avatars/3.png')"
            alt="1"
          >
        </VAvatar>
      </VBadge>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Badge light"
      desc="Use variant={'light'} to reverse the colors of the badge."
    >
      <VBadge
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        :value="4"
        :color="GlobalColors[color]"
        :variant="BadgeVariant.LIGHT"
      >
        <VAvatar>
          <img
            :src="getPathImg('avatars/1.png')"
            alt="1"
          >
        </VAvatar>
      </VBadge>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Badge dots"
      desc="Use variant={'dot'} to remove badge text."
    >
      <VBadge
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        :value="4"
        :color="GlobalColors[color]"
        :variant="BadgeVariant.DOT"
        :size="BadgeSize.SMALL"
      >
        <VAvatar>
          <img
            :src="getPathImg('avatars/1.png')"
            alt="1"
          >
        </VAvatar>
      </VBadge>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Badge max value"
      desc="Use prop max-value, to limit current value."
      :gap="20"
    >
      <VBadge
        :max-value="9"
        :value="10"
      >
        <VAvatar>
          <img
            :src="getPathImg('avatars/1.png')"
            alt="1"
          >
        </VAvatar>
      </VBadge>

      <VBadge
        :max-value="99"
        :value="100"
      >
        <VAvatar>
          <img
            :src="getPathImg('avatars/1.png')"
            alt="1"
          >
        </VAvatar>
      </VBadge>

      <VBadge
        :max-value="999"
        :value="1000"
      >
        <VAvatar>
          <img
            :src="getPathImg('avatars/1.png')"
            alt="1"
          >
        </VAvatar>
      </VBadge>
    </VPreviewComponentCard>

    <VPreviewComponentCard title="Badge visibility">
      <VBadge :value="badgeValue">
        <VAvatar>
          <img
            :src="getPathImg('avatars/3.png')"
            alt="1"
          >
        </VAvatar>
      </VBadge>

      <VButton
        :variant="ButtonVariant.TEXT"
        :color="GlobalColors.ERROR"
        @click="badgeValue -= 1"
      >
        remove
      </VButton>
      <VButton
        :variant="ButtonVariant.TEXT"
        @click="badgeValue += 1"
      >
        add
      </VButton>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import VAvatar from '@/components/basic/VAvatar.vue';
import VBadge from '@/components/basic/VBadge.vue';
import VButton from '@/components/basic/VButton.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import { GlobalColors } from '@/model/Colors';
import {
  BadgePosition,
  BadgeSize,
  BadgeVariant,
} from '@/model/components/basic/VBadge';
import { ButtonVariant } from '@/model/components/basic/VButton';
import { getPathImg } from '@/model/tools/PathTools';

const badgeValue = ref<number>(2);
</script>
