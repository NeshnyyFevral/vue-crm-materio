<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      :direction="PreviewDirection.COLUMN"
      title="Pagination colors"
      desc="Use color={'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'} prop with <VPagination> component for different colored buttons."
    >
      <VPagination
        v-for="color in Object.keys(GlobalColors)"
        :key="color"
        v-model="colorPage"
        :color="GlobalColors[color]"
        :count="10"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      :direction="PreviewDirection.COLUMN"
      title="Pagination sizes"
      desc="Use size={'small' | 'medium' | 'large'} prop with <VPagination> component for different sized buttons."
    >
      <VPagination
        v-for="size in Object.keys(PaginationSize)"
        :key="size"
        v-model="sizePage"
        :size="PaginationSize[size]"
        :count="10"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      :direction="PreviewDirection.COLUMN"
      title="Pagination variants"
      desc="Use variant={'filled' | 'transparent' | 'light'} prop with <VPagination> component for different varianted buttons."
    >
      <VPagination
        v-for="variant in Object.keys(PaginationVariant)"
        :key="variant"
        v-model="variantPage"
        :variant="PaginationVariant[variant]"
        :count="10"
      />
    </VPreviewComponentCard>

    <VPreviewComponentCard
      :direction="PreviewDirection.COLUMN"
      title="Pagination rounded"
      desc="Use «rounded» prop with <VPagination> component."
    >
      <VPagination
        v-for="variant in Object.keys(PaginationVariant)"
        :key="variant"
        v-model="roundedPage"
        :variant="PaginationVariant[variant]"
        :count="15"
        rounded
      />
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import VPagination from '@/components/basic/VPagination.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import { GlobalColors } from '@/model/Colors';
import { PaginationSize, PaginationVariant } from '@/model/components/basic/VPagination';
import { PreviewDirection } from '@/model/components/basic/VPreviewComponentCard';

const colorPage = ref<number>(1);
const sizePage = ref<number>(1);
const variantPage = ref<number>(1);
const roundedPage = ref<number>(1);
</script>
