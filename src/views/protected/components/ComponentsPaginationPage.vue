<template>
  <VPreviewComponentPage>
    <VPreviewComponentCard
      :direction="PreviewDirection.COLUMN"
      title="Pagination colors"
    >
      <VPagination
        :page="1"
        :count="10"
      />
    </VPreviewComponentCard>
  </VPreviewComponentPage>
</template>
<script setup lang="ts">
import VPagination from '@/components/basic/VPagination.vue';
import VPreviewComponentCard from '@/components/basic/VPreviewComponentCard.vue';
import VPreviewComponentPage from '@/components/basic/VPreviewComponentPage.vue';
import { PreviewDirection } from '@/model/components/basic/VPreviewComponentCard';
</script>
