<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      :direction="PreviewDirection.COLUMN"
      title="Skeleton width"
      desc="Use width={ 'px', '%' } prop with <VSkeleton> component for different width."
    >
      <VSkeleton
        v-for="width in Card01Width"
        :key="width"
        :width="`${width}px`"
        height="14px"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      :direction="PreviewDirection.COLUMN"
      title="Skeleton height"
      desc="Use width={ 'px', '%' } prop with <VSkeleton> component for different height."
    >
      <VSkeleton
        v-for="height in Card01Height"
        :key="height"
        width="100px"
        :height="`${height}px`"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      :direction="PreviewDirection.COLUMN"
      title="Skeleton variant"
      desc="Use variant={ 'circle', 'paragraph', 'field' } prop with <VSkeleton> component for different variant."
    >
      <VSkeleton
        v-for="variant in Object.values(SkeletonVariant)"
        :key="variant"
        :variant="variant"
        width="50px"
        height="50px"
      />
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>
<script setup lang="ts">
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import VSkeleton from '@/components/basic/VSkeleton.vue';
import { PreviewDirection } from '@/model/components/basic/VPreviewComponentCard';
import { SkeletonVariant } from '@/model/components/basic/VSkeleton';

const Card01Width = [250, 200, 175, 150, 75, 25];
const Card01Height = [40, 36, 30, 15, 10];
</script>
