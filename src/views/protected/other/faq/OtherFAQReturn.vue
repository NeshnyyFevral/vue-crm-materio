<template>
  <OtherFAQInner
    :icon="faqStore.returnInner.icon"
    :title="faqStore.returnInner.title"
    :description="faqStore.returnInner.description"
    :questions="faqStore.returnInner.questions"
  />
</template>

<script setup lang="ts">
import OtherFAQInner from '@/components/other/faq/OtherFAQInner.vue';
import { useFAQStore } from '@/stores/faq';

const faqStore = useFAQStore();
</script>
