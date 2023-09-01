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
            src="@/assets/avatars/2.png"
            alt="1"
          >
        </VAvatar>
      </VBadge>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Badge sizes"
      desc="Use size={'small' | 'normal' | 'large'} prop with <VBadge> component for different sized badge."
    >
      <VBadge
        v-for="size in Object.keys(BadgeSize)"
        :key="size"
        :value="4"
        :size="BadgeSize[size]"
      >
        <VAvatar>
          <img
            src="@/assets/avatars/2.png"
            alt="1"
          >
        </VAvatar>
      </VBadge>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Badge positions"
      desc="Use position={'right-top' | 'right-bottom' | 'left-bottom' | 'left-top'} prop with <VBadge> component for different positioned badge."
    >
      <VBadge
        v-for="position in Object.keys(BadgePosition)"
        :key="position"
        :value="4"
        :position="BadgePosition[position]"
      >
        <VAvatar>
          <img
            src="@/assets/avatars/2.png"
            alt="1"
          >
        </VAvatar>
      </VBadge>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>
<script setup lang="ts">
import VAvatar from '@/components/basic/VAvatar.vue';
import VBadge from '@/components/basic/VBadge.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import { GlobalColors } from '@/model/Colors';
import { BadgePosition, BadgeSize } from '@/model/components/basic/VBadge';
</script>
