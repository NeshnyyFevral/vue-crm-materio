<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      title="Icon button variant"
      desc="Use variant={'filled' | 'transparent' | 'light'} prop with <VIconButton> component for different varianted buttons."
    >
      <VIconButton
        v-for="variant in Object.keys(IconButtonVariant)"
        :key="variant"
        :variant="IconButtonVariant[variant]"
      >
        <ZoomIcon />
      </VIconButton>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Icon buttons color"
      desc="Use color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VIconButton> component for different colored buttons."
    >
      <VIconButton
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        :color="GlobalColors[color]"
      >
        <ZoomIcon />
      </VIconButton>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Icon buttons size"
      desc="Use size={'small' | 'medium' | 'large'} prop with <VIconButton> component for different sized buttons."
    >
      <VIconButton
        v-for="size in Object.keys(IconButtonSize)"
        :key="size"
        :size="IconButtonSize[size]"
      >
        <ZoomIcon />
      </VIconButton>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Icon button rounded"
      desc="Use «rounded» prop with <VIconButton> component."
    >
      <VIconButton
        v-for="variant in Object.keys(IconButtonVariant)"
        :key="variant"
        :variant="IconButtonVariant[variant]"
        rounded
      >
        <ZoomIcon />
      </VIconButton>
    </VPreviewComponentCard>

    <VPreviewComponentCard
      title="Icon button disabled"
      desc="Use «disabled» prop with <VIconButton> component."
      :direction="PreviewDirection.COLUMN"
    >
      <div :class="$style.flex">
        <VIconButton
          v-for="variant in Object.keys(IconButtonVariant)"
          :key="variant"
          :variant="IconButtonVariant[variant]"
          :color="GlobalColors.PRIMARY"
        >
          <ZoomIcon />
        </VIconButton>
      </div>
      <div :class="$style.flex">
        <VIconButton
          v-for="variant in Object.keys(IconButtonVariant)"
          :key="variant"
          :variant="IconButtonVariant[variant]"
          :color="GlobalColors.PRIMARY"
          disabled
        >
          <ZoomIcon />
        </VIconButton>
      </div>
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>

<script setup lang="ts">
import ZoomIcon from '@public/assets/icons/button/zoom.svg';

import VIconButton from '@/components/basic/VIconButton.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import { GlobalColors } from '@/model/Colors';
import { IconButtonSize, IconButtonVariant } from '@/model/components/basic/VIconButton';
import { PreviewDirection } from '@/model/components/basic/VPreviewComponentCard';
</script>

<style module lang="scss">
.flex {
  display: flex;
  gap: 15px;
}
</style>
